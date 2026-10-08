import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/callToAction.module.css'; // Ajuste o caminho se necessário

function CallToAction() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const professionalImages = [
        "/casal-contato.png",

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % professionalImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [professionalImages.length]);

    const CalendarIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
    );

    const ArrowIcon = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    );

    return (
        <section className={styles.section}>
            <div className={styles.container}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.content}
                >
                    <h2 className={styles.title}>
                        LOREM<br />
                        LOREM IPSUM<br />
                        LOREM
                    </h2>

                    <p className={styles.subtitle}>
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <a href="https://wa.me/seunumerodecelular" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        <CalendarIcon />
                        Agendar consulta
                        <ArrowIcon />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={styles.imageContainer}
                >
                    <div className={styles.glowBackground}></div>

                    <div className={styles.carousel}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={currentIndex}
                                src={professionalImages[currentIndex]}
                                alt="Profissional"
                                className={styles.carouselImage}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </AnimatePresence>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default CallToAction;