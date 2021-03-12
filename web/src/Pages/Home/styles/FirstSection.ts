import styled from 'styled-components';

import { lineDark, mainRed } from '../../../styles/variables/colors';

export const FirstSection = styled.div`
    width: 100%;
    height: 47rem;

    border-bottom: 8px solid ${ lineDark };

    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;

        filter: brightness(.4);

        position: absolute;

        background-image: url(https://assets.nflxext.com/ffe/siteui/vlv3/33a85845-b76d-4e18-a74c-5859e3978a91/bcbd0d03-ee4b-4291-9283-efd23be8e0a3/BR-pt-20210308-popsignuptwoweeks-perspective_alpha_website_large.jpg);
        background-size: cover;
        background-position-y: -170px;
        box-shadow: inset 0 0 180px #000;

        z-index: -10;
    }

    main {
        width: 100%;
        height: 100%;

        padding: 0 20px;

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

            div {
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
            }
        }
    }
`;