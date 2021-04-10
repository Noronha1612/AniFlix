import React from 'react';
import Logo from '../../assets/logo.svg';

import { Container, SignUpHeader, LogoWrapper } from './styles';

const SignUp: React.FC = () => {
    return (
        <Container>
            <SignUpHeader>
                <LogoWrapper>
                    <img src={ Logo } alt="AniWatch" />
                </LogoWrapper>
            </SignUpHeader>
        </Container>
    );
}

export default SignUp;