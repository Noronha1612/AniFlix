import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, FooterSignIn, InputBox, LoginBody, LoginContainer } from './styles';

import LogoSvg from '../../assets/logo.svg';
import GlobeSVG from '../../assets/globe.svg';
import { set_email } from '../../store/NotLoggedInfo/actions';
import { ApplicationStore } from '../../store';

const SignIn: React.FC = () => {
    const dispatch = useDispatch();
    const possibleEmail = useSelector((store: ApplicationStore) => store.NotLoggedInfo.possibleEmail);

    const [ email, setEmail ] = useState(possibleEmail);
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
                <div className="content">
                    <h6>Dúvidas? Ligue 0800-761-4631</h6>

                    <div className="hyperlinks-container">
                        <a href="/"><span>Perguntas frequentes</span></a>
                        <a href="/"><span>Centro de ajuda</span></a>
                        <a href="/"><span>Termos de uso</span></a>
                        <a href="/"><span>Privacidade</span></a>
                        <a href="/"><span>Preferências de cookies</span></a>
                        <a href="/"><span>Informações coorporativas</span></a>
                    </div>

                    <div className="select-wrapper">
                        <label htmlFor="select-lang-signin">
                            <img src={ GlobeSVG } alt="Globe"/>
                        </label>
                        <select id="select-lang-signin" >
                            <option value="pt">Português</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                </div>
            </FooterSignIn>
        </Container>
    );
}

export default SignIn;