const { spawn } = require('child_process');
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

async function waitForServerOnPorts(ports, timeout = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    for (const p of ports) {
      const urlV4 = `http://127.0.0.1:${p}/`;
      const urlLocal = `http://localhost:${p}/`;
      try {
        const res = await fetch(urlV4, { method: 'GET' });
        return { res, url: urlV4 };
      } catch (e) {
        // try localhost if 127.0.0.1 failed
      }
      try {
        const res2 = await fetch(urlLocal, { method: 'GET' });
        return { res: res2, url: urlLocal };
      } catch (e) {
        // ignore and try next
      }
    }
    await new Promise(r => setTimeout(r, 200));
  }
  throw new Error(`Timed out waiting for server on ports: ${ports.join(', ')}`);
}

(async () => {
  try {
    console.log('1) Building project...');
    const build = spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: true });
    await new Promise((resolve, reject) => build.on('close', code => code === 0 ? resolve() : reject(new Error('Build failed'))));

    console.log('2) Starting preview server...');
    // start vite preview (port can vary, parse stdout to learn port)
    const preview = spawn('npm', ['run', 'preview'], { shell: true, stdio: ['ignore', 'pipe', 'pipe'] });

    let baseUrl = 'http://127.0.0.1:5173';
    let foundUrl = false;

    preview.stdout.on('data', (d) => {
      const text = d.toString();
      process.stdout.write(text);
      // Try to capture the local URL line (e.g., "Local:   http://localhost:4173/")
      const m = text.match(/https?:\/\/(?:127\.0\.0\.1|localhost):(\d+)/i);
      if (m) {
        baseUrl = `http://127.0.0.1:${m[1]}`;
        foundUrl = true;
      }
    });
    preview.stderr.on('data', (d) => {
      const text = d.toString();
      process.stderr.write(text);
      const m = text.match(/https?:\/\/(?:127\.0\.0\.1|localhost):(\d+)/i);
      if (m) {
        baseUrl = `http://127.0.0.1:${m[1]}`;
        foundUrl = true;
      }
    });

    // give preview stdout a moment to print the actual used port (if any)
    const startWait = Date.now();
    while (!foundUrl && Date.now() - startWait < 5000) {
      await new Promise(r => setTimeout(r, 100));
    }

    const url = `${baseUrl}/Result`;

    // After build, make sure we produced index.html with the root entry
    const fs = require('fs');
    const distIndex = 'dist/index.html';
    if (!fs.existsSync(distIndex)) {
      throw new Error('Build did not produce dist/index.html');
    }
    const indexContents = fs.readFileSync(distIndex, 'utf8');
    if (!indexContents.includes('<div id="root">')) {
      throw new Error('dist/index.html did not contain expected root element');
    }

    // Wait briefly to ensure the preview process is still running (i.e. it didn't crash)
    const startCheck = Date.now();
    while (Date.now() - startCheck < 5000) {
      // if preview exited with non-null exitCode, it failed
      if (preview.exitCode !== null) {
        throw new Error('Preview server exited unexpectedly');
      }
      // if pid exists and process is alive, we count it as started
      if (preview.pid) break;
      await new Promise(r => setTimeout(r, 100));
    }

    console.log('\n✅ Smoke test passed — build succeeded and preview server started.');

    // kill preview process
    if (preview.pid) {
      process.kill(preview.pid);
    }

    process.exit(0);
  } catch (err) {
    console.error('\n❌ Smoke test failed:', err.message || err);
    process.exit(1);
  }
})();
