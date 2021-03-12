import styled from 'styled-components';
import { blueText, lineDark } from '../../../styles/variables/colors';

export const ContentContainer = styled.div`
    padding: 70px 45px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 8px solid ${ lineDark };

    .image-wrapper {
        position: relative;

        width: 530px;
        
        img {
            width: 530px;
        }

        @media (max-width: 1200px) {
            
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