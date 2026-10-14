import styles from './styles/about.module.css';

const WHATSAPP = '5500000000000';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, Dra. Isabela! Gostaria de agendar uma conversa.')}`;

const areas = [
    ['Lentes de contato dental', 'Facetas ultrafinas que corrigem cor, forma e proporção.'],
    ['Clareamento', 'Um branco luminoso, natural e supervisionado.'],
    ['Reabilitação oral', 'Função e estética com planejamento digital.'],
    ['Harmonização orofacial', 'Ajustes sutis que equilibram sorriso e rosto.'],
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
                            <span>loren</span>
                            <span>CRO-UF 00000</span>
                        </figcaption>
                    </figure>

                    <div className={styles.text}>
                        <div className={styles.bio}>
                            <h3 className={styles.title}>
                                loren <em>ipsum</em>
                            </h3>
                            <p className={styles.description}>
                                loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.
                            </p>
                            <p className={styles.description}>
                                loren ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl. Sed euismod, nisl vel tincidunt lacinia, nunc nisl aliquam nunc, eget aliquam nisl nunc vel nisl.
                            </p>
                        </div>

                        <div className={styles.areas}>
                            <span className={styles.listTitle}>Áreas de atuação</span>
                            <div className={styles.grid}>
                                {areas.map(([title, text], i) => (
                                    <div key={title} className={styles.listItem}>
                                        <span className={styles.listNumber}>{String(i + 1).padStart(2, '0')}</span>
                                        <h4>{title}</h4>
                                        <p>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <a href={waLink} target="_blank" rel="noreferrer" className={styles.cta}>
                            Agende uma conversa
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
