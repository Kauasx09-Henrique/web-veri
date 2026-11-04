import styles from './styles/hero.module.css';
import veriSymbol from '/logos/logo-veri-redonda.svg';

const WHATSAPP = '5561998802777';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Veri Odontologia.')}`;

const mask = (src) => ({ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` });

function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.bg} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.inner}>
                    <span className={styles.eyebrow}>Cirurgia bucomaxilofacial • Brasília-DF </span>

                    <h1 className={styles.title}>
                        Cuidado que se percebe, <em> excelência que permanece</em>
                    </h1>

                    <p className={styles.subtitle}>
                        Na Veri, reunimos conhecimento, planejamento e atenção aos detalhes, para oferecer tratamentos odontológicos que respeitam as necessidade de cada paciente.
                    </p>

                    <div className={styles.actions}>
                        <a href={waLink} target="_blank" rel="noreferrer" className={styles.ctaButton}>
                            Agendar avaliação
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                        <a href="#tratamentos" className={styles.secondary} onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Ver tratamentos
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <a href="#avaliacoes" className={styles.rating}>
                    <strong>5,0</strong>
                    <span>
                        <span className={styles.stars}>★★★★★</span>
                        Avaliações no Google
                    </span>
                </a>

                <div className={styles.seal} aria-hidden="true">
                    <svg viewBox="0 0 400 400">
                        <defs>
                            <path id="heroSeal" d="M 200,200 m -150,0 a 150,150 0 1,1 300,0 a 150,150 0 1,1 -300,0" />
                        </defs>
                        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
                        <text fill="currentColor" fontSize="30" letterSpacing="6">
                            <textPath href="#heroSeal" textLength="935">ODONTOLOGIA · VERI · ODONTOLOGIA · VERI ·</textPath>
                        </text>
                    </svg>
                    <div className={styles.sealSymbol} style={mask(veriSymbol)} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
