import styled from 'styled-components';
import { mainRed } from '../../../../styles/variables/colors';

export const Container = styled.div`
    width: 100%;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
        width: 100%;
        height: 100%;
        border: none;

        font-size: 1em;

        padding: 0 12px;

        color: #000;
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

        input {
            margin-top: 60px;
            padding: 20px 10px;
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
