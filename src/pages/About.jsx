import styles from './styles/about.module.css';

function About() {
    return (
        <section id="sobre" className={styles.about}>
            <div className={styles.container}>

                <div className={styles.leftColumn}>
                    <span className={styles.tag}>LOREM IPSUM</span>

                    <h2 className={styles.title}>
                        LOREM IPSUM
                    </h2>

                    <span className={styles.subtitle}>
                        Lorem Ipsum Dolor Sit Amet
                    </span>

                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer posuere, mauris vitae tincidunt tincidunt, justo
                        sapien volutpat libero, vitae consequat nisl augue at
                        sapien.
                    </p>

                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Praesent commodo, nisl vel tincidunt consequat, ipsum
                        lorem facilisis neque, vitae ullamcorper erat purus
                        vitae sapien.
                    </p>
                </div>

                <div className={styles.centerColumn}>
                    <div className={styles.imageFade}></div>

                    <img
                        src="/veris-sobre.png"
                        alt="Lorem Ipsum"
                        className={styles.image}
                    />
                </div>

                <div className={styles.rightColumn}>
                    <h3 className={styles.listTitle}>
                        Áreas de atuação
                    </h3>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>01</span>

                        <div className={styles.listContent}>
                            <h4>Lorem Ipsum Dolor</h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>02</span>

                        <div className={styles.listContent}>
                            <h4>Consectetur Adipiscing</h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>03</span>

                        <div className={styles.listContent}>
                            <h4>Vestibulum Posuere</h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>

                    <div className={styles.listItem}>
                        <span className={styles.listNumber}>04</span>

                        <div className={styles.listContent}>
                            <h4>Integer Sollicitudin</h4>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;