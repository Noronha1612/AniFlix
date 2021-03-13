import styled from 'styled-components';
import { lineDark, mainRed } from '../../../styles/variables/colors';

export const FaqContainer = styled.div`
    border-bottom: 8px solid ${ lineDark };

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 70px 45px;
    
    h1 {
        font-size: 3.125rem;
        line-height: 1.1;
    }

    ul {
        width: 100%;
        max-width: 815px;

        padding: 56px 0;
    }
    
    .sign-wrapper {
        width: 100%;
        max-width: 815px;

        padding: 0 3rem;

        text-align: center;

        h6 {
            margin-bottom: 20px;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
`;