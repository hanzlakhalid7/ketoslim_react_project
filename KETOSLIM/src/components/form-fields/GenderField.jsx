import React from 'react';
import PropTypes from 'prop-types';

export default function GenderField({ value, onChange }) {
  return (
    <div className="mb-4">
      <div className="mb-1">
        <label className="text-sm font-medium">Gender</label>
        <span className="ml-1 text-red-600">*</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="flex gap-1">
          <input type="radio" value="male" name="gender" checked={value === 'male'} onChange={(e) => onChange(e.target.value)} className="rangeColor" />
          <span>Male</span>
        </div>
        <div className="flex gap-1">
          <input type="radio" value="female" name="gender" checked={value === 'female'} onChange={(e) => onChange(e.target.value)} className="rangeColor" />
          <span>Female</span>
        </div>
      </div>
    </div>
  );
}

GenderField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

GenderField.defaultProps = {
  value: '',
};
