import { useState,useEffect,useCallback} from "react";
import "./ThemeToggle.jsx";
import ThemeToggle from "./ThemeToggle.jsx";
import logoImg from '../assets/images/logo.png';
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  const [genderValue, setGenderValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [fatScaleValue, setFatScaleValue] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [mode, setMode] = useState(localStorage.getItem("mode")||false);
  const [calorieValue, setCalorieValue] = useState();
  const [waterValue, setWaterValue] = useState("");
  const [weightLossValue, setWeightLossValue] = useState();
  const [daysValue, setDaysValue] = useState();
  const [errorMessageCalories, setErrorMessageCalories] = useState("");
  const [errorMessageWeight,seterrorMessageWeight] = useState("");
  const [errorMessageDays,seterrorMessageDays] = useState("");

  const fillFieldsMessage = "Please fill out all required fields to enable the button.";
  let min=0;
  let max=100;
  let bmiMax = 40;
  
  const validateForm = useCallback(() => {
    const fatScale = Number(fatScaleValue);
    const bmi = Number(bmiValue);
    const calorie = Number(calorieValue);
    const water = Number(waterValue);
    const weightLoss = Number(weightLossValue);
    const days = Number(daysValue);

    const isValid = (
      genderValue !== "" &&
      fatScale >= min && fatScale <= max &&
      bmi >= min && bmi <= bmiMax &&
      calorie >= 1 &&
      water >= 1 &&
      weightLoss >= 0.1 &&
      days >= 1
    );
    
    return isValid;
  }, [genderValue, fatScaleValue, bmiValue, calorieValue, waterValue, weightLossValue, daysValue]);
  
  useEffect(() => {
    const isValid = validateForm();
    setIsCompleted(isValid); 
  }, [validateForm]);

  function gender(e){
    setGenderValue(e.target.value);
  }

  function fatScale(e){
    if(e.target.value<=0){
      setFatScaleValue();
    }
    else{
      setFatScaleValue(e.target.value);
    }
  }

  function bmi(e){
    if(e.target.value<=0){
      setBmiValue();
    }
    else {
      setBmiValue(e.target.value);
    }
  }

  function calorie(e){
    if(e.target.value<0){ 
      setErrorMessageCalories("Value cannot be negative.");
      setCalorieValue();
    }
    else{
      setCalorieValue(e.target.value);
      setErrorMessageCalories("");
    }
  }

  function water(e){
    if(e.target.value<1){
      setWaterValue();
    }
    else{
      setWaterValue(e.target.value);
    }
  }

  function weightLoss(e){
    if(e.target.value<0){
      seterrorMessageWeight("Value cannot be negative.");
      setWeightLossValue();
    }
    else{
      setWeightLossValue(e.target.value);
      seterrorMessageWeight("");
    }
  }

  function days(e){
    if(e.target.value<0){
      seterrorMessageDays("Value cannot be negative.");
      setDaysValue();
    }
    else{
      setDaysValue(e.target.value);
      seterrorMessageDays("");
    }
  }

  function handler(){
    localStorage.setItem("gender",genderValue);
    localStorage.setItem("fatScale",fatScaleValue);
    localStorage.setItem("bmi",bmiValue);
    localStorage.setItem("calorie",calorieValue);
    localStorage.setItem("water",waterValue);
    localStorage.setItem("weightLoss",weightLossValue);
    localStorage.setItem("days",daysValue); 
    localStorage.setItem("mode",mode);
    navigate('/Result');
  }

  return(
    <div className={`${!mode ? 'bg-pink-50 text-black' : 'bg-black'}`}>
        <div className="flex flex-col items-center min-h-screen px-4 py-6"> 

          <ThemeToggle mode={mode} setMode={setMode} ></ThemeToggle>

          <div>
            <img src={logoImg} className="h-10" alt="" />
          </div>

          <div className="flex text-[34px] leading-[1.2em] font-semibold gap-2">
            <h1 className={`${!mode ? 'text-black':'text-white'}`}>Enter Your</h1>
            <h1 className="text-orange-600">Details</h1>
          </div>

        <div className="w-full max-w-xl">
          <div className={`flex flex-col shadow mt-7 p-8 w-full rounded-2xl ${!mode ? 'bg-white text-black' : 'dMB text-white'}`}>
            <form onSubmit={handler}>

            <div className="">
              <div className="mb-1">
                <label className="text-sm font-medium">Gender</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex gap-1">
                  <input type="radio" value="male" name='gender' onChange={gender} className="rangeColor"/>
                  <span>Male</span>
                </div>
                <div className="flex gap-1">
                  <input type="radio" name='gender' value="female" onChange={gender} className="rangeColor"/>
                  <span>Female</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="mb-1">
                <label className="text-sm font-medium">Body Fat %</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <div className="w-full flex gap-2 mb-2">
                <input type="range" min={min} max={max} value={fatScaleValue} onChange={fatScale} className="w-full rangeColor"/>
                <span className="w-12 text-right">{fatScaleValue}</span>
              </div>
              <div className="mb-5 text-xs descriptionColor">Enter your estimated body fat percentage (0-100).</div>
            </div>
            
            <div className="flex flex-col">
              <div className="mb-1">
                <label className="text-sm font-medium">BMI</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <div className="w-full flex gap-2 mb-2">
                <input type="range" min={min} max={bmiMax} value={bmiValue} onChange={bmi} className="w-full rangeColor"/>
                <span className="w-12 text-right">{bmiValue}</span>
              </div>
              <div className="mb-5 text-xs descriptionColor">Enter your Body Mass Index (0-40).</div>
            </div>

            <div className="mb-4">
              <div className="mb-1">
                <label className="text-sm font-medium">Daily Calorie Target</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <input type="number" min={1} className="w-full px-3 py-2 inputBorder" placeholder="e.g. 2000" onChange={calorie}/>
              {errorMessageCalories && <div className="text-red-600 text-xs mt-1">{errorMessageCalories}</div>}
            </div>
          
            <div className="mb-4">
              <div className="mb-1">
                <label className="text-sm font-medium">Cups of Water Per Day</label>
                <span className="ml-1 text-red-600">*</span>
              </div>

              <select className={`w-full inputBorder px-3 py-2 ${!mode? 'bg-white text-black':'dMB text-white'}`} onChange={water}>
                <option>Select cups</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="6">6</option>
              </select>

            </div>

            <div className="mb-4">
              <div className="mb-1">
                <label className="text-sm font-medium">Weekly Weight Loss Goal (lbs)</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <input type="number" min={0.1} step={0.1} className="w-full px-3 py-2 inputBorder" onChange={weightLoss} placeholder="e.g. 1.5"/>
              {errorMessageWeight && <div className="text-red-600 text-xs mt-1">{errorMessageWeight}</div>}
            </div>

            <div className="mb-4">
              <div className="mb-1">
                <label className="text-sm font-medium">Days to See Results</label>
                <span className="ml-1 text-red-600">*</span>
              </div>
              <input type="number" min={1} className="w-full px-3 py-2 inputBorder" onChange={days} placeholder="e.g. 30"/>
              {errorMessageDays && <div className="text-red-600 text-xs mt-1">{errorMessageDays}</div>}
            </div>

            <button
              type="submit"
              disabled={!isCompleted}
              className={`w-full rounded-xl mt-4 py-3 text-lg font-semibold mb-6 rangeColor border-rangeColor 
              ${isCompleted ? 'opacity-100 cursor-pointer' : ' opacity-50 cursor-not-allowed'}`}>
              See My Results
            </button>

            {!isCompleted && <div className="text-xs mt-2 text-center descriptionColor">{fillFieldsMessage}</div>}
            </form> 
          </div>
        

        </div>
      </div>
    </div>
  );
}
export default Home;