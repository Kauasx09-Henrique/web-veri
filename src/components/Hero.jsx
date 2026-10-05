import styles from './styles/hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>Veri Odontologia</h1>
                <p className={styles.subtitle}>Excelência, sofisticação e cuidado em cada detalhe do seu sorriso.</p>
                <button className={styles.ctaButton}>Agendar Consulta</button>
            </div>
        </section>
    );
}

export default Hero;