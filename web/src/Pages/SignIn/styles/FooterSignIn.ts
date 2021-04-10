import styled from "styled-components";

export const FooterSignIn = styled.footer`
    background: rgba(0,0,0,.75);

    min-width: 190px;
    width: 100%;
    
    padding-bottom: 20px;
    
    .content {
        padding: 30px 0;
        margin: 0 auto;
        max-width: 1000px;
        width: 90%;

        * {   
            color: #757575;
        }

        h6 {
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: 30px;
        }

        .hyperlinks-container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            row-gap: 16px;

            margin-bottom: 36px;

            span {
                font-size: 13px;
                position: relative;

                &:hover {
                    &::after {
                        position: absolute;
                        bottom: 0;
                        left: 0;

                        display: block;
                        content: '';

                        width: 100%;
                        height: 1px;
                        background: #b3b3b3;
                    }             
                }
            }
        }

        .select-wrapper {
            background: #000;
            border: 1px solid #333;
            border-radius: 4px;

            position: relative;

            width: min-content;
            height: min-content;

            label {
                position: absolute;
                top: 50%;
                left: 25px;
                transform: translate(-50%, -50%);

                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 18px;
                }
            }

            select {
                background: #000;
                border: none;

                padding: 12px 2px 12px 50px;

                border-radius: 4px;

                font-size: .9rem;
                line-height: 1.7;   
            }
        }
    }

    @media(max-width: 740px) {
        border-top: 1px solid #e5e5e5;

        .content {
            .hyperlinks-container {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    }

    @media(max-width: 500px) {
        .content {
            .hyperlinks-container {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
`;