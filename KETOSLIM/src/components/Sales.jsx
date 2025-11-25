import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import DiscountTimer from "./DiscountTimer";

function Sales() {
  const navigate = useNavigate();
  const [mode, setMode] = useState(false);
  const [trans, setTrans] = useState(false);
  const [trans2, setTrans2] = useState(false);
  // ✅ Load mode from localStorage once
  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode !== null) {
      setMode(savedMode === "true");
    }
  }, []);

  function handlerD1(){
    setTrans(!trans);
    setTrans2(false);
  };

  function handlerD2(){
    setTrans2(!trans2);
    setTrans(false);
  }

  return (
    <div className={`${!mode ? 'bg-pink-50 text-black' : 'bg-black text-white'}`}>
      <div className="flex flex-col items-center min-h-screen px-4 py-6">

        <ThemeToggle mode={mode} setMode={setMode} />

        <img src="src/assets/images/logo.png" className="h-10" alt="" />
        <div className="w-full max-w-xl">
          <div className={`flex flex-col p-8 w-full mb-6 rounded-2xl shadow-xl ${!mode ? 'bg-white text-black' : 'dMB text-white'}`}>
          <div className="flex flex-col items-center">
          <span className="text-[34px]">🎯</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">Your Personalized
                    <br/>
                    KetoSlim Plan Is Ready
                </h1>

                <div className="flex items-center justify-center gap-18 mt-4 mb-2">
                  <img src="src/assets/images/sales.png" className="absolute h-[250px] w-[250px] blur-sm opacity-70" alt=""/>
                  <img src="src/assets/images/sales1.webp" className="relative w-[180px] h-[250px]" alt=""/>
                  <img src="src/assets/images/sales3.webp" className="relative w-[180px] h-[250px]" alt=""/>
                </div>

                <div className="flex items-center justify-center w-full py-4 mt-2 mb-4 font-bold shadow-md">
                  <div className="w-1/2 text-center">Now</div>
                  <div className="w-1/2 text-center">6 Months</div>
                </div>

              <div className="w-full p-4 gap-4 flex">
                  <div className="pr-2 flex flex-col w-1/2 gap-5"> 
                    <div>
                      <div className="text-[14px]">Body Fat</div>
                      <div className="font-bold text-xl text-red-500">20-25%</div>
                    </div>
                  <div>
                    <div className="text-[14px] mb-1">Energy Levels</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                      <div className="w-[30%] h-2 rounded-2xl bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] mb-1">Physical Health</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                      <div className="w-[35%] h-2 rounded-2xl bg-red-500"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] mb-1">Metabolism</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                    <div className="w-[25%] h-2 rounded-2xl bg-red-500"></div>
                  </div>
                  </div>
                </div>

                <div className="pr-2 flex flex-col w-1/2 gap-5"> 
                    <div>
                      <div className="text-[14px]">Body Fat</div>
                      <div className="font-bold text-xl textColor">10-12%</div>
                    </div>
                  <div>
                    <div className="text-[14px] mb-1">Energy Levels</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                      <div className="w-[85%] h-2 rounded-2xl rangeColor"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] mb-1">Physical Health</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                      <div className="w-[90%] h-2 rounded-2xl rangeColor"></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-[14px] mb-1">Metabolism</div>
                    <div className="w-full h-2 rounded-2xl bg-gray-400">
                    <div className="w-[80%] h-2 rounded-2xl rangeColor"></div>
                  </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full my-6">
                <div className="w-full flex flex-col">
                  <div className="font-semibold mb-2">Your Program Will also work on:</div>
                  <ul className="flex flex-col gap-2 w-full max-w-xs items-center">
                    <li className="flex items-center gap-2 w-full">
                    <span className="text-xl rounded-full border w-7 h-7 pb-1 flex items-center justify-center tick">✔</span>
                    <span className="font-medium">Improving Digestion</span>
                    </li>
                    <li className="flex items-center gap-2 w-full">
                    <span className="text-xl rounded-full border w-7 h-7 pb-1 flex items-center justify-center tick">✔</span>
                    <span className="font-medium">Toning Muscles</span>
                    </li>
                    <li className="flex items-center gap-2 w-full">
                    <span className="text-xl rounded-full border w-7 h-7 pb-1 flex items-center justify-center tick">✔</span>
                    <span className="font-medium">Mental Wellness Reset</span>
                    </li>
                    <li className="flex items-center gap-2 w-full">
                    <span className="text-xl rounded-full border w-7 h-7 pb-1 flex items-center justify-center tick">✔</span>
                    <span className="font-medium">Physical Endurance Boost</span>
                    </li>
                  </ul>
                </div>
              </div>

              

              <h1 className="font-bold text-lg sm:text-xl">Get all the right tools & knowledge.</h1>

              <div className="mt-6 flex flex-row items-center justify-between w-full">
                <div className="flex flex-col gap-4 flex-1 max-w-xs">
                  <div className="flex items-center gap-3">
                    <img src="src/assets/images/keto-food.webp" alt="" className="w-8 h-8"/>
                    <span className="font-medium text-sm text-red-500">Daily Custom Meal Plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="src/assets/images/cart.webp" alt="" className="w-8 h-8"/>
                    <span className="font-medium text-sm text-red-500">Done-For-You Grocery Lists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="src/assets/images/heart-pot.webp" alt="" className="w-8 h-8"/>
                    <span className="font-medium text-sm text-red-500">Overwhelm-Free Delicious Recipes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="src/assets/images/education-icon.webp" alt="" className="w-8 h-8"/>
                    <span className="font-medium text-sm text-red-500">Weekly Tips & Guidance</span>
                  </div>
                </div>
                <div className="flex-1 flex justify-end items-center">
                  <img src="src/assets/images/iphone-mockup.webp" alt="" className="h-80 w-auto max-h-[300px] drop-shadow-2xl"/>
                </div>
              </div>

              <div className="w-full mt-10">
                <h2 className="font-bold text-3xl sm:text-4xl mb-10 text-left">Trusted by health & nutrition professionals</h2>
              </div>
              
              <div className="flex flex-col gap-10">
                <div className="">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex justify-center items-center gap-2 mb-1 w-full">
                    <img src="src/assets/images/pubmed-logo.svg" alt="" className="h-14 w-auto" />
                  </div>
                  <p className="text-base">There is evidence to suggest that a Ketogenic Diet can help with weight loss, 
                    visceral adiposity, and appetite control.</p>
                </div>
                <a href="#" className="underline text-sm mt-1 text-red-500">source</a>
              </div>

              <div className="">
                <div className="flex flex-col items-start gap-2">
                  <div className="flex justify-center items-center gap-2 mb-1 w-full">
                    <img src="src/assets/images/mayo-clinic-b.webp" className="h-14 w-auto" alt="" />
                  </div>
                  <p className="text-base">Research shows that a keto diet can result in weight loss and improvements
                     in cardiovascular risk factors.</p>
                </div>
                <a href="#" className="underline text-sm mt-1 text-red-500">source</a>
              </div>
              </div>

              <div className="w-full">
                <div className="w-full mt-7">
                  <h2 className="text-center text-[22px] sm:text-2xl mb-2">3 Month Custom Keto Plan</h2>


                  <DiscountTimer/>

                </div>

                <div className="flex flex-col gap-3">
                  <div className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition 
                  ${!mode 
                        ? (!trans ? "border-gray-300" : "bg-pink-50 borderNext")
                        : (!trans ? "border-gray-300" : "bg-black borderNext")
                      }`} onClick={handlerD1}>

                    <div>
                      <div className="font-bold text-base mb-1">3 PAYMENTS OF $29</div>
                      <div className="text-sm leading-tight">
                        Just $29 today. Split the rest
                        <br />
                        over 2 easy payments.
                      </div>
                    </div>
                    <span className="ml-4 flex items-center justify-center">
                      <span className={`w-8 h-8 border-2 rounded-full flex items-center justify-center pb-1 ${!trans? ' border-gray-300 bg-white':'rangeColor borderNext'}`}>✔</span>
                    </span>
                  </div>





                  <div className={`relative w-full max-w-2xl border-2 rounded-2xl cursor-pointer overflow-hidden 
                      ${!mode 
                        ? (!trans2 ? "border-gray-300" : "bg-pink-50 borderNext")
                        : (!trans2 ? "border-gray-300" : "bg-black borderNext")
                      }`} onClick={handlerD2}>
                    <div className="flex justify-between items-start">
                      <div className="p-4">
                        <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-1">
                          DISCOUNT
                        </div>
                        <div>
                          <div className="text-sm mb-1">1 Payment of $67. Pay in full  
                            <br />
                            today and save $20 instantly.
                          </div>
                        </div>        
                      </div>

                      <div className="flex flex-col items-end">
                          <div className={`font-bold text-lg px-6 py-1 rounded-bl-2xl ${!trans2? ' bg-[#E9FBF7] text-black':'rangeColor text-white'}`}>
                                  23% OFF
                        </div>

                        <span className="ml-4 flex items-center justify-center p-4">
                          <span className={`w-8 h-8 border-2 rounded-full flex items-center justify-center pb-1 ${!trans2? ' border-gray-300 bg-white':'rangeColor borderNext'}`}>✔</span>
                        </span>
                      </div>
                    </div>
                      <hr className={`w-full h-[2px] bg-gray-300 border-none ${!trans2? ' border-gray-300':' rangeColor'}`}/>
                      <div className={`w-full text-center font-bold py-1 text-sm tracking-wide ${!trans2? '':'rangeColor text-white'}`}>
                      MOST POPULAR
                    </div>

                  </div>
                </div>


                <div className="flex items-center justify-center gap-2 mt-8 mb-4 text-center"> 
                  <span className="text-xs font-medium">✅ Risk-Free: Backed by 60-Day Money-Back Guarantee</span>
                </div>

                <button className="font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative pointer-events-auto shadow-lg cursor-pointer rangeColor" onClick={()=>alert("Thank you for continuing with the 1 Payment option!")}>
                  <span className="mx-auto text-white">Continue</span>
                </button>
                <div className="w-full text-center">
                  <button className="underline text-base font-medium mt-2 cursor-pointer" onClick={()=>navigate('/')}>No Thanks, I don’t want my plan.</button>
                </div>
              </div>
        </div>
          </div>
        </div>


        <div className="w-full max-w-xl flex flex-col gap-2 mt-8 px-2">
          <div className="flex items-center gap-4 mb-2">
            <h3 className="font-bold text-4xl sm:text-5xl flex-1">Money Back Guarantee</h3>
            <img src="src/assets/images/60-day-guarantee.webp" alt="" className="h-26 w-26" />
          </div>
          <p className="text-base mb-1">We are confident with our service quality and its results. 
            So, if you are ready to reach your goals, it’s a risk-free offer.</p>
          <p className="text-base mb-2">We guarantee you’ll see visible results 
            or you’ll receive a full refund within 60 days after your purchase.</p>
          <hr className="w-12 mb-2"/>
          <ul className="flex flex-col text-sm gap-2">
            <li>
              By continuing, you represent that you are over 18 years of age and agree 
              if for whatever reason you’re unhappy with your plan to contact customer support 
              for a refund.
            </li>
            <li>
              You will only be charged $67 today for your first quarter (details above)
            </li>
            <li>
              Your introductory period will last until Aug 27, 2025. You may cancel at any time
               before Aug 27, 2025, and you will not be charged.
            </li>
          </ul>
          <div className="rounded-xl text-sm">
            <p className="mb-3">
              If you don’t cancel, KetoSlim will automatically continue your membership 
              at the end of your introductory period and charge the membership fee of 
              <span className="font-bold"> $67 quarterly </span>
              until you cancel.
            </p>
            <p className="mb-3">Your subscription will be bound by our 
              <span> <a href="#" className="text-red-500 underline">Terms and Privacy Policy</a>.</span>
            </p>
            <p>
              If you would like a refund for any reason call
              <span> <a href="tel:1-800-695-5045" className="text-red-500 underline">1-800-695-5045</a> </span>
              or email
              <span> <a href="mailto:support@myketoslim.com" className="text-red-500 underline">support@myketoslim.com</a>.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
