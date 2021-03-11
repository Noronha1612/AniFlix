import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { FaLongArrowAltDown } from 'react-icons/fa';

import Tv from '../../assets/tv.png';
import Mobile from '../../assets/mobile.jpg';

import { FirstSection, Container, ContentContainer, FaqContainer, SelectLangFooter } from './styles';

import Header from './Components/Header';
import ContentDescription from './Components/ContentDescription';
import FaqContent from './Components/FaqContent';

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
                            <input type="text" placeholder="Email" />
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
                    <div className="video-wrapper vw1">
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
            
            <ContentContainer>
                <ContentDescription 
                    title="Assista quando quiser."
                    titleDescription="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
                />

                <section className="tv-animation many-devices">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="thumbnail"/>
                
                    <div className="video-wrapper vw2">
                        <video 
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </section>
            </ContentContainer>
        
            <FaqContainer>
                <h1>Perguntas frequentes</h1>

                <ul>
                    <FaqContent title="O que é AniWatch?" >
                        O AniWatch é um serviço de transmissão online que oferece uma ampla variedade de animes, filmes sobre animes e documentários sobre animes premiados em milhares de aparelhos conectados à internet.
                        <br/><br/>
                        Você pode assistir a quantos animes quiser, quando e onde quiser, sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.
                    </FaqContent>
                    <FaqContent title="Quanto custa o AniWatch?" >
                        Assista ao AniWatch no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$21,90 a R$45,90 por mês. Sem contrato nem taxas extras.
                    </FaqContent>
                    <FaqContent title="Onde posso assistir?" >
                        Assista onde quiser, o quanto quiser e em um número ilimitado de aparelhos. Faça login com sua conta AniWatch em aniwatch.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo AniWatch, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                        <br/><br/>
                        Você também pode baixar a sua série favorita com o aplicativo AniWatch para iOS, Android ou Windows 10. Use downloads para levar o AniWatch para onde quiser sem precisar de conexão com a Internet. Leve o AniWatch com você para qualquer lugar.
                    </FaqContent>
                    <FaqContent title="Como faço para cancelar?" >
                        O AniWatch é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.
                    </FaqContent>
                    <FaqContent title="O que eu posso assistir no AniWatch?" >
                        O AniWatch tem um grande catálogo de animes, documentários e originais AniWatch premiados e muito mais. Assista o quanto quiser, quando quiser.
                    </FaqContent>
                </ul>
            
                <div className="sign-wrapper">
                    <h6>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h6>
                    
                    <div className="input-box">
                            <input type="text" placeholder="Email" />
                            <button>
                                Vamos lá
                                <FiChevronRight className="icon" />
                            </button>
                    </div>
                </div>
            </FaqContainer>
        
            <footer>
                <div className="content-wrapper">

                    <p>Dúvidas? Ligue 0800-987-6543</p>

                    <ul className="link-box">
                        <li><span>Perguntas frequentes</span></li>
                        <li><span>Centro de ajuda</span></li>
                        <li><span>Conta</span></li>
                        <li><span>Imprensa</span></li>
                        <li><span>Relações com investidores</span></li>
                        <li><span>Carreiras</span></li>
                        <li><span>Resgatar cartão pré-pago</span></li>
                        <li><span>Comprar cartão pré-pago</span></li>
                        <li><span>Formas de assistir</span></li>
                        <li><span>Termo de uso</span></li>
                        <li><span>Privacidade</span></li>
                        <li><span>Preferências de cookies</span></li>
                        <li><span>Informações corporativas</span></li>
                        <li><span>Entre em contato</span></li>
                        <li><span>Teste de velocidade</span></li>
                        <li><span>Avisos legais</span></li>
                        <li><span>Originais AniWatch</span></li>
                    </ul>

                    <div className="select-wrapper">
                        <SelectLangFooter>
                            <option value="pt">Português</option>
                            <option value="en">English</option>
                        </SelectLangFooter>     
                    </div>

                    <p className="footer-span">AniWatch Brasil</p>

                </div>
            </footer>
        </Container>
    );
}

export default Home;