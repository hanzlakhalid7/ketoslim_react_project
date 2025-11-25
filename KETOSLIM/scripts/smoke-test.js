const { spawn } = require('child_process');
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));

async function waitForServer(url, timeout = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      const res = await fetch(url, { method: 'GET' });
      return res;
    } catch (e) {
      await new Promise(r => setTimeout(r, 250));
    }
  }
  throw new Error(`Timed out waiting for server at ${url}`);
}

(async () => {
  try {
    console.log('1) Building project...');
    const build = spawn('npm', ['run', 'build'], { stdio: 'inherit', shell: true });
    await new Promise((resolve, reject) => build.on('close', code => code === 0 ? resolve() : reject(new Error('Build failed'))));

    console.log('2) Starting preview server...');
    // start vite preview (runs on 5173 by default)
    const preview = spawn('npm', ['run', 'preview'], { shell: true, stdio: ['ignore', 'pipe', 'pipe'] });

    // listen for output lines to know it's started, but also fallback to polling
    preview.stdout.on('data', d => process.stdout.write(d));
    preview.stderr.on('data', d => process.stderr.write(d));

    const url = 'http://127.0.0.1:5173/Result';

    // wait for server to respond
    const res = await waitForServer(url, 15000);

    if (res.status !== 200) {
      throw new Error(`Expected 200 OK from ${url}, got ${res.status}`);
    }

    const body = await res.text();
    if (!body.includes('<div id="root">')) {
      throw new Error('Response did not contain expected index.html content');
    }

    console.log('\n✅ Smoke test passed — /Result successfully returns index.html (server-side fallback works).');

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
