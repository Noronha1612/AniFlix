import styled from 'styled-components';

import GlobeSVG from '../../../../assets/globe.svg';

export const HeaderContainer = styled.header`
    padding: 28px 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoWrapper = styled.section`
    width: 10.4375rem;
    height: 2.8125rem;
    
    img {
        height: 100%;
    }
`;

export const RightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SelectWrapper = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #fff;
    border-radius: 4px;

    padding: .3rem;

    font-size: .85rem;

    position: relative;

    &::before {
        content: '';
        background: url(${ GlobeSVG }) no-repeat center;
        width: 20px;
        height: 20px;
    }   
`;

export const SelectLang = styled.select`
    background: #000;
    border: 0;
`

export const SignIn = styled.button`
    
    padding: 7px 17px;

    background: #e50914;
    border: none;
    border-radius: 3px;

    font-size: 1rem;

    margin-left: 30px;
`