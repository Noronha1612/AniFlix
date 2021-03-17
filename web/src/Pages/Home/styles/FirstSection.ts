import styled from 'styled-components';

import { lineDark } from '../../../styles/variables/colors';

export const FirstSection = styled.div`
    width: 100%;
    min-width: 338px;
    height: 47rem;

    border-bottom: 8px solid ${ lineDark };

    position: relative;

    &::before {
        content: '';
        height: 100%;
        width: 100%;

        filter: brightness(.4);

        position: absolute;

        background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/33a85845-b76d-4e18-a74c-5859e3978a91/bcbd0d03-ee4b-4291-9283-efd23be8e0a3/BR-pt-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg);
        background-size: cover;
        box-shadow: inset 0 0 180px #000;

        z-index: -10;
    }

    main {
        width: 100%;
        height: 100%;

        padding: 0 80px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        transform: translateY(-60px);

        section {
            width: 100%;
            max-width: 700px;
            text-align: center;

            h1 {
                font-size: 4em;
                margin-bottom: 8px;
            }
            h4 {
                font-size: 1.625em;
                font-weight: 500;
                margin-bottom: 32px;
            }
            p {
                font-size: 1.17em;
                margin-bottom: 16px;
            }
        }

        @media (max-width: 1450px) {
            section {
                h1 {
                    font-size: 3.125rem;
                }
            }
        }

        @media (max-width: 550px) {
            padding: 0 30px;

            section {
                h1 {
                    font-size: 1.75rem;
                }
                h4 {
                    font-size: 1.125rem;
                    margin-bottom: 16px;
                    font-weight: 400;
                }
                p {
                    font-size: 18;
                    padding: 0 10%;
                }
            }
        }
    }

    @media (max-width: 1450px) {
        height: 43.75rem;
    }

    @media(max-width: 950px) {
        height: 46rem;
    }

    @media (max-width: 550px) {
        height: 32.5rem;
    }
`;