import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg';

import { Container, Content, SignUpHeader } from './styles';

const SignUp: React.FC = () => {
    return (
        <Container>
            <SignUpHeader>
                <Link to="/">
                    <img src={ Logo } alt="AniWatch" />
                </Link>

                <button>Entrar</button>
            </SignUpHeader>

            <Content>
                <main>
                    <h4>passo <strong>1</strong> de <strong>3</strong></h4>
                
                    <h1>Termine de configurar sua conta.</h1>

                    <p>A Aniwatch é personalizada para você. Crie uma senha para assistir à Aniwatch em qualquer aparelho quando você quiser.</p>
                
                    <button>Continuar</button>
                </main>
            </Content>
        </Container>
    );
}

export default SignUp;