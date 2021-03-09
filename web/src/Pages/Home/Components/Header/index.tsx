import React from 'react';

import { HeaderContainer, LogoWrapper, RightContent, SelectWrapper, SelectLang, SignIn } from './styles';

import Logo from '../../../../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <img src={ Logo } alt="AniWatch" />
            </LogoWrapper>

            <RightContent>
                <SelectWrapper>
                    <SelectLang id="select-lang">
                        <option value="pt">Português</option>
                        <option value="en">English</option>
                    </SelectLang>
                </SelectWrapper>

                <SignIn>Entrar</SignIn>
            </RightContent>
        </HeaderContainer>
    );
}

export default Header;