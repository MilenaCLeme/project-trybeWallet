export const ADD_EMAIL = 'ADICIONAR';
export const GET_PICTURE = 'GET_PICTURE';
export const ADD_EXPENSE = 'EXPENSE';
export const DELET_EXPENSE = 'DELETE_EXPENSE';
export const ALTERAR_EXPENSE = 'ALTERAR_EXPENSE';

export const addEmailState = (emails) => ({
  type: ADD_EMAIL,
  email: emails,
});

export const getPicture = (param) => ({ type: GET_PICTURE, data: param });

export const addExpense = (arr) => ({
  type: ADD_EXPENSE,
  obj: arr,
});

export const deletExpense = (arry) => ({
  type: DELET_EXPENSE,
  arr: arry,
});

export const alterarExpense = (novo) => ({
  type: ALTERAR_EXPENSE,
  ar: novo,
});

const api = 'https://economia.awesomeapi.com.br/json/all';

export function fetchApi() {
  return async (dispath) => {
    const resposta = await fetch(api);
    const data = await resposta.json();
    const apiArrayObj = Object.keys(data);
    dispath(getPicture(apiArrayObj));
  };
}

export function Adicionar(obj) {
  return async (dispath, getState) => {
    const resposta = await fetch(api);
    const data = await resposta.json();
    const { expenses } = getState().wallet;
    const addObj = { ...obj, id: expenses.length, exchangeRates: data };
    const novoArray = [...expenses];
    novoArray.push(addObj);
    return dispath(addExpense(novoArray));
  };
}

export function deletar(id) {
  return (dispath, getState) => {
    const { expenses } = getState().wallet;
    const filtrarPeloId = expenses.filter((i) => i.id !== id);
    return dispath(deletExpense(filtrarPeloId));
  };
}

export function alterar(tabela, number) {
  return async (dispatch, getState) => {
    const resposta = await fetch(api);
    const data = await resposta.json();
    const novaArray = { ...tabela, id: number, exchangeRates: data };
    const { expenses } = getState().wallet;
    const novoEspenses = expenses.map((e) => {
      if (e.id === number) return novaArray;
      return e;
    });
    dispatch(alterarExpense(novoEspenses));
  };
}
