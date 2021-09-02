import React from 'react';
import PropTypes from 'prop-types';

class Conteudo extends React.Component {
  render() {
    const { valor, onChange, descricao, tag, pagamento, moedas, moeda } = this.props;
    const numero = 3;
    const elementos = moedas.filter((item) => item.length === numero);
    return (
      <>
        <label htmlFor="valor">
          Valor:
          <input type="number" name="valor" value={ valor } onChange={ onChange } />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input type="text" value={ descricao } name="descricao" onChange={ onChange } />
        </label>
        <label htmlFor="moeda">
          Moeda:
          <select onChange={ onChange } name="moeda" value={ moeda }>
            {elementos
              .map((ele, index) => <option value={ ele } key={ index }>{ ele }</option>)}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento:
          <select value={ pagamento } onChange={ onChange } name="pagamento">
            <option value="dinheiro">Dinheiro</option>
            <option value="cartão de crédito">Cartão de Crédito</option>
            <option value="cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select value={ tag } onChange={ onChange } name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </>
    );
  }
}

Conteudo.propTypes = {
  valor: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  pagamento: PropTypes.string.isRequired,
  moedas: PropTypes.arrayOf.isRequired,
  moeda: PropTypes.string.isRequired,
};

export default Conteudo;
