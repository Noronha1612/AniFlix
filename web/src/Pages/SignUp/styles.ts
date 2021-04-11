import styled from 'styled-components';
import { mainRed } from '../../styles/variables/colors';

const devicesUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png';

export const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;

    position: relative;

    background: #FFF;

    * {
        color: #000;
    }
`;

export const SignUpHeader = styled.header`
    height: 90px;

    padding: 0 3%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: initial;
    border-bottom: 1px solid #e6e6e6;

    img {
        height: 45px;
    }

    button {
        background: none;
        border: none;

        color: #333;
        font-weight: 700;
        font-size: 19px;
        line-height: 90px;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const Content = styled.div`
    padding: 20px 32px 60px;

    max-width: 978px;
    margin: 0 auto;

    main {
        max-width: 340px;
        margin: 0 auto;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        text-align: center;

        &::before {
            content: '';
            background-image: url(${ devicesUrl });
            background-repeat: no-repeat;
            background-size: 260px;
            background-position: bottom;

            margin-bottom: 35px;

            height: 175px;
            width: 260px;
        }

        h4 {
            text-transform: uppercase;

            font-weight: 400;
            font-size: 13px;
            line-height: 19px;

            display: block;
        }

        h1 {
            font-size: 23px;
            max-width: 300px;
            margin: 0 auto;
        }

        p {
            font-size: 17px;
            max-width: 300px;
            margin: 0 auto;
            margin-top: .4em;
        }

        button {
            width: 100%;
            background: ${ mainRed };

            color: #fff;
            font-size: 24px;
            font-weight: 700;
            height: 64px;

            border: none;
            border-radius: 4px;

            margin-top: 24px;
        }
    }
`;