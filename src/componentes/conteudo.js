import React from 'react';
import PropTypes from 'prop-types';
import Inputes from './Inputes';

class Conteudo extends React.Component {
  render() {
    const { valor, onChange, descricao, tag, pagamento, moedas, moeda } = this.props;
    const numero = 3;
    const elementos = moedas.filter((item) => item.length === numero);
    return (
      <form>
        <Inputes
          valor={ valor }
          onChange={ onChange }
          descricao={ descricao }
        />
        <label htmlFor="currency">
          Moeda:
          <select onChange={ onChange } id="currency" name="currency" value={ moeda }>
            {elementos
              .map((ele, index) => <option value={ ele } key={ index }>{ ele }</option>)}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento:
          <select
            value={ pagamento }
            id="method"
            onChange={ onChange }
            name="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag:
          <select value={ tag } id="tag" onChange={ onChange } name="tag">
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
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
