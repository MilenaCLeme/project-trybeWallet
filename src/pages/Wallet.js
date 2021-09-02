import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../componentes/header';
import Conteudo from '../componentes/conteudo';
import { Adicionar, fetchApi } from '../actions/index';
import Tabela from '../componentes/Tabela';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      description: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
      currency: 'USD',
    };

    this.handerChange = this.handerChange.bind(this);
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

  render() {
    const { email, moedas, info, adicionou } = this.props;
    const { value, description, currency, tag, method } = this.state;
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
          <button
            type="button"
            onClick={ () => {
              adicionou(this.state);
            } }
          >
            Adicionar despesa
          </button>
        </div>
        <Tabela />
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
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  adicionou: PropTypes.func.isRequired,
  getMoedas: PropTypes.func.isRequired,
  moedas: PropTypes.arrayOf.isRequired,
  info: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
