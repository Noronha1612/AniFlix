import styled from 'styled-components';

export const Container = styled.div`
    padding: 70px 45px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .text-wrapper {
        margin-right: 48px;
        max-width: 550px;

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

    .tv-animation {
        position: relative;

        width: 50%;
        max-width: 530px;

        img {
            width: 100%;
            max-width: 530px;
        }

        .video-wrapper {
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);

            width: 100%;
            height: 100%;
            max-width: 73%;
            max-height: 54%;
            z-index: -1;

            video {
                z-index: -1;
                width: 100%;
                height: 100%;
            }
        }
    }
`;