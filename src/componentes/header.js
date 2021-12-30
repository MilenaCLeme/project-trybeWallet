import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AiFillWallet } from 'react-icons/ai';

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
      <div className="header">
        <div className="log">
          <AiFillWallet className="cor-1" />
          <p className="letra-1">Wallet Money</p>
        </div>
        <div className="despesa">
          <div className="email-header">
            <p data-testid="email-field">{`Email:  ${email}`}</p>
          </div>
          <div className="despesas-1">
            <p> Despesas:</p>
            <p data-testid="total-field">{`R$ ${valortotal.total.toFixed(2)}`}</p>
            <p data-testid="header-currency-field">BRL</p>
          </div>
        </div>
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
