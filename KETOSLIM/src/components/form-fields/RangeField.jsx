import React from 'react';
import PropTypes from 'prop-types';

export default function RangeField({ label, min, max, value, onChange }) {
  return (
    <div className="flex flex-col">
      <div className="mb-1">
        <label className="text-sm font-medium">{label}</label>
        <span className="ml-1 text-red-600">*</span>
      </div>
      <div className="w-full flex gap-2 mb-2 items-center">
        <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(e.target.value)} className="w-full rangeColor" />
        <span className="w-12 text-right">{value}</span>
      </div>
    </div>
  );
}

RangeField.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
};

RangeField.defaultProps = {
  value: 0,
};
