import styled from 'styled-components';
import { mainRed } from '../../../../styles/variables/colors';

export const Container = styled.div`
  
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 70%;
        height: 100%;
        border: none;

        font-size: 1em;

        padding: 0 12px;

        color: #000;
    }
    button {
        width: 30%;
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
`;
