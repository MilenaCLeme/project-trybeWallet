import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deletar as deletarPeloId } from '../actions/index';

class TabelaTr extends React.Component {
  render() {
    const { obj, deletar, editar } = this.props;
    const { value, description, tag, method, ask, cod, vtotal, id } = obj;
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
          <button
            type="button"
            data-testid="edit-btn"
            onClick={ () => { editar(obj); } }
            className="btn btn-warning"
          >
            Editar
          </button>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => { deletar(id); } }
            className="btn btn-danger"
          >
            Deletar
          </button>
        </td>
      </tr>
    );
  }
}

TabelaTr.propTypes = {
  obj: PropTypes.arrayOf.isRequired,
  deletar: PropTypes.func.isRequired,
  editar: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  deletar: (id) => dispatch(deletarPeloId(id)),
});

export default connect(null, mapDispatchToProps)(TabelaTr);
