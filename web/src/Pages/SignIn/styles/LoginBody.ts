import styled from "styled-components";
import { mainRed } from "../../../styles/variables/colors";

export const LoginBody = styled.div`
    display: flex;

    min-height: 100vh;
    max-width: 450px;

    box-sizing: initial;

    margin: 0 auto -186px;
    padding: 0 5%;
`;

export const LoginContainer = styled.div<{ showLearnMore?: boolean}>`
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
                text-decoration: underline;
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
                text-decoration: underline;          
            }
        }
    }

    .register-btn + p {
        margin: 13px 0;
        font-size: .85rem;
        color: #8c8c8c;

        .open-link {
            transition: opacity .1s;
            opacity: ${ props => props.showLearnMore ? '0%' : '100%' };
            pointer-events: ${ props => props.showLearnMore ? 'none' : 'all' };
        }

        p {
            opacity: ${ props => props.showLearnMore ? '100%' : '0%' };
            pointer-events: ${ props => props.showLearnMore ? 'all' : 'none' };

            font-size: 13px;
            color: #8c8c8c;
            margin-top: 12px;

            transition: opacity .1s;
        }

        span {
            color: #0071eb;
            cursor: pointer;
            margin-left: 3px;

            position: relative;
            
            &:hover {
                text-decoration: underline;            
            }
        }
    }
`;