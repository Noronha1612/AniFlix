import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { FirstSection, Container } from './styles';

import Header from './Components/Header';

const Home: React.FC = () => {
    return (
        <Container>
            <FirstSection>
                <Header />

                <main>
                    <section>
                        <h1>Filmes, séries e muito mais. Sem limites.</h1>
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
        </Container>
    );
}

export default Home;