import React from 'react';
import PropTypes from 'prop-types';
import DiscountTimer from '../DiscountTimer';

export default function PricingBlock({ mode, trans, trans2, onSelect1, onSelect2, navigate }) {
  return (
    <div className="w-full">
      <div className="w-full mt-7">
        <h2 className="text-center text-[22px] sm:text-2xl mb-2">3 Month Custom Keto Plan</h2>
        <DiscountTimer />
      </div>

      <div className="flex flex-col gap-3">
        <div
          className={`border-2 rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${!mode ? (!trans ? 'border-gray-300' : 'bg-pink-50 borderNext') : (!trans ? 'border-gray-300' : 'bg-black borderNext')}`}
          onClick={onSelect1}
        >
          <div>
            <div className="font-bold text-base mb-1">3 PAYMENTS OF $29</div>
            <div className="text-sm leading-tight">Just $29 today. Split the rest<br/>over 2 easy payments.</div>
          </div>
          <span className="ml-4 flex items-center justify-center"><span className={`w-8 h-8 border-2 rounded-full flex items-center justify-center pb-1 ${!trans ? ' border-gray-300 bg-white' : 'rangeColor borderNext'}`}>✔</span></span>
        </div>

        <div
          className={`relative w-full max-w-2xl border-2 rounded-2xl cursor-pointer overflow-hidden ${!mode ? (!trans2 ? 'border-gray-300' : 'bg-pink-50 borderNext') : (!trans2 ? 'border-gray-300' : 'bg-black borderNext')}`}
          onClick={onSelect2}
        >
          <div className="flex justify-between items-start">
            <div className="p-4">
              <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-md inline-block mb-1">DISCOUNT</div>
              <div className="text-sm mb-1">1 Payment of $67. Pay in full<br/>today and save $20 instantly.</div>
            </div>

            <div className="flex flex-col items-end">
              <div className={`font-bold text-lg px-6 py-1 rounded-bl-2xl ${!trans2 ? ' bg-[#E9FBF7] text-black' : 'rangeColor text-white'}`}>23% OFF</div>
              <span className="ml-4 flex items-center justify-center p-4"><span className={`w-8 h-8 border-2 rounded-full flex items-center justify-center pb-1 ${!trans2 ? ' border-gray-300 bg-white' : 'rangeColor borderNext'}`}>✔</span></span>
            </div>
          </div>

          <hr className={`w-full h-0.5 bg-gray-300 border-none ${!trans2 ? ' border-gray-300' : ' rangeColor'}`} />
          <div className={`w-full text-center font-bold py-1 text-sm tracking-wide ${!trans2 ? '' : 'rangeColor text-white'}`}>MOST POPULAR</div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8 mb-4 text-center"><span className="text-xs font-medium">✅ Risk-Free: Backed by 60-Day Money-Back Guarantee</span></div>

        <button className="font-bold py-3 px-8 rounded-lg flex items-center justify-center transition w-full relative pointer-events-auto shadow-lg cursor-pointer rangeColor" onClick={() => alert('Thank you for continuing with the 1 Payment option!')}><span className="mx-auto text-white">Continue</span></button>
        <div className="w-full text-center"><button className="underline text-base font-medium mt-2 cursor-pointer" onClick={() => navigate('/')}>No Thanks, I don’t want my plan.</button></div>
      </div>
    </div>
  );
}

PricingBlock.propTypes = {
  mode: PropTypes.bool,
  trans: PropTypes.bool,
  trans2: PropTypes.bool,
  onSelect1: PropTypes.func,
  onSelect2: PropTypes.func,
  navigate: PropTypes.func,
};

PricingBlock.defaultProps = {
  mode: false,
  trans: false,
  trans2: false,
  onSelect1: () => {},
  onSelect2: () => {},
  navigate: () => {},
};
