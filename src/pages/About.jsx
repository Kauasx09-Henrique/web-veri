import styles from './styles/about.module.css';

function About() {
    return (
        <section id="sobre" className={styles.about}>
            <div className={styles.container}>

                <div className={styles.leftColumn}>
                    <span className={styles.tag}>SOBRE NÓS</span>
                    <h2 className={styles.title}>VERI ODONTOLOGIA</h2>
                    <span className={styles.subtitle}>Cirurgia Bucomaxilofacial e Harmonização Orofacial</span>

                    <p className={styles.description}>
                        A Veri Odontologia atua de forma dedicada à cirurgia estética e funcional da face, com foco em procedimentos que buscam o equilíbrio, a saúde e a harmonia do contorno facial.
                    </p>
                    <p className={styles.description}>
                        Nossa prática clínica é direcionada ao atendimento individualizado. Contamos com dois cirurgiões especialistas com formação de excelência, oferecendo desde extrações complexas e cirurgias ortognáticas até harmonização facial, buscando sempre resultados naturais e a preservação da identidade de cada paciente.
                    </p>
                </div>

                <div className={styles.centerColumn}>
                    <div className={styles.imageFade}></div>
                    <img src="/veris-sobre.png" alt="Especialistas Veri Odontologia" className={styles.image} />
                </div>

                <div className={styles.rightColumn}>
                    <h3 className={styles.listTitle}>Áreas de atuação</h3>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>01</span>
                        <div className={styles.listContent}>
                            <h4>Cirurgia Bucomaxilofacial</h4>
                            <p>Extração de sisos, cirurgia ortognática, trauma de face e reconstruções ósseas.</p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>02</span>
                        <div className={styles.listContent}>
                            <h4>Harmonização Orofacial</h4>
                            <p>Botox, preenchimento com ácido hialurônico e bioestimuladores de colágeno.</p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>03</span>
                        <div className={styles.listContent}>
                            <h4>Disfunção Temporomandibular</h4>
                            <p>Tratamentos focados na DTM, dores orofaciais e cirurgias da articulação.</p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>04</span>
                        <div className={styles.listContent}>
                            <h4>Implantodontia e Estética</h4>
                            <p>Implantes dentários, implantes faciais e mentoplastia.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;