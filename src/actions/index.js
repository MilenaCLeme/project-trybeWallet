export const ADD_EMAIL = 'ADICIONAR';

export const addEmailState = (emails) => ({
  type: ADD_EMAIL,
  email: emails,
});
