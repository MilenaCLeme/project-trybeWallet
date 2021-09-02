import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, valor } = this.props;
    return (
      <div className="iniciouheader">
        <div className="divHearder">
          <p> Despesas: R$</p>
          <p data-testid="total-field">{valor}</p>
          <p data-testid="header-currency-field">BR</p>
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

Header.propTypes = {
  email: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired,
};

export default Header;
