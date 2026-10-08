import styles from './styles/hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    Veri Odontologia
                </h1>

                <p className={styles.subtitle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <button className={styles.ctaButton}>
                    Lorem Ipsum
                </button>
            </div>
        </section>
    );
}

export default Hero;