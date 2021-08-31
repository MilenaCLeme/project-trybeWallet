import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  user: {
    email: '',
  },
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EMAIL:
    return {
      ...state,
      user: action.user,
    };
  default:
    return state;
  }
};

export default user;
