import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, InputBox, LoginBody, LoginContainer } from './styles';

import LogoSvg from '../../assets/logo.svg';
import { set_email } from '../../store/NotLoggedInfo/actions';

const SignIn: React.FC = () => {
    const dispatch = useDispatch();

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const [ showPassword, setShowPassword ] = useState(false);

    const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }, []);

    return (
        <Container>
            <Link to="/">
                <img src={ LogoSvg } alt=""/>
            </Link>

            <LoginBody>
                <LoginContainer>
                    <h1>Entrar</h1>
                    <form onSubmit={ handleSubmit } >
                        <InputBox hasContent={ !!email } >
                            <input 
                                type="email"
                                autoComplete="email"
                                id="email-input-signin"
                                value={ email }
                                onChange={(e) => { 
                                    dispatch(set_email(e.target.value));
                                    setEmail(e.target.value);
                                }}
                            />
                            <label htmlFor="email-input-signin">Email ou número de telefone</label>
                        </InputBox>
                        <InputBox hasContent={ !!password } >
                            <input 
                                type={ showPassword ? 'text' : 'password' }
                                id="password-input-signin"
                                value={ password }
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <label htmlFor="password-input-signin">Senha</label>
                            <button 
                                onClick={() => setShowPassword(!showPassword)} 
                                className="showPassword"
                                title={ showPassword ? 'Ocultar senha' : 'Exibir senha'}
                            >{ showPassword ? 'Ocultar' : 'Mostrar' }</button>
                        </InputBox>

                        <button type="submit">Entrar</button>
                    </form>

                    <input type="checkbox" id="remember-check"/>
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