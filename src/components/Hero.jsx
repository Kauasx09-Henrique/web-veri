import styles from './styles/hero.module.css';
import veriSymbol from '/logos/logo-veri-redonda.svg';

const WHATSAPP = '5500000000000';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação na Veri Odontologia.')}`;

const mask = (src) => ({ WebkitMaskImage: `url(${src})`, maskImage: `url(${src})` });

function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.bg} aria-hidden="true" />
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
                <div className={styles.inner}>
                    <span className={styles.eyebrow}>Odontologia estética · Cidade/UF</span>

                    <h1 className={styles.title}>
                        Seu sorriso, <em>do seu jeito.</em>
                    </h1>

                    <p className={styles.subtitle}>
                        Na Veri, cada tratamento começa ouvindo você. Planejamento cuidadoso, técnica precisa
                        e resultados que parecem seus — só que mais confiantes.
                    </p>

                    <div className={styles.actions}>
                        <a href={waLink} target="_blank" rel="noreferrer" className={styles.ctaButton}>
                            Agendar avaliação
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                        <a href="#tratamentos" className={styles.secondary}>Ver tratamentos</a>
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
