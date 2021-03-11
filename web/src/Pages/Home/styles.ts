import styled from 'styled-components';

import BackgroundIMG from '../../assets/background-img.jpg';

import GlobeSVG from '../../assets/globe.svg';

import { blueText, darkText, lineDark, mainRed } from '../../styles/variables/colors';

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

                    z-index: -1;
                    color: #fff;
                }
            }

            .footer-span {
                font-size: 13px;
            }
        }
    }
`;

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
`

export const ContentContainer = styled.div`
    padding: 70px 45px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 8px solid ${ lineDark };

    .image-wrapper {
        position: relative;

        width: 50%;
        max-width: 530px;
        
        img {
            width: 100%;
            max-width: 530px;
        }
    }

    .tv-animation {
        position: relative;

        .video-wrapper {
            position: absolute;
            z-index: -1;

            video {
                z-index: -1;
                width: 100%;
                height: 100%;
            }
        }

        .vw1 {
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 100%;
            height: 100%;
            max-width: 73%;
            max-height: 54%;
        }

        .vw2 {
            top: 34%;
            left: 50%;
            transform: translate(-50%, -50%);
            
            width: 100%;
            height: 100%;
            max-width: 63%;
            max-height: 47%;
        }
    }

    .download-demo {
        transform: scale(.9);

        .download-content {
            display: flex;
            align-items: center;

            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);

            width: 23rem;
            height: 6.5rem;
            padding: .5rem .75rem;

            background: #000;
            border: 2px solid ${ lineDark };
            border-radius: 12px;

            z-index: 30;

            .download-info-wrapper {
                margin-left: .6rem;

                p {
                    color: ${ blueText };
                }
            }

            .icon-wrapper {
                margin-left: 2rem;
                border-bottom: .17rem solid #fff;

                .icon {
                    color: ${ blueText };
                    margin-bottom: -2px;
                }
            }

            img {
                height: 100%;
                width: auto;
            }
        }
    }
`;

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

        .input-box {
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
`;

export const SelectLangFooter = styled.select`
    padding: 16px;
    padding-left: 30px;
    padding-right: 4px;

    border: 1px solid #333;
    background-color: transparent;
    border-radius: 4px;

    font-size: 16px;
    color: #999;
`