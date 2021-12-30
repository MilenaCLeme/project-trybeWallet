import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../componentes/header';
import Conteudo from '../componentes/conteudo';
import { Adicionar, fetchApi, alterar } from '../actions/index';
import Tabela from '../componentes/Tabela';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      id: false,
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };

    this.handerChange = this.handerChange.bind(this);
    this.verificaSeExisteId = this.verificaSeExisteId.bind(this);
    this.editarInfoNoState = this.editarInfoNoState.bind(this);
  }

  componentDidMount() {
    this.chamandoApi();
  }

  chamandoApi() {
    const { getMoedas } = this.props;
    getMoedas();
  }

  handerChange({ target }) {
    const nome = target.name;
    const valor = target.value;
    this.setState({
      [nome]: valor,
    });
  }

  editarInfoNoState({ currency, tag, id, method, value, description }) {
    this.setState({
      currency,
      tag,
      method,
      value,
      description,
      id,
    });
  }

  verificaSeExisteId() {
    const { adicionou, alterou } = this.props;
    const { id, value, currency, tag, method, description } = this.state;
    const tabela = {
      value,
      currency,
      tag,
      method,
      description,
    };
    if (id === false) {
      adicionou(tabela);
    } else {
      alterou(tabela, id);
    }

    this.setState({
      id: false,
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    });
  }

  render() {
    const { email, moedas, info } = this.props;
    const { value, description, currency, tag, method, id } = this.state;
    return (
      <div>
        <Header email={ email } expense={ info } />
        <div className="formulario">
          <Conteudo
            valor={ value }
            descricao={ description }
            pagamento={ method }
            tag={ tag }
            onChange={ this.handerChange }
            moedas={ moedas }
            moeda={ currency }
          />
          <div className="meio">
            <button
              type="button"
              onClick={ () => {
                this.verificaSeExisteId();
              } }
              className={ id === false ? 'btn btn-outline-primary' : 'btn btn-warning' }
            >
              { id === false ? 'Adicionar despesa' : 'Editar despesa' }
            </button>
          </div>
        </div>
        <Tabela editar={ this.editarInfoNoState } />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  moedas: state.wallet.currencies,
  info: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getMoedas: () => dispatch(fetchApi()),
  adicionou: (obj) => dispatch(Adicionar(obj)),
  alterou: (obj, id) => dispatch(alterar(obj, id)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  adicionou: PropTypes.func.isRequired,
  getMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf.isRequired,
  info: PropTypes.arrayOf.isRequired,
  alterou: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
