import styled, { css } from "styled-components";

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
`;