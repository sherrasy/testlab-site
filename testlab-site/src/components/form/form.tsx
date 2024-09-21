import { FormFieldName } from '@/utils/constant';
import { ChangeEvent, FormEvent, useState } from 'react';

function Form(): JSX.Element {
  const formDataDefault = {
    name: '',
    phone: '',
    agreement: false,
  };

  const [formData, setFormData] = useState(formDataDefault);
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
  };

  return (
    <div className='form' id='form'>
      <form method='post' action='/' onSubmit={handleFormSubmit}>
        <div className='form__input-container form-input'>
          <input
            type='text'
            name={FormFieldName.Name}
            className='form-input__input'
            placeholder='Имя'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form__input-container form-input'>
          <input
            type='tel'
            name={FormFieldName.Phone}
            className='form-input__input'
            placeholder='Телефон'
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='form__input-container form-input'>
        <input
                      type="checkbox"
                      name={FormFieldName.Agreement}
                      onChange={handleInputChange}
                      checked={formData.agreement}
                    />
        </div>
        <button className='form__button' type='submit'>
          <span className='form__button-text'>Отправить</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
