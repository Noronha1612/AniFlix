import styled from 'styled-components';

export const ContentWrapper = styled.div<{ imageOnLeft?: boolean }>`
    grid-area: description;
    
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: ${ props => props.imageOnLeft ? 'flex-start' : 'flex-end' };
    flex-direction: column;

    & > div {
        max-width: 530px;

        h1 {
            font-size: 3.125rem;
            line-height: 1.1;
            margin-bottom: .5rem;
        }
        h3 {
            font-size: 1.625rem;
            font-weight: 400;
        }
    }

    @media (max-width: 1200px) {
        align-items: center;
        text-align: center;

        & > div {
            max-width: 100%;
            
            h1 {
                font-size: 2.5rem;
            }
            h3 {
                font-size: 1.25rem;
            }
        }
    }
    
    @media (max-width: 740px) {
        & > div {
            max-width: 100%;
            
            h1 {
                font-size: 1.625rem;
            }
            h3 {
                font-size: 1.125rem;
            }
        }
    }
`;
