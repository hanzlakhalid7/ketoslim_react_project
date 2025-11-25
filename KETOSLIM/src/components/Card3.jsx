function Card3({mode}) {

    function callouts(){
        const calories = localStorage.getItem("calorie");
        if(calories < 1100){
            return "Extreme restriction can backfire — slowing your metabolism, increasing stress, and making results harder to sustain. Keto helps you eat smarter, not just less.";
        }
        else if(calories < 1299){
            return "At this range, your body is primed to burn fat — but only if you're eating nutrient-dense, low-carb foods that stabilize your system.";
        }
        else{
            return "You’re already close — just upgrading your food quality could unlock smoother fat loss and better focus.";
        }
    }


    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">🔥</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">You Should Be Eating Around
                    <br/>
                    <span> 
                    <span>{localStorage.getItem("calorie")} </span>
                    Calories
                    </span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">But Not All Calories Are Equal</h2>
                <img src="src/assets/images/card3_img3.png" alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    Your body burns calories just to stay alive — that’s your BMR. Add in movement, 
                    and you burn even more. Eat less than you burn? You lose weight. Eat more? 
                    You store it. Simple math, but the type of calories still makes or breaks your results.
                    <br />
                    <br />
                    Most people eat low-quality calories that spike cravings, crash energy, 
                    and cause fat to stick — even if they’re technically under their daily limit.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
        </div>
    )
}
export default Card3;