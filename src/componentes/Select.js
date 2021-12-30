import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { onChange, moeda, elementos } = this.props;
    return (
      <div>
        <label htmlFor="currency" className="form-label" id="label-c">
          Moeda:
          <select
            onChange={ onChange }
            className="form-control"
            id="currency"
            name="currency"
            value={ moeda }
          >
            {elementos
              .map((ele, index) => <option value={ ele } key={ index }>{ ele }</option>)}
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  elementos: PropTypes.arrayOf.isRequired,
  moeda: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
