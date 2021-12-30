import React from 'react';
import PropTypes from 'prop-types';
import Inputes from './Inputes';
import Select from './Select';

class Conteudo extends React.Component {
  render() {
    const { valor, onChange, descricao, tag, pagamento, moedas, moeda } = this.props;
    const numero = 3;
    const elementos = moedas.filter((item) => item.length === numero);
    return (
      <form className="form-1">
        <Inputes
          valor={ valor }
          onChange={ onChange }
          descricao={ descricao }
        />
        <Select
          elementos={ elementos }
          moeda={ moeda }
          onChange={ onChange }
        />
        <label htmlFor="method" className="form-label" id="label-m">
          Método de pagamento:
          <select
            value={ pagamento }
            id="method"
            onChange={ onChange }
            name="method"
            className="form-control"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de Crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag" id="label-t">
          Tag:
          <select
            value={ tag }
            id="tag"
            onChange={ onChange }
            name="tag"
            className="form-control"
          >
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
