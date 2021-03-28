import styled, { css } from 'styled-components';
import { mainRed } from '../../styles/variables/colors';

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

    .underscored {

    }

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

            padding: 16px;
            margin: 24px 0 12px 0;

            border: none;
            border-radius: 4px;
            background: ${ mainRed };

            font-size: 1rem;
            font-weight: 700;
        }
    }

    .utils-wrapper {
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        .checkbox-wrapper {
            display: flex;
            align-items: center;

            input[type="checkbox"] {
                background: #b3b3b3;
                border: none;
                width: 16px;
                height: 16px;
            }

            label {
                color: #b3b3b3;
                margin-left: 4px;
                font-size: 13px;
                font-weight: 500;
            }
        }

        a {
            color: #b3b3b3;
            font-size: 13px;
            font-weight: 500;

            position: relative;

            &:hover {
                &::after {
                    position: absolute;
                    bottom: 0;
                    left: 0;

                    display: block;
                    content: '';

                    width: 100%;
                    height: 1px;
                    background: #b3b3b3;
                }             
            }
        }
    }

    .utils-wrapper + button {
        background: none;
        border: none;

        margin-top: 3.725rem;

        display: flex;
        align-items: center;

        img {
            height: 20px;
            width: 20px;
        }

        span {
            margin-left: .5rem;
            color: #737373;
            font-weight: 500;
            font-size: 13px;
        }
    }

    .register-btn {
        margin-top: 1rem;

        span {
            color: #737373;
            font-size: 16px;
            font-weight: 300;
        }

        a {
            color: #fff;
            margin-left: 4px;

            position: relative;
            
            &:hover {
                &::after {
                    position: absolute;
                    bottom: 2px;
                    left: 0;

                    display: block;
                    content: '';

                    width: 100%;
                    height: 1px;
                    background: #fff;
                }             
            }
        }
    }

    .register-btn + p {
        margin: 13px 0;
        font-size: .85rem;
        color: #8c8c8c;

        a {
            color: #0071eb;

            position: relative;
            
            &:hover {
                &::after {
                    position: absolute;
                    bottom: 0;
                    left: 0;

                    display: block;
                    content: '';

                    width: 100%;
                    height: 1px;
                    background: #0071eb;
                }             
            }
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

        font-size: 1rem;

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

    .showPassword {
        position: absolute;
        right: 0;
        transform: translateY(-50%);

        width: initial;
        height: 100%;

        padding: 0 12px;

        background: none;
        border: none;

        font-weight: 300;
        font-size: .85rem;
        color: #8c8c8c;

        text-transform: uppercase;
    }

    input:not(:focus) ~ .showPassword {
        ${ props => !props.hasContent && 'display: none;' };
    }
`