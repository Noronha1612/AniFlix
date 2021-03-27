import styled, { css } from 'styled-components';

const backgroundUrl = 'https://assets.nflxext.com/ffe/siteui/vlv3/92bb3a0b-7e91-40a0-b27b-f2c3ac9ef6e4/b21e3ad9-aa05-4122-b6a8-977eb91d5657/BR-pt-20210322-popsignuptwoweeks-perspective_alpha_website_large.jpg'

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    min-width: 100vw;

    & > a {
        position: absolute;

        display: flex;
        align-items: center;

        height: 90px;
        
        margin-left: 3%;

        img {
            height: 45px;
        }
    }

    &::before {
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        background-image: url(${ backgroundUrl });
        background-size: cover;
        background-repeat: no-repeat;
        
        z-index: -10;
        filter: brightness(.5);
    }
`;

export const LoginBody = styled.div`
    display: flex;

    min-height: 100vh;
    max-width: 450px;

    box-sizing: initial;

    margin: 0 auto -236px;
    padding: 0 5%;
`;

export const LoginContainer = styled.div`
    background-color: rgba(0,0,0,.75);

    width: 100%;
    height: 660px;

    padding: 60px 68px 40px;
    margin: 90px 0;

    border-radius: 4px;

    h1 {
        font-size: 32px;
        font-weight: 700px;
        margin-bottom: 28px;
    }

    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        width: 100%;

        button {
            width: 100%;
        }
    }
`

const labelTransition = css`
    top: 30%;
    font-size: .7rem;
`;

export const InputBox = styled.div<{ hasContent?: boolean }>`
    width: 100%;
    height: 50px;
    position: relative;

    margin-bottom: 16px;

    input {
        width: 100%;
        height: 100%;
        line-height: 50px;
        padding: 16px 20px 0;

        border: none;

        background: #333;
        border-radius: 4px;

        ${ props => props.hasContent && `background: #454545;` }

        &:focus {
            background: #454545;
        }
    }

    label {
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%);

        color: #8c8c8c;
        font-size: 1rem;

        cursor: text;

        transition: .1s;
        ${ props => props.hasContent && labelTransition }
    }

    input:focus ~ label {
        ${ labelTransition }
    }
`