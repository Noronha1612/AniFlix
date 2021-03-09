import styled from 'styled-components';

import BackgroundIMG from '../../assets/background-img.jpg';
import { lineDark, mainRed } from '../../styles/variables/colors';

export const Container = styled.div`
    overflow: hidden;
`;

export const FirstSection = styled.div`
    width: 100%;
    height: 77.5vh;

    border-bottom: 8px solid ${ lineDark };

    position: relative;

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        filter: brightness(.4);
        position: absolute;
        background-image: url(${ BackgroundIMG });
        background-size: cover;
        background-position-y: -170px;
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
`