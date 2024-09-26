import { FormFieldName, ValidationPattern } from '@/utils/constant';
import { validateFormData, validateFormField } from '@/utils/helpers';
import CheckIcon from '@assets/check.svg?react';
import { TFormData } from '@frontend-types/form-data.type';
import { sendForm } from '@store/form-data/api-actions';
import { getHasPostingError, getIsPosting } from '@store/form-data/selectors';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { ChangeEvent, FormEvent, RefObject, useRef, useState } from 'react';

function Form(): JSX.Element {
  const formDataDefault = {
    name: '',
    phone: '',
  };
  const [isAgreed, setIsAgreed] = useState<boolean>(false);
  const [formData, setFormData] = useState<TFormData>(formDataDefault);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const isPosting = useAppSelector(getIsPosting);
  const hasError = useAppSelector(getHasPostingError);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreedInputChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const setDefaultParams = (inputRef:RefObject<HTMLInputElement>) =>{
    if(!inputRef || !inputRef.current){
      return;
    }
    const label = inputRef.current?.nextElementSibling;
    label?.classList.remove('label--visible');
    inputRef.current?.classList.add('input-empty');
    inputRef.current?.classList.remove('input-valid','input-invalid' );
  }

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const validationResults = validateFormData(formData);
    const isValid = !Object.values(validationResults).includes(false);
    if (isValid) {
      dispatch(
        sendForm({...formData, agreement:isAgreed})
      ).then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setFormData(formDataDefault);
          setIsAgreed(false); 
          setDefaultParams(nameRef);
          setDefaultParams(phoneRef);
        }
      });
    } else {
    }
  };

  const handleFocus = (name: string) => {
    const inputRef = name === FormFieldName.Name ? nameRef : phoneRef;
    const label = inputRef.current?.nextElementSibling;
    if (label) {
      label.classList.add('label--visible');
      inputRef.current?.classList.remove('input-empty');
    }
  };

  const handleBlur = (name: string) => {
    const inputRef = name === FormFieldName.Name ? nameRef : phoneRef;
    const pattern = name === FormFieldName.Name ? ValidationPattern.name : ValidationPattern.phone;
    const value = formData[name as keyof TFormData];
    const {isNotEmpty, isPatternValid} = validateFormField(value, pattern)
    if (!isNotEmpty) {
      setDefaultParams(inputRef)
      return;
    }
    if (!isPatternValid) {
      inputRef.current?.classList.add('input-invalid');
      inputRef.current?.classList.remove('input-empty','input-valid' );
      return;
    }
    if(isPatternValid && isNotEmpty){
      inputRef.current?.classList.add('input-valid');
      inputRef.current?.classList.remove('input-empty','input-invalid' );
      return;
    }
  };

  return (
    <div className='form' id='form'>
      <h2 className='form__title'>Отправь форму</h2>
      <form method='post' action='/' onSubmit={handleFormSubmit}>
        <div className='form__content-wrapper'>
          <div className='form__input-container form-input'>
            <input
              type='text'
              name={FormFieldName.Name}
              className='form-input__input input-empty'
              placeholder='Имя'
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus(FormFieldName.Name)}
              onBlur={() => handleBlur(FormFieldName.Name)}
              ref={nameRef}
              autoComplete="off"
              required
            />
            <label className='form-input__label' htmlFor={FormFieldName.Name}>
              Имя
            </label>
            <div className='form-input__validation-icon' />
            <span className='form-input__error'>
              Заполните поле (только русские буквы)
            </span>
          </div>
          <div className='form__input-container form-input'>
            <input
              type='tel'
              name={FormFieldName.Phone}
              className='form-input__input input-empty'
              placeholder='Телефон'
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => handleFocus(FormFieldName.Phone)}
              onBlur={() => handleBlur(FormFieldName.Phone)}
              ref={phoneRef}
              autoComplete="off"
              required
            />
            <label
              className={`form-input__label ${
                formData.phone !== '' ? 'label--visible' : 'label--hidden'
              }`}
              htmlFor={FormFieldName.Phone}
            >
              Телефон
            </label>
            <div className='form-input__validation-icon' />
            <span className='form-input__error'>
              Заполните поле (только 11 цифр)
            </span>
          </div>
          <div className='form__input-container form-checkbox'>
            <label>
              <span
                className={`form-checkbox__icon ${isAgreed ? 'checked' : ''}`}
              >
                <CheckIcon />
              </span>
              <input
                type='checkbox'
                name={FormFieldName.Agreement}
                onChange={handleAgreedInputChange}
                checked={isAgreed}
                className='form-checkbox__input'
                required
              />
              <span className='form-checkbox__label'>
                Согласен, отказываюсь
              </span>
            </label>
          </div>
          <button
            className={`form__button ${isPosting ? 'disabled' : ''}`}
            type='submit'
          >
            <span className='form__button-text'>Отправить</span>
          </button>
        </div>
      </form>
      {hasError && (
        <span className='form__posting-error'>
          Произошла ошибка отправки, попробуйте позже.
        </span>
      )}
    </div>
  );
}

export default Form;
