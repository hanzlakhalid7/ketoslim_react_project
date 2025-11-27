import React from 'react';
import PropTypes from 'prop-types';

export default function NumberField({ label, min, step, value, onChange, error, placeholder }) {
  return (
    <div className="mb-4">
      <div className="mb-1">
        <label className="text-sm font-medium">{label}</label>
        <span className="ml-1 text-red-600">*</span>
      </div>
      <input
        type="number"
        min={min}
        step={step}
        className="w-full px-3 py-2 inputBorder"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="text-red-600 text-xs mt-1">{error}</div>}
    </div>
  );
}

NumberField.propTypes = {
  label: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

NumberField.defaultProps = {
  min: undefined,
  step: 1,
  value: '',
  error: '',
  placeholder: '',
};
