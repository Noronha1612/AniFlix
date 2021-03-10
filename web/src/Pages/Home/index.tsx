import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaLongArrowAltDown } from 'react-icons/fa';

import Tv from '../../assets/tv.png';
import Mobile from '../../assets/mobile.jpg';

import { FirstSection, Container, ContentContainer } from './styles';

import Header from './Components/Header';
import ContentDescription from './Components/ContentDescription';
import { blueText } from '../../styles/variables/colors';

const Home: React.FC = () => {
    return (
        <Container>
            <FirstSection>
                <Header />

                <main>
                    <section>
                        <h1>Animes e muito mais. Sem limites.</h1>
                        <h4>Assista onde quiser. Cancele quando quiser.</h4>
                        <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

                        <div>
                            <input type="text" placeholder="Entrar" />
                            <button>
                                Vamos lá
                                <FiChevronRight className="icon" />
                            </button>
                        </div>
                    </section>
                </main>
            </FirstSection>

            <ContentContainer>
                <ContentDescription 
                    title="Aproveite na TV."
                    titleDescription="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
                />

                <section className="tv-animation image-wrapper">
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
            </ContentContainer>

            <ContentContainer>
                <section className="image-wrapper download-demo">
                    <img src={ Mobile } alt="mobile" />
                    <div className="download-content">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="thumbnail"/>
                        
                        <div className="download-info-wrapper">
                            <h3>Stranger Things</h3>
                            <p>Download em andamento...</p>
                        </div>

                        {/* Icon */}
                        <div className="icon-wrapper">
                            <FaLongArrowAltDown size={22} className="icon" />
                        </div>
                    </div>
                </section>
                
                <ContentDescription 
                    title="Baixe séries para assistir offline."
                    titleDescription="Salve seus títulos favoritos e sempre tenha algo para assistir."
                />
            </ContentContainer>
        </Container>
    );
}

export default Home;