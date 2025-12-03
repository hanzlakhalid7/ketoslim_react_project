import { useContext } from 'react';
import { ParameterContext } from './ParameterContext';

import card1Img from '../assets/images/card1_img1.png';
import card2Img from '../assets/images/card2_img2.png';
import card3Img from '../assets/images/card3_img3.png';
import card4Img from '../assets/images/card4_img4.png';
import card5Img from '../assets/images/card5_img5.png';
import card6Img from '../assets/images/card6_img6.png';

function cardData(): any[] {
  const { formData } = useContext(ParameterContext);
  return [
    {
      icon: '⚖️',
      title: (
        <>
          Your Body Fat
          <br />
          <span>
            Percentage Is <span>{formData.fatScale}%</span>
          </span>
        </>
      ),
      subtitle: 'Here’s Why That Matters',
      image: card1Img,
      description: `Your body fat percentage gives a clearer picture than BMI alone. It tells us how much of your body is lean mass (muscle, organs, bone) vs stored fat.
      
      Too much stored fat doesn’t just affect how you look — it impacts your energy, hormone balance, and ability to burn fat efficiently.`,
      callouts: () => {
        const fatScale = Number(formData.fatScale);
        const gender = formData.gender;
        if ((gender === 'Male' && fatScale < 25) || (gender === 'Female' && fatScale < 31)) {
          return 'Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.';
        } else if (
          (gender === 'Male' && fatScale <= 31) ||
          (gender === 'Female' && fatScale <= 39)
        ) {
          return 'Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.';
        }
        return 'At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.';
      },
    },

    {
      icon: '📊',
      title: <>{`Your BMI is ${formData.bmi}`}</>,
      subtitle: 'What That Means',
      image: card2Img,
      description: `BMI (Body Mass Index) is a quick way to estimate how your weight might affect your health based on your height and weight. When your BMI is too high, your body may store more fat than it uses. That can slow your metabolism, drain your energy, and make fat loss harder — even if you’re putting in effort.`,
      callouts: () => {
        const bmi = Number(formData.bmi);
        if (bmi < 26)
          return 'You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.';
        if (bmi < 35)
          return 'At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.';
        return 'This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.';
      },
    },

    {
      icon: '🔥',
      title: (
        <>
          You Should Be Eating Around
          <br />
          <span>{formData.calorie} Calories</span>
        </>
      ),
      subtitle: 'But Not All Calories Are Equal',
      image: card3Img,
      description: `Your body burns calories just to stay alive — that’s your BMR. Add in movement, and you burn even more. Eat less than you burn? You lose weight. Eat more? You store it. Simple math, but the type of calories still makes or breaks your results. Most people eat low-quality calories that spike cravings, crash energy, and cause fat to stick — even if they’re technically under their daily limit.`,
      callouts: () => {
        const calories = Number(formData.calorie);
        if (calories < 1100)
          return 'Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.';
        if (calories < 1299)
          return "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
        return 'You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.';
      },
    },

    {
      icon: '💧',
      title: (
        <>
          Your Body Needs{' '}
          <span>
            {formData.water} Cups of <br /> Water Daily
          </span>
        </>
      ),
      subtitle: 'Here’s Why That Matters',
      image: card4Img,
      description: `Hydration is a fat-burning multiplier. Without enough water, your body holds onto toxins, slows digestion, and burns fat less efficiently. Even mild dehydration can feel like fatigue, hunger, or sugar cravings. You’re not lazy — you’re likely under-hydrated.`,
      callouts: () => {
        const water = Number(formData.water);
        if (water === 1)
          return 'Only Drinking Coffee or Tea? Caffeine doesn’t hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.';
        if (water === 2)
          return 'Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.';
        if (water <= 6)
          return 'Drinking 2-6 glasses means you’re getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.';
        return 'Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.';
      },
    },

    {
      icon: '📉',
      title: (
        <>
          You Could Be Losing
          <br />
          <span className="text-red-600"> {formData.weightLoss} lbs / week </span>
        </>
      ),
      subtitle: 'With the Right Fuel Source',
      image: card5Img,
      description: `This is your potential, what your body could lose if it’s in fat-burning mode. But that depends on getting your metabolism working with you, not against you. Low energy, stubborn cravings, and slow progress usually mean your body is still burning sugar instead of fat — and that keeps weight loss stuck.`,
      callouts: () =>
        'With your numbers, results could show up even faster than expected, but only if your metabolism is dialed in and you’re burning fat, not sugar.',
    },

    {
      icon: '⏳',
      title: (
        <>
          You Could See Results
          <br />
          <span>
            in as Little as <span>{formData.days}</span> Days
          </span>
        </>
      ),
      subtitle: 'Here’s Why That Matters',
      image: card6Img,
      description: `Visible change doesn’t take forever — when your metabolism shifts, your body can start dropping bloat, water weight, and fat surprisingly fast. It’s not about how long you try — it’s about whether your body’s actually set up to change. The wrong plan wastes months.`,
      callouts: () =>
        'You’re already aware — and that’s step one. Now imagine pairing that awareness with a plan that shows results in the mirror by day 10.',
    },
  ];
}
export default cardData;
