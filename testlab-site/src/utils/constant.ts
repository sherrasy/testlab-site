export const ApiConnectParam = {
  Url: 'https://my-json-server.typicode.com/sherrasy/mock_api/testlab',
  Timeout: 5000,
};

export const FormFieldName = {
  Name: 'name',
  Phone: 'phone',
  Agreement: 'agreement',
} as const;

export const ValidationPattern = {
  name: /^[\u0400-\u04FF\s-]+$/,
  phone: /^\d{11}$/,
} as const;

export const REDUCER_NAME = 'FORM'
