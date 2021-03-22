import styled from 'styled-components';
import { blueText, lineDark } from '../../../styles/variables/colors';

export const ContentContainer = styled.div<{ imageOnLeft?: boolean }>`
    padding: 70px 125px;
    width: 100%;

    border-bottom: 8px solid ${ lineDark };

    display: grid;
    grid-template-areas: "${props => props.imageOnLeft ? 'image description' : 'description image'}";
    column-gap: 100px;

    .image-wrapper {
        grid-area: image;

        display: flex;
        justify-content: flex-end; 
        align-items: center;

        width: 100%;
        
        img {
            width: 530px;
        }

        @media (max-width: 740px) {
            & > img {
                width: 100%;
                min-width: 288px;
            }
        }
    }

    .tv-animation {
        position: relative;

        width: 530px;

        .animation-wrapper {
            @media (max-width: 740px) {
                width: 100%;

                img {
                    width: 100%;
                    min-width: 288px;
                }
            }
        }

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
            top: 33%;
            left: 59%;
            transform: translate(-50%, -50%);
            
            width: 100%;
            height: 100%;
            max-width: 76%;
            max-height: 54%;
        }
    }

    .download-demo {
        position: relative;

        width: 100%;

        .download-wrapper {
            position: relative;
            width: 380px;

            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 740px) {
                width: 100%;
                min-width: 320px;

                & > img {
                    width: 100%;
                }
            }
        }
        
        .download-content {
            display: flex;
            align-items: center;
            justify-content: space-between;

            position: absolute;
            bottom: 10%;
            left: 50%;
            transform: translateX(-50%);

            width: 100%;
            max-width: 380px;
            height: 30%;
            max-height: 90px;
            padding: .5rem 1.25rem .5rem 1rem;

            background: #000;
            border: 2px solid ${ lineDark };
            border-radius: 12px;

            z-index: 50;

            .download-info-wrapper {
                margin-left: .6rem;

                p {
                    color: ${ blueText };
                }
            }

            .icon-wrapper {
                margin-left: 3.25rem;
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

            @media (max-width: 480px) {
                width: 85%;

                max-height: 70px;

                .download-info-wrapper {
                    margin-left: .4rem;

                    font-size: 70%;
                }

                .icon-wrapper {
                    margin-left: 1.85rem;
                }
            }
        }
    }

    @media (max-width: 1200px) {
        grid-template-areas: 'description'
                             'image';

        padding: 70px 45px;

        .image-wrapper {
            justify-content: center;
        }

        .tv-animation {
            max-width: 100%;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            .animation-wrapper {
                position: relative;
            }
            
            .vw2 {
                top: 34%;
                left: 50%;
                transform: translate(-50%, -50%);
                
                width: 100%;
                height: 100%;
                max-width: 62%;
                max-height: 54%;
            }
        }
    } 
    
    @media (max-width: 740px) {
        padding: 70px 10px;
    }
`;