import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabelaTr from './TabelaTr';

class Tabela extends React.Component {
  render() {
    const { info, editar } = this.props;
    const NovoArray = [];
    info.forEach(({ value, description, currency, tag, method, exchangeRates, id }) => {
      const obj = {
        value,
        description,
        tag,
        method,
        id,
        currency,
      };
      const exchange = exchangeRates[currency];
      const { ask, name } = exchange;
      const nome = name.split('/')[0];
      obj.ask = Number(ask).toFixed(2);
      obj.cod = nome;
      const total = value * Number(ask);
      obj.vtotal = total.toFixed(2);
      NovoArray.push(obj);
    });
    return (
      <table className="table">
        <tr>
          <th scope="col">Descrição</th>
          <th scope="col">Tag</th>
          <th scope="col">Método de pagamento</th>
          <th scope="col">Valor</th>
          <th scope="col">Moeda</th>
          <th scope="col">Câmbio utilizado</th>
          <th scope="col">Valor convertido</th>
          <th scope="col">Moeda de conversão</th>
          <th scope="col">Editar/Excluir</th>
        </tr>
        {
          NovoArray.map((elemento, index) => (
            <TabelaTr obj={ elemento } key={ index } editar={ editar } />
          ))
        }
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.wallet.expenses,
});

Tabela.propTypes = {
  info: PropTypes.arrayOf.isRequired,
  editar: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(Tabela);
