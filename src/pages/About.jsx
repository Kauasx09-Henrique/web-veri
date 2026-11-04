import styles from './styles/about.module.css';

const WHATSAPP = '5561998802777';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, Dra. Isabela! Gostaria de agendar uma conversa.')}`;

const areas = [
    'Cirurgia bucomaxilofacial',
    'Disfunção temporomandibular e Dor orofacial',
    'Implantodontia',
    'Estomatologia',
    'Ortodontia',
    'Clínico geral',
    'Harmonização orofacial',
];

function About() {
    return (
        <section id="sobre" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <span className={styles.tag}>Sobre a Veri</span>
                    <h2 className={styles.statement}>
                        Um sorriso bonito é aquele que <em>parece seu.</em>
                    </h2>
                </div>

                <div className={styles.body}>
                    <figure className={styles.figure}>
                        <div className={styles.photoWrap}>
                            <div className={styles.photoBlock} aria-hidden="true" />
                            <img src="/veris-sobre.png" alt="Dra. Isabela Sena" className={styles.image} />
                        </div>
                        <figcaption className={styles.caption}>
                            <span>Dra. Isabela Sena</span>
                            <span>CRO-DF 4302</span>
                        </figcaption>
                    </figure>

                    <div className={styles.text}>
                        <div className={styles.bio}>
                            <h3 className={styles.title}>
                                Dra. Isabela <em>Sena</em>
                            </h3>
                            <p className={styles.description}>
                                Cada plano nasce de uma conversa sem pressa — sobre o que você sente, o que deseja
                                e o que faz sentido para o seu rosto.
                            </p>
                            <p className={styles.description}>
                                Com formação em estética e reabilitação oral, uno técnica precisa e olhar artístico
                                para entregar resultados naturais e duradouros.
                            </p>
                        </div>

                        <a href={waLink} target="_blank" rel="noreferrer" className={styles.cta}>
                            Agende uma conversa
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.areas}>
                    <span className={styles.listTitle}>Áreas de atuação</span>
                    <div className={styles.grid}>
                        {areas.map((title, i) => (
                            <div key={title} className={styles.listItem}>
                                <span className={styles.listNumber}>{String(i + 1).padStart(2, '0')}</span>
                                <h4>{title.replace('temporomandibular', 'temporo\u00ADmandibular').replace('bucomaxilofacial', 'buco\u00ADmaxilo\u00ADfacial')}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
