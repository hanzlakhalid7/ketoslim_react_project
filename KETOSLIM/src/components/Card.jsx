import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import logoImg from '../assets/images/logo.png';
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(false);
  const [step, setStep] = useState(1);


  // ✅ Load mode from localStorage once
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
      setMode(savedMode === "true");
    }
  }, []);

  const cards = [
    <Card1 />,
    <Card2 />,
    <Card3 />,
    <Card4 />,
    <Card5 />,
    <Card6 />
  ];

  if(step === 7){
    localStorage.setItem("mode", mode);
    navigate('/Sales');
  }

  function dots(){
    let i = 1;
    let dotArray = [];
    while(i <= 6){
      dotArray.push(
        <div
          key={i}
          className={`rounded-full w-2 h-2 ${step >= i ? 'rangeColor' : 'bg-gray-400'}`}
        />
      );
      i++;
    }
    return dotArray;
  }

  const btnArray = ["Body Fat %","BMI","Caloric Intake","Hydration","Weight Rate"];

  return (
    <div className={`${!mode ? 'bg-pink-50 text-black' : 'bg-black text-white'}`}>
      <div className="flex flex-col items-center min-h-screen px-4 py-6">

        <ThemeToggle mode={mode} setMode={setMode} />

        <img src={logoImg} className="h-10" alt="" />

        <div className="w-full max-w-xl flex items-center justify-between py-2 px-4 mb-4">
          
          <div className="w-1/2">
            <h2 className="font-semibold text-md textColor">Your Results</h2>
          </div>

          <div className="w-1/2 flex justify-end items-center gap-1">
          {dots()}
          </div>

        </div>


        <div className="w-full max-w-xl">
            <div className={`flex flex-col p-8 w-full mb-6 rounded-2xl shadow-xl ${!mode ? 'bg-white text-black' : 'dMB text-white'}`}>

            {cards[step - 1]}

          </div>
        </div>

        <div className="flex w-full max-w-xl mt-10 mb-8 px-4">

          <div className="w-full justify-start mr-4">
            
            {step>1 && <button
              onClick={() => setStep(prev => Math.max(prev - 1, 1))}
              className={`cursor-pointer border-2 textColor text-lg py-2 font-bold w-full rounded-lg flex items-center justify-center ${mode ? 'dMB' : 'bg-white' }`}>
              <span>{btnArray[step-2]}</span>
            </button>
            }

          </div>

          <div className="w-full flex justify-end ml-4">
            <button
              onClick={() => setStep(prev => Math.min(prev + 1, 7))}
              className="rangeColor cursor-pointer text-lg py-2 font-bold w-full borderNext rounded-lg flex items-center justify-center">
              <span className="text-white">Next</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;
