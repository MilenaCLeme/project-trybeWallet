import {
  GET_PICTURE,
  ADD_EXPENSE,
  DELET_EXPENSE,
  ALTERAR_EXPENSE,
} from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case GET_PICTURE:
    return {
      ...state,
      currencies: action.data,
    };
  case DELET_EXPENSE:
    return {
      ...state,
      expenses: action.arr,
    };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: action.obj,
    };
  case ALTERAR_EXPENSE:
    return {
      ...state,
      expenses: action.ar,
    };
  default:
    return state;
  }
};

export default wallet;
