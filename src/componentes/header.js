import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <div className="iniciouheader">
        <div>
          <p>Email:</p>
          <p data-testid="email-field">{email}</p>
        </div>
        <div>
          <p data-testid="total-field">Despesas de gastos: 0</p>
        </div>
        <div>
          <p data-testid="header-currency-field">BR</p>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default Header;
