import styles from './home.module.css'
import Laser from '../../assets/laser.svg';
import Transfer from '../../assets/transfer.svg';
import SilkScreen from '../../assets/Silk.svg';
import WhatsApp from '../../assets/whatsapp.svg';
import Map_Icon from '../../assets/map.svg';
import Email_Icon from '../../assets/email.svg';
import Phone_Icon from '../../assets/phone.svg';
import PRW_Logo from '../../assets/LOGO PRW.svg';
import { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';


type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement | null>;
};

export function Home() {

const [activeLink, setActiveLink] = useState<string>('');
  const sectionsRef : SectionRefs = {
    home: useRef<HTMLElement | null>(null),
    about: useRef<HTMLElement | null>(null),
    services: useRef<HTMLElement | null>(null),
    prw_embalagens: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveLink(sectionId);
          if (window.location.hash !== `#${sectionId}`) {
            window.history.pushState(null, '', `#${sectionId}`);
          }
        } else if (activeLink === sectionId) {
          setActiveLink('');
          if (window.location.hash === `#${sectionId}`) {
            window.history.pushState(null, '', ' ');
          }
        }
      });
    },
    { threshold: 0.5 }
  );

  Object.values(sectionsRef).forEach((ref) => {
    if (ref.current) {
      observer.observe(ref.current);
    }
  });

  return () => {
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    });
    observer.disconnect();
  };
}, [activeLink]);

  return (
    <main>
      {/* HOME */}
      <section id="home" ref={sectionsRef.home}>
        <div className={`${styles.container__home} container`} >
          <div className={styles.text__home}>
            <h1>Gravações Personalizadas com Excelência.</h1>
            <p>Transformamos sua marca em presença: gravações com precisão, estilo e qualidade.</p>
            <Link className={styles.button} to="/services">Conheça nossos serviços</Link>
          </div>
          <div className={styles.image__home}>
            <img src="https://placehold.co/561x375" alt="Trocar o Placehold" />
          </div>
        </div>
      </section>

      <div className="divider-1"></div>

      {/* ABOUT */}
      <section id='about' ref={sectionsRef.about}>
        <div className={`${styles.container__about} container`}>
          <div className={styles.image__about}>
            <img src="https://placehold.co/617x412" alt="Trocar o Placehold" />
          </div>

          <div className={styles.text__about}>
            <h2>Sobre Nós</h2>
            <p>Somos uma empresa especializada na comercialização e personalização de produtos promocionais. Nossa equipe é estruturada e comprometida em oferecer qualidade superior por meio das mais diversas técnicas de gravação.</p>
            <br />
            <p>Existem diferentes tipos de gravação para brindes personalizados, e conhecer cada uma delas é essencial para garantir que o resultado final esteja alinhado com sua marca e objetivos de campanha. Fatores como o perfil do público, a identidade visual da sua marca, o tipo de ação promocional e o material do produto influenciam diretamente na escolha da técnica mais apropriada.</p>
            <br />
            <p>A seguir, apresentamos os principais métodos de gravação utilizados em brindes personalizados. Explicamos como cada técnica funciona e indicamos suas aplicações mais comuns, ajudando você a escolher a opção ideal para valorizar sua marca com eficiência e impacto visual.</p>
          </div>
        </div>
      </section>

      <div className="divider-2"></div>

      {/* SERVICES */}
      <section id='services' ref={sectionsRef.services}>
          <div className={`${styles.container__services} container`}>

            <div className={styles.services__title}>
              <Link to="/services/#home_services">
                <h2>Serviços</h2>
              </Link>
              <p>Nosso compromisso vai além da impressão. Desde o primeiro contato até a entrega final, priorizamos a sua experiência, oferecendo qualidade impecável, agilidade e, acima de tudo, a tranquilidade de saber que seu material está em boas mãos.</p>
            </div>

            <div className={styles.services__cards}>
              <Link className={styles.service__card} to="/services/#silk_screen">
                  <img src={SilkScreen} alt="Icon-SilkScreen" className={styles.silk}/>
                  <h3>Silk Screen</h3>
                  <p>Neste processo, a tinta é pressionada através de uma tela esticada sobre o objeto, criando um design durável e de alta qualidade.</p>
              </Link>

              <Link className={styles.service__card} to="/services/#transfer">
                <img src={Transfer} alt="Icon-Transfer" />
                <h3>Transfer</h3>
                <p>O design é impresso em papel especial e transferido para o brinde por calor e pressão, garantindo alta qualidade e durabilidade.</p>
              </Link>

              <Link className={styles.service__card} to="/services/#laser">
                <img src={Laser} alt="Icon-Laser" />
                <h3>Laser</h3>
                <p>A gravação a laser utiliza um feixe de alta precisão para vaporizar ou queimar a superfície de materiais, criando marcas permanentes.</p>
              </Link>
              
            </div>
        </div>
      </section>

      <div className="divider-1"></div>

      {/* PRW EMBALAGENS */}
      <section className={styles.main__PRW} id='prw_embalagens' ref={sectionsRef.prw_embalagens}>
        <div className={`${styles.container__prw} container`}>
          <div className={styles.image__prw}>
            <img src={PRW_Logo} alt="Logo da PRW" />
          </div>
          <div className={styles.text__prw}>
            <h2>Sua Marca, Nossa Arte PRW Embalagens</h2>
            <p>Transforme seus produtos com embalagens de papel personalizadas que refletem a essência da sua marca e encantam seus clientes.</p>
            <Link className={styles.button} to="/PRW_Embalagens">Conheça a PRW Embalagens</Link>
          </div>
        </div>
      </section>

        <div className="divider-2"></div>

      {/* CONTACT */}
      <section id='contact' ref={sectionsRef.contact}>
        <div className={`${styles.container__contact} container`} >

          <div className={styles.contact__text}>
            <h2>Entre em Contato</h2>
            <p>Entre em contato com a PRM TecPrint, queremos tirar suas dúvidas.</p>
            <Link className={styles.button} to='https://wa.me/5511939006543?text=Ol%C3%A1%2C%20quero%20conhecer%20melhor%20os%20seus%20produtos
  ' target="_blank"><img src={WhatsApp} alt="WhatsApp Icon"/> Entrar em contato</Link>
          </div>

          <div className={styles.contact__links}>
            <ul className={styles.contact__list}>
              <li><a href="tel:11939006543"><img src={Phone_Icon} alt="Phone Icon" />11 93900-6543</a></li>
              <li><a href="https://www.google.com.br/maps/place/R.+Jaguarete,+43+-+Casa+Verde,+S%C3%A3o+Paulo+-+SP,+02515-010/@-23.5100064,-46.6553836,3a,75y,152.31h,92.08t/data=!3m7!1e1!3m5!1szxpc9_IiuBRLom6ocJwYYQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-2.079094628692104%26panoid%3Dzxpc9_IiuBRLom6ocJwYYQ%26yaw%3D152.30882097294617!7i16384!8i8192!4m6!3m5!1s0x94cef7e689756f1d:0x9d0c69976f23d709!8m2!3d-23.5102466!4d-46.6552022!16s%2Fg%2F11c4mrgkww?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank"><img src={Map_Icon} alt="Map Icon" />R. Barra Funda, 659 - Barra Funda São Paulo - SP</a></li>
              <li><a href="mailto:comercial@prmgravacoes.com.br?subject=Orçamento&body=Olá, gostaria de fazer um orçamento com vocês!!!"><img src={Email_Icon} alt="Email Icon" />comercial@prmgravacoes.com.br</a></li>
            </ul>
          </div>

        </div>
      </section>
    </main>
  );
}