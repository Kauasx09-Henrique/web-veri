import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './styles/testimonials.module.css';

function Testimonials() {
    useEffect(() => {
        if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
            const script = document.createElement('script');
            script.src = "https://elfsightcdn.com/platform.js";
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={styles.container}>

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className={styles.tag}>Transformações Reais</span>
                        <h2 className={styles.title} style={{ marginTop: '1rem' }}>
                            O sorriso e a confiança de quem confia no nosso trabalho.
                        </h2>
                    </motion.div>
                </div>

                <div className="elfsight-app-3a10d5cb-e9cd-467f-ab14-cb708f4180d6" data-elfsight-app-lazy></div>

            </div>
        </section>
    );
}

export default Testimonials;