import React from 'react';
import PropTypes from 'prop-types';

function StatBlock({ heading, value, color = 'text-red-500', barPct }) {
  return (
    <div>
      <div className="text-[14px]">{heading}</div>
      <div className={`font-bold text-xl ${color}`}>{value}</div>
      {typeof barPct === 'number' && (
        <div className="w-full h-2 rounded-2xl bg-gray-400 mt-2">
          <div className={`h-2 rounded-2xl ${color.replace('text-', 'bg-')}`} style={{ width: `${barPct}%` }} />
        </div>
      )}
    </div>
  );
}

StatBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
  barPct: PropTypes.number,
};

StatBlock.defaultProps = {
  color: 'text-red-500',
  barPct: undefined,
};

export default function StatsFeatures() {
  return (
    <div className="w-full p-4 gap-4 flex">
      <div className="pr-2 flex flex-col w-1/2 gap-5">
        <StatBlock heading="Body Fat" value="20-25%" color="text-red-500" />
        <div>
          <div className="text-[14px] mb-1">Energy Levels</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[30%] h-2 rounded-2xl bg-red-500" />
          </div>
        </div>
        <div>
          <div className="text-[14px] mb-1">Physical Health</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[35%] h-2 rounded-2xl bg-red-500" />
          </div>
        </div>
        <div>
          <div className="text-[14px] mb-1">Metabolism</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[25%] h-2 rounded-2xl bg-red-500" />
          </div>
        </div>
      </div>

      <div className="pr-2 flex flex-col w-1/2 gap-5">
        <StatBlock heading="Body Fat" value="10-12%" color="textColor"/>
        <div>
          <div className="text-[14px] mb-1">Energy Levels</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[85%] h-2 rounded-2xl rangeColor" />
          </div>
        </div>
        <div>
          <div className="text-[14px] mb-1">Physical Health</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[90%] h-2 rounded-2xl rangeColor" />
          </div>
        </div>
        <div>
          <div className="text-[14px] mb-1">Metabolism</div>
          <div className="w-full h-2 rounded-2xl bg-gray-400">
            <div className="w-[80%] h-2 rounded-2xl rangeColor" />
          </div>
        </div>
      </div>
    </div>
  );
}
