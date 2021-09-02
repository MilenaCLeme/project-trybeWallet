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
      valor: 0,
      descricao: '',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
      moeda: 'USD',
      exchangeRates: {},
      armazenar: [],
      total: 0,
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
    const valor = nome === 'valor' ? Number(target.value) : target.value;
    this.setState({
      [nome]: valor,
    });
  }

  async chamarApi(moeda) {
    try {
      const fetchAPI = `https://economia.awesomeapi.com.br/${moeda}`;
      const responseAPI = await fetch(fetchAPI);
      const data = await responseAPI.json();
      console.log(data);
      const nomeex = 'exchangeRates';
      this.setState({
        [nomeex]: data,
      });
      this.armazenar();
    } catch (error) {
      return error;
    }
  }

  altera() {
    const { valor, descricao, tag, moeda, pagamento } = this.state;
    const sei = tag;
    const { adicionou } = this.props;
    const objArm = {
      value: valor,
      description: descricao,
      currency: moeda,
      method: pagamento,
      tag: sei,
    };
    adicionou(objArm);
  }

  armazenar() {
    const { armazenar, valor, descricao, tag, moeda, pagamento } = this.state;
    const x = tag;
    const box = [...armazenar];
    const objArm = {
      value: valor,
      description: descricao,
      currency: moeda,
      method: pagamento,
      tag: x,
    };
    box.push(objArm);
    this.setState({
      armazenar: box,
    });
    this.valorTotal(valor);
  }

  valorTotal(valou) {
    const { exchangeRates, total } = this.state;
    const iniciou = total;
    const comeco = valou * Number(exchangeRates[0].ask);
    const totalValor = iniciou + comeco;
    this.setState({
      total: totalValor,
    });
  }

  render() {
    const { email, moedas, info } = this.props;
    const { valor, descricao, pagamento, tag, total, moeda } = this.state;
    return (
      <div>
        <Header email={ email } valor={ total } />
        <form className="formulario">
          <Conteudo
            valor={ valor }
            descricao={ descricao }
            pagamento={ pagamento }
            tag={ tag }
            onChange={ this.handerChange }
            moedas={ moedas }
            moeda={ moeda }
          />
          <button
            type="button"
            onClick={ () => {
              this.altera();
              this.chamarApi(moeda);
            } }
          >
            Adicionar despesa
          </button>
        </form>
        <Tabela info={ info } />
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
