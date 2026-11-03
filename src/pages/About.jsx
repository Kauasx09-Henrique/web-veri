import styles from './styles/about.module.css';

const WHATSAPP = '5561998802777';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá, Dra. Isabela! Gostaria de agendar uma conversa.')}`;

const areas = [
    ['Cirurgia bucomaxilofacial',],
    [' Disfunção temporomandibular e Dor orofacial'],
    [' Implantodontia'],
    [' Estomatologia'],
    ['Ortodontia'],
    ['Clínico geral'],
    [' Harmonização  orofacial'],
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
                            <span>CRO-DF 4302</span>
                        </figcaption>
                    </figure>

                    <div className={styles.text}>
                        <div className={styles.bio}>
                            <h3 className={styles.title}>
                                Uma odontologia que vai  <em>além do procedimento </em>
                            </h3>
                            <p className={styles.description}>
                                Na Veri, acreditamos que um bom tratamento começa antes mesmo da primeira intervenção: na escuta, na compreensão de cada necessidade e em uma avaliação criteriosa que permita indicar o caminho mais adequado para cada paciente.                            </p>
                            <p className={styles.description}>
                                À frente da clínica, Isabela Sena e Leonardo Magri unem formação especializada, experiência clínica e dedicação à prática baseada em evidências científicas. Essa visão se traduz em uma odontologia que valoriza o planejamento, a precisão técnica, a transparência em cada etapa e o cuidado humanizado.
                            </p>
                            <p className={styles.description}>
                                Nosso propósito é oferecer cuidado de excelência, com responsabilidade, transparência e proximidade. Para que você se sinta seguro não apenas com o tratamento escolhido, mas também com todo o processo.
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
