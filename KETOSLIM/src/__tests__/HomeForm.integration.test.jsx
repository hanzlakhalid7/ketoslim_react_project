import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

import HomeForm from '../components/HomeForm';
import { ParameterContext } from '../components/ParameterContext';

describe('HomeForm integration', () => {
  it('fills form and submits calling setFormData and navigate', async () => {
    const user = userEvent.setup();
    const setFormData = jest.fn();

    render(
      <ParameterContext.Provider value={{ formData: {}, setFormData, mode: false, setMode: jest.fn() }}>
        <HomeForm />
      </ParameterContext.Provider>
    );

    // select gender radio
    const maleInput = document.querySelector('input[name="gender"][value="male"]');
    await user.click(maleInput);

    // set two range sliders (first is Body Fat, second is BMI)
    const sliders = screen.getAllByRole('slider');
    // range inputs are best updated with fireEvent.change
    const { fireEvent } = require('@testing-library/react');
    fireEvent.change(sliders[0], { target: { value: '25' } });
    fireEvent.change(sliders[1], { target: { value: '25' } });

    // daily calories
    const calories = screen.getByPlaceholderText('e.g. 2000');
    await user.clear(calories);
    await user.type(calories, '2000');

    // water select
    const combobox = screen.getByRole('combobox');
    await user.selectOptions(combobox, '2');

    // weekly weight (placeholder e.g. 1.5)
    const weightInput = screen.getByPlaceholderText('e.g. 1.5');
    await user.clear(weightInput);
    await user.type(weightInput, '1.5');

    // days to see results
    const days = screen.getByPlaceholderText('e.g. 30');
    await user.clear(days);
    await user.type(days, '30');

    // submit
    const btn = screen.getByRole('button', { name: /See My Results/i });
    await user.click(btn);

    expect(setFormData).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/Result');
  });
});
