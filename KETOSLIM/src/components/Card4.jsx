import card1Img from '../assets/images/card1_img1.png';

function Card4({mode}) {

    function callouts(){
        const water = localStorage.getItem("water");
        if(water === 1){
            return "Only Drinking Coffee or Tea? Caffeine doesn’t hydrate — in fact, it can dehydrate you. Adding just a few glasses of water each day could dramatically boost your energy and fat-burning.";
        }
        else if(water === 2){
            return "Drinking about 2 glasses per day is a great start, but your body is likely still running dry. Upping your intake can improve digestion, curb cravings, and help you burn fat more efficiently.";
        }
        else if(water <= 6){
            return "Drinking 2-6 glasses means you’re getting closer! Just a few more sips each day could make a real difference in your metabolism and how you feel overall.";
        }
        else{
            return "Drinking over 6 glasses a day? Nice work — your hydration game is strong. Keep it up to support optimal fat loss, steady energy, and fewer cravings.";
        }
    }

    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">💧</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">Your Body Needs
                    <span>
                    <span> {localStorage.getItem("water")} </span>
                    Cups of 
                    <br />
                    Water Daily
                    </span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">Here’s Why That Matters</h2>
                <img src={card1Img} alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    Hydration is a fat-burning multiplier. Without enough water, 
                    your body holds onto toxins, slows digestion, and burns fat less efficiently.
                    <br />
                    <br />
                    Even mild dehydration can feel like fatigue, hunger, or sugar cravings. 
                    You’re not lazy — you’re likely under-hydrated.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
        </div>
    )
}
export default Card4;