import React from 'react';
import PropTypes from 'prop-types';

class Tabela extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <div className="tabelaladoalado">
        <div>
          <h4>Descrição</h4>
          {info
            .map((ele) => <p key={ ele.id }>{ ele.description }</p>) }
        </div>
        <div>
          <h4>Tag</h4>
          {info.map((ele) => <p key={ ele.id }>{ele.tag}</p>)}
        </div>
        <div>
          <h4>Método de pagamento</h4>
          {info.map((ele) => <p key={ ele.id }>{ ele.method }</p>)}
        </div>
        <div>
          <h4>Valor</h4>
          {info.map((ele) => <p key={ ele.id }>{ ele.value }</p>)}
        </div>
        <div>
          <h4>Câmbio Utilizado</h4>
          {info.map((ele) => <p key={ ele.id }>oi</p>)}
        </div>
        <div>
          <h4>Valor convertido</h4>
          {info.map((ele) => <p key={ ele.id }>BR</p>)}
        </div>
        <div>
          <h4>Moeda de conversão</h4>
          {info.map((ele) => <p key={ ele.id }>Real</p>)}
        </div>
        <div>
          <h4>Editar/Excluir</h4>
        </div>
      </div>
    );
  }
}

Tabela.propTypes = {
  info: PropTypes.arrayOf.isRequired,
};

export default Tabela;
