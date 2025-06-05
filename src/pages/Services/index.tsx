import styles from './services.module.css';

export function Services() {
  return (
    <main className={styles.services}>
      <div className='container'>
        <h1>Conheça nossos serviços</h1>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Baixo Relevo</h2>
            <p>A gravação em baixo relevo é um processo que cria marcas ou desenhos em uma superfície, removendo uma fina camada do material para formar um efeito de profundidade. Diferente do alto relevo, onde as formas se projetam para fora, no baixo relevo as áreas gravadas ficam abaixo do nível da superfície, criando um efeito sutil e elegante. Esse método é amplamente utilizado para personalizar produtos como joias, troféus, componentes eletrônicos e peças industriais, conferindo-lhes durabilidade e sofisticação estética.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>DTF-CO2</h2>
            <p>Abreviação de “Direct to Film” ou “Direct to Fabric”, é uma tecnologia revolucionária para personalização de tecidos e materiais têxteis. Esta técnica de impressão proporciona resultados de alta qualidade e precisão. Amplamente utilizada na indústria têxtil, a tecnologia DTF é ideal para criar camisetas personalizadas, bonés, bolsas e uma variedade de produtos promocionais exclusivos.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Laiser</h2>
            <p>A gravação a laser é um processo de marcação de alta precisão que utiliza um feixe de laser para vaporizar ou queimar a superfície de um material, criando marcas permanentes. Essa técnica é amplamente utilizada em diversos setores industriais, como automotivo, eletrônico, joalheiro e promocional, devido à sua capacidade de produzir resultados detalhados e duráveis.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Manuseio</h2>
            <p>O manuseio é o ato de manipular, mover ou operar objetos, materiais ou equipamentos, com o objetivo de garantir sua integridade e eficiência durante processos industriais, logísticos ou cotidianos. Envolve ações como movimentação, transporte, armazenamento e disposição adequada de itens, visando evitar danos, perdas e acidentes. No contexto industrial, o manuseio adequado é essencial para otimizar operações, reduzir custos e assegurar a segurança dos trabalhadores.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Silk Screen</h2>
            <p>Um método tradicional e altamente eficaz. Neste processo, a tinta é pressionada através de uma tela esticada sobre o objeto, criando um design durável e de alta qualidade. Aplicação em camisetas, bonés, sacolas e uma variedade de materiais promocionais, a serigrafia é particularmente recomendada para grandes tiragens.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
          <div className={styles.service__item__content__reverse}>
            <div className={styles.line}></div>
            <h2>Sublimação</h2>
            <p>A tinta é transformada em vapor e inserida na superfície do material, resultando em uma impressão de alta qualidade. Amplamente utilizado em camisetas, canecas, squeezes, garrafas e mouse pads. A sublimação oferece uma reprodução nítida de designs complexos e detalhados.</p>
            <div className={styles.line}></div>
          </div>

          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />
        </div>

        <div className={styles.service__item}>
          <img src="https://placehold.co/540x500" alt="Trocar placeholder" />

          <div className={styles.service__item__content}>
            <div className={styles.line}></div>
            <h2>Tampografia</h2>
            <p>A tinta é transferida de um clichê para o produto através de um tampão de silicone, resultando em detalhes nítidos mesmo em superfícies irregulares. Amplamente empregada em brindes corporativos como canetas, produtos eletrônicos e itens de escritório, a Tampografia oferece uma personalização durável e de qualidade.</p>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.service__item}>
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