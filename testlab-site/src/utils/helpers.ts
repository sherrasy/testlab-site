import { TFormData } from '@/types/form-data.type';
import { ValidationPattern } from './constant';

const checkFieldNotEmpty = (value: string) =>
    value.length > 0 && value.trim() !== '';

const checkPatternValidity = (value: string, pattern: RegExp) =>
    pattern.test(value);

export const validateFormField = (value: string, pattern: RegExp) => {
    const isNotEmpty = checkFieldNotEmpty(value);
    const isPatternValid = checkPatternValidity(value, pattern);
    return {isNotEmpty, isPatternValid};
};

export const validateFormData = (formData: TFormData) => {
    const validationResults: { [key: string]: boolean } = {};
    Object.entries(formData).map(([key, value]) => {
        const {isNotEmpty, isPatternValid} = validateFormField(
            value,
            ValidationPattern[key as keyof typeof ValidationPattern]
        );
        validationResults[key] = isNotEmpty&& isPatternValid;
    });

    return validationResults;
};
