import React from 'react';
import PropTypes from 'prop-types';

class Inputes extends React.Component {
  render() {
    const { valor, onChange, descricao } = this.props;
    return (
      <>
        <label htmlFor="value">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ valor }
            onChange={ onChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição:
          <input
            type="text"
            id="descricao"
            value={ descricao }
            name="description"
            onChange={ onChange }
          />
        </label>
      </>
    );
  }
}

Inputes.propTypes = {
  valor: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Inputes;
