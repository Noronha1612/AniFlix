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

            
        </Container>
    );
}

export default SignIn;