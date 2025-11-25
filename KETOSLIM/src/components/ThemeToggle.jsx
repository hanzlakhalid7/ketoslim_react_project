import { useState } from 'react';

function ThemeToggle({ mode, setMode }) {
    const [modeClass, setModeClass] = useState("Dark Mode");
    function ChangeModeClass(){
    if(modeClass==="Dark Mode"){
      setModeClass("Light Mode"); 
      setMode(prev => {
        const next = !prev;
        localStorage.setItem("mode", next);
        return next;
      });

    }
    else{
      setModeClass("Dark Mode");
      setMode(prev => {
        const next = !prev;
        localStorage.setItem("mode", next);
        return next;
      });

    } 
  }
  return (
    <div className="w-full flex justify-end mb-8">
            <button 
            onClick={ChangeModeClass} value={modeClass} className={`fixed border-2 rounded-1xl font-semibold borderb rounded-xl py-2 px-4 cursor-pointer ${!mode ? 'bg-white text-black' : 'dMB text-white'}`}>
            {modeClass}
            </button>
    </div>
  );
}

export default ThemeToggle;