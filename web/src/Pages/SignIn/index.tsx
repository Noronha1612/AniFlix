import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, FooterSignIn, InputBox, LoginBody, LoginContainer } from './styles';

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

                    <div className="utils-wrapper">
                        <div className="checkbox-wrapper">
                            <input type="checkbox" id="remember-check"/>
                            <label htmlFor="remember-check">Lembre-se de mim</label>
                        </div>
                        <a href="/">Precisa de ajuda?</a>
                    </div>

                    <button>
                        <img alt="fb-icon" className="icon-facebook" src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png" />
                        <span>Conectar com Facebook</span>
                    </button>

                    <div className="register-btn">
                        <span>Novo por aqui?</span>
                        <a href="/">Assine agora</a>
                    </div>

                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="/">Saiba mais.</a></p>
                </LoginContainer>
            </LoginBody>

            <FooterSignIn>
                <h6>Dúvidas? Ligue 0800-761-4631</h6>

                <div className="hyperlinks-container">
                    <a href="/">Perguntas frequentes</a>
                    <a href="/">Centro de ajuda</a>
                    <a href="/">Termos de uso</a>
                    <a href="/">Privacidade</a>
                    <a href="/">Preferências de cookies</a>
                    <a href="/">Informações coorporativas</a>
                </div>

                <label htmlFor="select-lang-signin" className="select-wrapper">
                    <select id="select-lang-signin" >
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </select>
                </label>
            </FooterSignIn>
        </Container>
    );
}

export default SignIn;