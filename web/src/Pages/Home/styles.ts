import styled from 'styled-components';

import BackgroundIMG from '../../assets/background-img.jpg';

export const Container = styled.div`
    overflow: hidden;
`;

export const BackgroundImg = styled.div`
    position: absolute;
    filter: brightness(.4);
    width: 100%;
    height: 75%;
    z-index: -10;

    background-image: url(${ BackgroundIMG });
    background-size: cover;
    background-position-y: -170px;
`