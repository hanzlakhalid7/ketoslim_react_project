function Card5({mode}) {

    function callouts(){
        return "With your numbers, results could show up even faster than expected, but only if your metabolism is dialed in and you’re burning fat, not sugar.";
    }

    return (
        <div className="flex flex-col items-center">
                <span className="text-[34px]">📉</span>
                <h1 className="text-[34px] text-center leading-[1.2em] font-semibold mb-1">You Could Be Losing
                    <br/>
                    <span> 
                    <span className="text-red-600"> {localStorage.getItem("weightLoss")} lbs / week </span>
                    </span>
                </h1>
                <h2 className="text-[20px] mb-2 font-semibold">With the Right Fuel Source</h2>
                <img src="src/assets/images/card5_img5.png" alt="" className="mb-4"/>
                <p className="text-[20px] font-normal mb-2">
                    This is your potential, what your body could lose if it’s in fat-burning mode. 
                    But that depends on getting your metabolism working with you, not against you.
                    <br />
                    <br />
                    Low energy, stubborn cravings, and slow progress usually mean your body 
                    is still burning sugar instead of fat — and that keeps weight loss stuck.
                </p>
                <p className="mt-2 mb-6 text-[16px] text-red-500 ">{callouts()}</p>
        </div>
    )
}
export default Card5;