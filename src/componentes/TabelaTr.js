import React from 'react';
import PropTypes from 'prop-types';

class TabelaTr extends React.Component {
  render() {
    const { obj } = this.props;
    const { value, description, tag, method, ask, cod, vtotal } = obj;
    return (
      <tr>
        <td>{ description }</td>
        <td>{ tag }</td>
        <td>{ method }</td>
        <td>{ value }</td>
        <td>{ cod }</td>
        <td>{ ask }</td>
        <td>{ vtotal }</td>
        <td>Real</td>
        <td>
          <button type="submit" data-testid="delete-btn">Deletar</button>
        </td>
      </tr>
    );
  }
}

TabelaTr.propTypes = {
  obj: PropTypes.arrayOf.isRequired,
};

export default TabelaTr;
