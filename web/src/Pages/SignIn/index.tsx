import React from 'react';
import { Link } from 'react-router-dom';

import { Container, LoginBody, LoginContainer } from './styles';

import LogoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Link to="/">
                <img src={ LogoSvg } alt=""/>
            </Link>

            <LoginBody>
                <LoginContainer>
                    <h1>Entrar</h1>
                    <form>
                        <input type="text" placeholder="Email ou número de telefone"/>
                        <input type="password" placeholder="Senha"/>

                        <button type="submit">Entrar</button>
                        <input type="checkbox" id="remember-check"/>
                    </form>

                    <label htmlFor="remember-check">Lembre-se de mim</label>
                    <a>Precisa de ajuda?</a>

                    <button>
                        F { /* Facebook Icon */ }
                        <span>Conectar com Facebook</span>
                    </button>

                    <span>Novo por aqui? <a>Assine agora</a></span>

                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a>Saiba mais.</a></p>
                </LoginContainer>
            </LoginBody>
        </Container>
    );
}

export default SignIn;