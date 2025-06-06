import styles from './services.module.css';

export function Services() {
 
  return (
    <main className={styles.services}>
      <div className='container'>
        <h1 id='home_services'>Conheça nossos serviços</h1>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div id='baixo_relevo' className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Baixo Relevo</h2>
            <p>A gravação em baixo relevo é um processo que cria marcas ou desenhos em uma superfície, removendo uma fina camada do material para formar um efeito de profundidade. Diferente do alto relevo, onde as formas se projetam para fora, no baixo relevo as áreas gravadas ficam abaixo do nível da superfície, criando um efeito sutil e elegante. Esse método é amplamente utilizado para personalizar produtos produzidos em couro e courino, conferindo-lhes durabilidade e sofisticação estética.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div id='dtf_co2' className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>DTF-CO2</h2>
            <p>A técnica DTF (Direct to Film) com adesivo é um método de personalização gráfica que imprime imagens em alta definição em um filme especial com tintas pigmentadas e pó adesivo termofusível. Após aquecimento, o adesivo é ativado para transferência. Seu diferencial é a aplicação em superfícies não têxteis (vidro, metal, plástico, madeira), ampliando a personalização para brindes, embalagens e decoração. A imagem transferida mantém fidelidade de cores, resistência, flexibilidade e durabilidade. É uma solução versátil, com acabamento profissional e aplicação simplificada, ideal para produções em pequena e média escala.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div id='laser' className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Laser</h2>
            <p>A gravação a laser é um processo de marcação de alta precisão que utiliza um feixe de laser para corrosão da superfície de um material, criando marcas permanentes. Essa técnica é amplamente utilizada em diversos materiais como metal, vidro e madeira, devido à sua capacidade de produzir resultados detalhados e permanentes</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div id='manuseio' className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Manuseio</h2>
            <p>O manuseio geral oferecido é um processo de desembalagem, conferencia, embalagem de forma que o cliente pode solicitar um manuseio especial, como montagem de kits. Se trata de um processo minucioso e focado em atender da melhor maneira a demanda da sua ação promocional.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div id='silk_screen' className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Silk Screen</h2>
            <p>Um método tradicional e altamente eficaz. Neste processo, a tinta é pressionada através de uma tela esticada sobre o objeto, criando um design durável e de alta qualidade. Aplicação em camisetas, bonés, sacolas e uma variedade de materiais promocionais, a serigrafia é particularmente recomendada para grandes tiragens.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div id='sublimacao' className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Sublimação</h2>
            <p>Se trata de um processo de transferência de gravação de uma superfície para outra, resultando em uma impressão de alta qualidade. Amplamente utilizado em canecas de procelana. A sublimação oferece uma reprodução nítida de designs complexos e detalhados.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div id='tampografia' className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Tampografia</h2>
            <p>A tinta é transferida de um clichê para o produto através de um tampão de silicone, resultando em detalhes nítidos mesmo em superfícies irregulares. Amplamente empregada em brindes corporativos como canetas, produtos eletrônicos e itens de escritório, a Tampografia oferece uma personalização durável e de qualidade.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div id='transfer' className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Transfer</h2>
            <p>O design é impresso em um papel especial que posteriormente, é transferido para o brinde por meio de calor e pressão. Essa técnica oferece uma reprodução precisa de detalhes e cores, sendo ideal para designs variados. Ampla aplicação em camisetas, bonés, bolsas e uma variedade de produtos promocionais.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>
      </div>  
    </main> 
  )
}