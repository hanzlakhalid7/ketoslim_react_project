import card2Img from '../assets/images/card2_img2.png';

function Card2({mode}) {

    function callouts(){
        const bmi = localStorage.getItem("bmi");
        if(bmi < 26){
            return "You’re right on the edge — just a few small shifts could unlock better energy and faster fat-burning.";
        }
        else if(bmi < 35){
            return "At this level, your body may be under more strain than you realize — from hormone balance to inflammation and recovery.";
        }
        else{
            return "This BMI range often comes with deeper challenges, like insulin resistance and chronic fatigue — but with the right plan, you can absolutely turn things around.";
        }
    }


    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">📊</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">Your BMI is 
                    <span> {localStorage.getItem("bmi")}</span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">What That Means</h2>
                <img src={card2Img} alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    BMI (Body Mass Index) is a quick way to estimate how your weight 
                    might affect your health based on your height and weight.
                    <br />
                    <br />
                    When your BMI is too high, your body may store more fat than it uses. 
                    That can slow your metabolism, drain your energy, 
                    and make fat loss harder — even if you’re putting in effort.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
        </div>
    )
}
export default Card2;