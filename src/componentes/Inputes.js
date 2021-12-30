import React from 'react';
import PropTypes from 'prop-types';

class Inputes extends React.Component {
  render() {
    const { valor, onChange, descricao } = this.props;
    return (
      <div>
        <label htmlFor="value" className="form-label" id="label-v">
          Valor:
          <input
            type="number"
            name="value"
            id="value"
            value={ valor }
            onChange={ onChange }
            min={ 0 }
            className="form-control"
          />
        </label>
        <label htmlFor="descricao" className="form-label" id="label-d">
          Descrição:
          <input
            type="text"
            id="descricao"
            value={ descricao }
            name="description"
            onChange={ onChange }
            className="form-control"
          />
        </label>
      </div>
    );
  }
}

Inputes.propTypes = {
  valor: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Inputes;
