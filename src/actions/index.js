export const ADD_EMAIL = 'ADICIONAR';
export const GET_PICTURE = 'GET_PICTURE';
export const ADD_EXPENSE = 'EXPENSE';

export const addEmailState = (emails) => ({
  type: ADD_EMAIL,
  email: emails,
});

export const getPicture = (param) => ({ type: GET_PICTURE, data: param });

export const addExpense = (arr) => ({
  type: ADD_EXPENSE,
  obj: arr,
});

export function fetchApi() {
  return async (dispath) => {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const resposta = await fetch(api);
    const data = await resposta.json();
    const apiArrayObj = Object.keys(data);
    dispath(getPicture(apiArrayObj));
  };
}

export function Adicionar(obj) {
  return async (dispath, getState) => {
    const api = 'https://economia.awesomeapi.com.br/json/all';
    const resposta = await fetch(api);
    const data = await resposta.json();
    const { expenses } = getState().wallet;
    const addObj = { ...obj, id: expenses.length, exchangeRates: data };
    const novoArray = [...expenses];
    novoArray.push(addObj);
    dispath(addExpense(novoArray));
  };
}
