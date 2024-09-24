import { FormFieldName } from '@/utils/constant';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import CheckIcon from '@assets/check.svg?react';

function Form(): JSX.Element {
  const formDataDefault = {
    name: '',
    phone: '',
  };
  const [isAgreed, setIsAgreed] = useState(false);
  const [formData, setFormData] = useState(formDataDefault);
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAgreedInputChange = () => {
    setIsAgreed((prev) => !prev);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };
  const handleFocus = (name: string) => {
    const inputRef = name === FormFieldName.Name ? nameRef : phoneRef;
    const label = inputRef.current?.previousElementSibling;
    if (label) {
      label.classList.add('label--visible');
    }
  };
  const handleBlur = (name: string) => {
    const inputRef = name === FormFieldName.Name ? nameRef : phoneRef;
    const label = inputRef.current?.previousElementSibling;
    if (label) {
      label.classList.remove('label--visible');
    }
  };
  return (
    <div className='form' id='form'>
      <h2 className='form__title'>Отправь форму</h2>
      <form method='post' action='/' onSubmit={handleFormSubmit}>
        <div className='form__content-wrapper'>
          <div className='form__input-container form-input'>
            <label className={`form-input__label`} htmlFor={FormFieldName.Name}>
              Имя
            </label>
            <input
              type='text'
              name={FormFieldName.Name}
              className={`form-input__input  `}
              placeholder='Имя'
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => handleFocus(FormFieldName.Name)}
              onBlur={() => handleBlur(FormFieldName.Name)}
              ref={nameRef}
              required
            />
          </div>
          <div className='form__input-container form-input'>
            <label
              className={`form-input__label ${
                formData.name !== '' ? 'label--visible' : 'label--hidden'
              }`}
              htmlFor={FormFieldName.Phone}
            >
              Телефон
            </label>
            <input
              type='tel'
              name={FormFieldName.Phone}
              className='form-input__input'
              placeholder='Телефон'
              value={formData.phone}
              onChange={handleInputChange}
              onFocus={() => handleFocus(FormFieldName.Phone)}
              onBlur={() => handleBlur(FormFieldName.Phone)}
              ref={phoneRef}
              required
            />
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
              />
              <span className='form-checkbox__label'>
                Согласен, отказываюсь
              </span>
            </label>
          </div>
          <button className='form__button' type='submit'>
            <span className='form__button-text'>Отправить</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
