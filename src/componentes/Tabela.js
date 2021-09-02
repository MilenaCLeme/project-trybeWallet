import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TabelaTr from './TabelaTr';

class Tabela extends React.Component {
  render() {
    const { info } = this.props;
    const NovoArray = [];
    info.forEach(({ value, description, currency, tag, method, exchangeRates }) => {
      const obj = {
        value,
        description,
        tag,
        method,
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
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
        {NovoArray.map((elemento, index) => <TabelaTr obj={ elemento } key={ index } />)}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.wallet.expenses,
});

Tabela.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Tabela);
