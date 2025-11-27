import { useState, useEffect, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ParameterContext } from './ParameterContext';
import GenderField from './form-fields/GenderField';
import RangeField from './form-fields/RangeField';
import NumberField from './form-fields/NumberField';

function HomeForm() {
  const { setFormData } = useContext(ParameterContext);
  const { mode } = useContext(ParameterContext);
  const navigate = useNavigate();

  const [genderValue, setGenderValue] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [fatScaleValue, setFatScaleValue] = useState(0);
  const [bmiValue, setBmiValue] = useState(0);
  const [calorieValue, setCalorieValue] = useState('');
  const [waterValue, setWaterValue] = useState('');
  const [weightLossValue, setWeightLossValue] = useState('');
  const [daysValue, setDaysValue] = useState('');

  const [errorMessageCalories, setErrorMessageCalories] = useState('');
  const [errorMessageWeight, seterrorMessageWeight] = useState('');
  const [errorMessageDays, seterrorMessageDays] = useState('');

  const min = 0;
  const max = 100;
  const bmiMax = 40;

  const validateForm = useCallback(() => {
    const fatScale = Number(fatScaleValue);
    const bmi = Number(bmiValue);
    const calorie = Number(calorieValue);
    const water = Number(waterValue);
    const weightLoss = Number(weightLossValue);
    const days = Number(daysValue);

    return (
      genderValue !== '' &&
      fatScale >= min &&
      fatScale <= max &&
      bmi >= min &&
      bmi <= bmiMax &&
      calorie >= 1 &&
      water >= 1 &&
      weightLoss >= 0.1 &&
      days >= 1
    );
  }, [genderValue, fatScaleValue, bmiValue, calorieValue, waterValue, weightLossValue, daysValue]);

  // keep completion state updated
  useEffect(() => {
    setIsCompleted(validateForm());
  }, [validateForm]);

  function handler() {
    setFormData({
      gender: genderValue,
      fatScale: fatScaleValue,
      bmi: bmiValue,
      calorie: calorieValue,
      water: waterValue,
      weightLoss: weightLossValue,
      days: daysValue,
    });

    navigate('/Result');
  }

  return (
    <div className="w-full max-w-xl">
      <div className={`flex flex-col shadow mt-7 p-8 w-full rounded-2xl ${!mode ? 'bg-white text-black' : 'dMB text-white'}`}>
        <form onSubmit={handler}>
          <GenderField value={genderValue} onChange={setGenderValue} />

          <RangeField label="Body Fat %" min={min} max={max} value={fatScaleValue} onChange={setFatScaleValue} />

          <RangeField label="BMI" min={min} max={bmiMax} value={bmiValue} onChange={setBmiValue} />

          <NumberField label="Daily Calorie Target" min={1} value={calorieValue} onChange={(v) => { if (v < 0) { setErrorMessageCalories('Value cannot be negative.'); setCalorieValue(''); } else { setCalorieValue(v); setErrorMessageCalories(''); } }} error={errorMessageCalories} placeholder="e.g. 2000" />

          <div className="mb-4">
            <div className="mb-1">
              <label className="text-sm font-medium">Cups of Water Per Day</label>
              <span className="ml-1 text-red-600">*</span>
            </div>
            <select className={`w-full inputBorder px-3 py-2 ${!mode ? 'bg-white text-black' : 'dMB text-white'}`} onChange={(e) => setWaterValue(e.target.value)}>
              <option value="">Select cups</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select>
          </div>

          <NumberField label="Weekly Weight Loss Goal (lbs)" min={0.1} step={0.1} value={weightLossValue} onChange={(v) => { if (v < 0) { seterrorMessageWeight('Value cannot be negative.'); setWeightLossValue(''); } else { setWeightLossValue(v); seterrorMessageWeight(''); } }} error={errorMessageWeight} placeholder="e.g. 1.5" />

          <NumberField label="Days to See Results" min={1} value={daysValue} onChange={(v) => { if (v < 0) { seterrorMessageDays('Value cannot be negative.'); setDaysValue(''); } else { setDaysValue(v); seterrorMessageDays(''); } }} error={errorMessageDays} placeholder="e.g. 30" />

          <button type="submit" disabled={!isCompleted} className={`w-full rounded-xl mt-4 py-3 text-lg font-semibold mb-6 rangeColor border-rangeColor ${isCompleted ? 'opacity-100 cursor-pointer' : ' opacity-50 cursor-not-allowed'}`}>
            See My Results
          </button>

          {!isCompleted && <div className="text-xs mt-2 text-center descriptionColor">Please fill out all required fields to enable the button.</div>}
        </form>
      </div>
    </div>
  );
}

export default HomeForm;
