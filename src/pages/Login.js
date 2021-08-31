import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addEmailState as addStateGlobal } from '../actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      validar: 'disabled',
      validarEmail: false,
      validarSenha: false,
    };

    this.handerChangeEmail = this.handerChangeEmail.bind(this);
    this.handerChangeSenha = this.handerChangeSenha.bind(this);
  }

  handerChangeEmail({ target }) {
    this.setState({
      email: target.value,
    });
    const email = target.value;
    const reg = /\S+@\S+\.\S+/;
    if (reg.test(email)) {
      this.setState({
        validarEmail: true,
      });
    }
    const { validarSenha } = this.state;
    if (validarSenha === true && reg.test(email)) {
      this.setState({
        validar: '',
      });
    } else {
      this.setState({
        validar: 'disabled',
      });
    }
  }

  handerChangeSenha({ target }) {
    this.setState({
      senha: target.value,
    });
    const senha = target.value;
    const validarSenha = 6;
    const { validarEmail } = this.state;
    if (senha.length >= validarSenha && validarEmail === true) {
      this.setState({
        validar: '',
        validarSenha: true,
      });
    } else {
      this.setState({
        validar: 'disabled',
      });
    }
  }

  render() {
    const { email, senha, validar } = this.state;
    const { addEmailState } = this.props;
    const link = <Link to="/carteira" className="letra">Entrar</Link>;
    const entra = <>Entra</>;
    return (
      <div>
        <div className="iniciou colordatabela">
          <form className="caixainputs">
            <label htmlFor="email">
              E-mail:
              <input
                type="text"
                id="email"
                name="email"
                testid="email-input"
                value={ email }
                onChange={ this.handerChangeEmail }
              />
            </label>
            <label htmlFor="senha">
              Senha:
              <input
                type="password"
                id="senha"
                data-testid="password-input"
                name="senha"
                value={ senha }
                onChange={ this.handerChangeSenha }
              />
            </label>
          </form>
          <div className="divDoBotao">
            <button
              type="submit"
              className="botao"
              disabled={ validar }
              onClick={ () => { addEmailState(email); } }
            >
              { validar === '' ? link : entra }
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  addEmailState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addEmailState: (email) => dispatch(addStateGlobal(email)),
});

export default connect(null, mapDispatchToProps)(Login);
