import styled from 'styled-components';

export const FaqContentContainer = styled.li<{ active: boolean }>`
    width: 100%;
    max-width: 815px;

    list-style: none;

    overflow: hidden;

    .always-shown {
        padding: .8em 2.2em .8em 1.2em;

        font-size: 1.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background: #303030;
        border-bottom: 1px solid #000;

        width: 100%;

        cursor: pointer;
        transition: .3s;

        h4 {
            font-weight: 400;
        }

        .icon {
            transition: .3s;

            transform: rotate(${ props => props.active ? '45deg' : '0deg' });
        }
    }

    .content-togglable {
        max-height: ${ props => props.active ? '800' : '0' }px;    

        transition: max-height .4s;

        p {
            background: #303030;
            
            padding: 1.2em;

            font-size: 1.625rem;
            font-weight: 400;
        }
    }

    & + & {
        margin-top: 8px;
    }
    
    @media (max-width: 950px) {
        .always-shown {
            padding: .6em 1.6em .6em 1.6em;
            font-size: 1.15rem;
            h4 {
                font-weight: 400;   
            }

            .icon {
                font-size: .8rem;
            }
        }
    }
    
    @media (max-width: 550px) {
        max-width: auto;
    }
`;