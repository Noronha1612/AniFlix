import styled from 'styled-components';

import GlobeSVG from '../../../../assets/globe.svg';
import { mainRed } from '../../../../styles/variables/colors';

export const HeaderContainer = styled.header`
    padding: 28px 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & * {
        z-index: 10;
    }

    @media(max-width: 950px) {
        padding: 28px 38px;
    }

    @media (max-width: 550px) {
        padding: 18px 32px;
    }
`;

export const LogoWrapper = styled.section`
    width: 10.4375rem;
    height: 2.8125rem;
    
    img {
        height: 100%;
    }
    
    @media (max-width: 1450px) {
        height: 2.25rem;
        width: auto;
    }

    @media(max-width: 950px) {
        height: 2rem;
        width: auto;
    }

    @media (max-width: 550px) {
        height: 1.5rem;
        width: auto;
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

    @media (max-width: 550px) {
        padding: .15rem;
    }
`;

export const SelectLang = styled.select`
    background: #000;
    border: 0;
`

export const SignIn = styled.button`
    padding: 7px 17px;

    background: ${ mainRed };
    border: none;
    border-radius: 3px;

    font-size: 1rem;

    margin-left: 30px;

    @media (max-width: 550px) {
        padding: 4px 9px;
        font-size: .9rem;
        margin-left: 10px;
    }
`