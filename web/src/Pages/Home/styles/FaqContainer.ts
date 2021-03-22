import styled from 'styled-components';
import { lineDark } from '../../../styles/variables/colors';

export const FaqContainer = styled.div`
    border-bottom: 8px solid ${ lineDark };

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 70px 125px;
    
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

        padding: 0 1.625rem;

        text-align: center;

        h6 {
            margin-bottom: 20px;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }

    @media (max-width: 950px) {
        padding: 70px 80px 125px 80px;
    }
    
    @media (max-width: 550px) {
        padding: 40px 0 110px 0;

        h1 {
            font-size: 1.625rem;
        }

        ul {
            padding: 30px 0;
            max-width: auto;
        }

        .sign-wrapper {
            h6 {
                padding: 0 2.25rem;
            }
        }
    }
`;