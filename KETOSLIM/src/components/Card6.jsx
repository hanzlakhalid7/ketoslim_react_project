import card6Img from '../assets/images/card6_img6.png';

function Card6() {

    function callouts(){
        return "You’re already aware — and that’s step one. Now imagine pairing that awareness with a plan that shows results in the mirror by day 10.";
    }

    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">⏳</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">You Could See Results
                    <br/>
                    <span>in as Little as
                    <span> {localStorage.getItem("days")} </span>
                    Days
                    </span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">Here’s Why That Matters</h2>
                <img src={card6Img} alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    Visible change doesn’t take forever — when your metabolism shifts, 
                    your body can start dropping bloat, water weight, and fat surprisingly fast.
                    <br />
                    <br />
                    It’s not about how long you try — it’s about whether your body’s 
                    actually set up to change. The wrong plan wastes months.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
       </div>
    )
}
export default Card6;