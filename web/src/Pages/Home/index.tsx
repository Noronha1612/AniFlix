import React from 'react';

import { BackgroundImg, Container } from './styles';

import Header from './Components/Header';

const Home: React.FC = () => {
    return (
        <Container>
            <BackgroundImg />
            
            <Header />
        </Container>
    );
}

export default Home;