import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

import Tv from '../../../../assets/tv.png';

interface VideoOnRightContentProps extends HTMLAttributes<HTMLDivElement> {

}

const VideoOnRightContent: React.FC<VideoOnRightContentProps> = ({ ...props }) => {
    return (
        <Container {...props} >
            <div className="text-wrapper">
                <h1>Aproveite na TV.</h1>
                <h3>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.</h3>
            </div>

            <section className="tv-animation">
                <img src={ Tv } alt="tv" />
                <div className="video-wrapper">
                    <video 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" 
                        autoPlay
                        muted
                        playsInline
                        loop
                    />
                </div>
            </section>
        </Container>
    );
}

export default VideoOnRightContent;