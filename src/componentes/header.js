import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { email, info } = this.props;
    const valortotal = { total: 0 };
    info.forEach(({ exchangeRates, currency, value }) => {
      const valorizou = exchangeRates[currency];
      const { ask } = valorizou;
      const total = Number(value) * Number(ask);
      valortotal.total += total;
    });
    return (
      <div className="iniciouheader">
        <div className="divHearder">
          <p> Despesas: R$</p>
          <p data-testid="total-field">{valortotal.total.toFixed(2)}</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
        <div className="divHearder one">
          <p>Email:</p>
          <p data-testid="email-field">{email}</p>
        </div>
        <img src="https://image.freepik.com/vetores-gratis/carteira-e-desenho-animado-do-dinheiro_138676-2086.jpg" alt="carteira" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  info: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  info: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
