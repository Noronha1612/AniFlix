import styled, { css } from 'styled-components';
import { mainRed } from '../../../../styles/variables/colors';

const labelTransition = css`
    transform: translateY(-150%);
    font-size: 14px;
    font-weight: bold;

    @media (max-width: 950px) {
        font-size: 12px;
        font-weight: 600;
        transform: translateY(-130%);
    }
`;

export const FormContainer = styled.form<{ hasContent?: boolean }>`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    .input-box {
        width: 100%;
        height: 100%;
        min-height: 50px;
        position: relative;

        background: #fff;

        label {
            position: absolute;

            color: #8c8c8c;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);

            transition: .1s;
        }

        input {
            width: 100%;
            height: 100%;

            border: none;
            background: none;

            font-size: 1em;

            padding: 0 10px;

            color: #000;
            transform: translateY(6px);

            @media (max-width: 950px) {
                font-size: .85rem;
            }
        }

        input:focus ~ label { 
            ${ labelTransition } 
        }

        label {
            ${ props => props.hasContent && labelTransition }
        }
    }

    button {
        width: 44%;
        height: 100%;
        border: none;

        font-size: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${ mainRed };
        border-left: .25px solid #444;

        .icon {
            margin-left: 8px;
        }
    }

    @media (max-width: 1450px) {
        height: 60px;
    }

    @media(max-width: 950px) {
        flex-direction: column;

        .input-box {
            margin-top: 60px;
        }

        button {
            margin-top: 20px;
            padding: .8rem 0;
            font-size: 1rem;
            width: 7rem;
            border-radius: 2px;

            .icon {
                margin-left: 4px;
            }
        }
    }  
    
    @media(max-width: 740px) {
        height: 50px;
        
        input {
            font-size: .85rem;
        }
    }
`;
