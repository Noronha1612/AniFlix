import React from 'react';
import { FaLongArrowAltDown } from 'react-icons/fa';

import Tv from '../../assets/tv.png';
import Mobile from '../../assets/mobile.jpg';

import { Container, FirstSection, ContentContainer, FaqContainer, SelectLangFooter } from './styles';

import Header from './Components/Header';
import ContentDescription from './Components/ContentDescription';
import FaqContent from './Components/FaqContent';
import RegisterField from './Components/RegisterField';

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

                        <RegisterField />
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

            <ContentContainer imageOnLeft>
                <section className="image-wrapper download-demo">
                    <div className="download-wrapper">
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
                    </div>
                </section>
                
                <ContentDescription
                    imageOnLeft
                    title="Baixe s??ries para assistir offline."
                    titleDescription="Salve seus t??tulos favoritos e sempre tenha algo para assistir."
                />
            </ContentContainer>
            
            <ContentContainer>
                <ContentDescription 
                    title="Assista quando quiser."
                    titleDescription="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
                />

                <section className="tv-animation many-devices">
                    <div className="animation-wrapper">
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
                    </div>
                </section>
            </ContentContainer>
        
            <FaqContainer>
                <h1>Perguntas frequentes</h1>

                <ul>
                    <FaqContent title="O que ?? AniWatch?" >
                        O AniWatch ?? um servi??o de transmiss??o online que oferece uma ampla variedade de animes, filmes sobre animes e document??rios sobre animes premiados em milhares de aparelhos conectados ?? internet.
                        <br/><br/>
                        Voc?? pode assistir a quantos animes quiser, quando e onde quiser, sem comerciais ??? tudo por um pre??o mensal bem acess??vel. Aqui voc?? sempre encontra novidades. A cada semana, adicionamos novas s??ries e filmes.
                    </FaqContent>
                    <FaqContent title="Quanto custa o AniWatch?" >
                        Assista ao AniWatch no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal ??nica. Os planos variam de R$21,90 a R$45,90 por m??s. Sem contrato nem taxas extras.
                    </FaqContent>
                    <FaqContent title="Onde posso assistir?" >
                        Assista onde quiser, o quanto quiser e em um n??mero ilimitado de aparelhos. Fa??a login com sua conta AniWatch em aniwatch.com para come??ar a assistir no computador ou em qualquer aparelho conectado ?? Internet compat??vel com o aplicativo AniWatch, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.
                        <br/><br/>
                        Voc?? tamb??m pode baixar a sua s??rie favorita com o aplicativo AniWatch para iOS, Android ou Windows 10. Use downloads para levar o AniWatch para onde quiser sem precisar de conex??o com a Internet. Leve o AniWatch com voc?? para qualquer lugar.
                    </FaqContent>
                    <FaqContent title="Como fa??o para cancelar?" >
                        O AniWatch ?? flex??vel. N??o h?? contratos nem compromissos. Voc?? pode cancelar a sua conta na internet com apenas dois cliques. N??o h?? taxa de cancelamento ??? voc?? pode come??ar ou encerrar a sua assinatura a qualquer momento.
                    </FaqContent>
                    <FaqContent title="O que eu posso assistir no AniWatch?" >
                        O AniWatch tem um grande cat??logo de animes, document??rios e originais AniWatch premiados e muito mais. Assista o quanto quiser, quando quiser.
                    </FaqContent>
                </ul>
            
                <div className="sign-wrapper">
                    <h6>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h6>
                    
                    <RegisterField />
                </div>
            </FaqContainer>
        
            <footer>
                <div className="content-wrapper">

                    <p>D??vidas? Ligue 0800-987-6543</p>

                    <ul className="link-box">
                        <li><span>Perguntas frequentes</span></li>
                        <li><span>Centro de ajuda</span></li>
                        <li><span>Conta</span></li>
                        <li><span>Imprensa</span></li>
                        <li><span>Rela????es com investidores</span></li>
                        <li><span>Carreiras</span></li>
                        <li><span>Resgatar cart??o pr??-pago</span></li>
                        <li><span>Comprar cart??o pr??-pago</span></li>
                        <li><span>Formas de assistir</span></li>
                        <li><span>Termo de uso</span></li>
                        <li><span>Privacidade</span></li>
                        <li><span>Prefer??ncias de cookies</span></li>
                        <li><span>Informa????es corporativas</span></li>
                        <li><span>Entre em contato</span></li>
                        <li><span>Teste de velocidade</span></li>
                        <li><span>Avisos legais</span></li>
                        <li><span>Originais AniWatch</span></li>
                    </ul>

                    <div className="select-wrapper">
                        <SelectLangFooter>
                            <option value="pt">Portugu??s</option>
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