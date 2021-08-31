export const ADD_EMAIL = 'ADICIONAR';

export const addEmailState = (emails) => ({
  type: ADD_EMAIL,
  user: {
    email: emails,
  },
});
