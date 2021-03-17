import styled from 'styled-components';

import { darkText } from '../../../styles/variables/colors';

import GlobeSVG from '../../../assets/globe.svg';

export const Container = styled.div`
    overflow: hidden;

    footer {
        display: flex;
        justify-content: center;
        align-items: center;

        .content-wrapper {
            width: 100%;
            max-width: 1000px;

            padding: 70px 45px;

            & * {
                color: ${ darkText };
            }

            & > p:first-child {
                font-size: 1em;
                
                margin-bottom: 30px;
            }

            ul {
                display: grid;
                grid-template-columns: repeat(4, 1fr);

                margin-bottom: 40px;

                row-gap: 12px;

                list-style: none;

                li {
                    font-size: 13px;
                    box-sizing: border-box;

                    cursor: pointer;

                    &:hover span {
                        border-bottom: 1px solid ${ darkText };
                    }
                }
            }

            .select-wrapper {
                position: relative;

                margin-bottom: 40px;

                &::before {
                    content: '';
                    background: url(${ GlobeSVG }) no-repeat center;
                    width: 37.5px;
                    height: 100%;

                    position: absolute;
                    top: 0;
                    left: 0;

                    z-index: 1;
                    color: #fff;
                }
            }

            .footer-span {
                font-size: 13px;
            }
        }
    }
`;