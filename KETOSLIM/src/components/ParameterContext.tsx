import { createContext, Dispatch, SetStateAction } from 'react';

export interface FormData {
    gender: string;
    fatScale: number;
    bmi: number;
    calorie: number | string;
    water: number | string;
    weightLoss: number | string;
    days: number | string;
}

export interface ParameterContextType {
    mode: boolean;
    setMode: Dispatch<SetStateAction<boolean>>;
    formData: Partial<FormData>;
    setFormData: Dispatch<SetStateAction<Partial<FormData>>>;
}

export const ParameterContext = createContext<ParameterContextType>({
    mode: false,
    setMode: () => { },
    formData: {},
    setFormData: () => { },
});
