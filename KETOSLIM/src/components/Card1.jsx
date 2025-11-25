import card1Img from '../assets/images/card1_img1.png';

function Card1() {

    function callouts(){
        const fatScale = localStorage.getItem("fatScale");
        const gender = localStorage.getItem("gender");
        if((gender === "Male" && fatScale < 25) || (gender === "Female" && fatScale < 31)){
            return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
        }
        else if(gender === "Male" && fatScale <=31 || gender === "Female" && fatScale <= 39){
            return "Your current level may be slowing metabolism, increasing inflammation, or making it harder to stay consistent with workouts.";
        }
        else{
            return "At this level, your body may be stuck in a constant state of inflammation and energy imbalance — making fat loss harder, appetite less predictable, and progress feel like a constant uphill battle.";
        }
    }

    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">⚖️</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">Your Body Fat
                    <br/>
                    <span>Percentage Is 
                    <span> {localStorage.getItem("fatScale")}%</span>
                    </span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">Here’s Why That Matters</h2>
                <img src={card1Img} alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    Your body fat percentage gives a clearer picture than BMI alone. 
                    It tells us how much of your body is lean mass (muscle, organs, bone) vs stored fat.
                    <br />
                    <br />
                    Too much stored fat doesn’t just affect how you look —
                    it impacts your energy, hormone balance, and ability to burn fat efficiently.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
        </div>
    )
}
export default Card1;