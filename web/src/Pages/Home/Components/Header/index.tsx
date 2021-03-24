import React, { HTMLAttributes } from 'react';
import { useHistory } from 'react-router';

import { HeaderContainer, LogoWrapper, RightContent, SelectWrapper, SelectLang, SignIn } from './styles';

import Logo from '../../../../assets/logo.svg';

const Header: React.FC<HTMLAttributes<HTMLHeadElement>> = (props) => {
    const history = useHistory();

    return (
        <HeaderContainer {...props} >
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

                <SignIn onClick={ () => history.push('/login') }>Entrar</SignIn>
            </RightContent>
        </HeaderContainer>
    );
}

export default Header;