import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/callToAction.module.css';

const WHATSAPP = '5500000000000';
const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de agendar uma consulta na Veri Odontologia.')}`;

const images = ['/casal-contato.png'];

const contacts = [
    { label: 'WhatsApp', value: '(00) 00000-0000', href: waLink },
    { label: 'Instagram', value: '@veriodontologia', href: 'https://instagram.com/veriodontologia' },
    { label: 'Endereço', value: 'Rua Exemplo, 000 — Cidade/UF', href: 'https://maps.google.com/?q=Veri+Odontologia' },
];

const ease = [0.2, 0.7, 0.2, 1];

function CallToAction() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const timer = setInterval(() => setCurrent((i) => (i + 1) % images.length), 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="contato" className={styles.section}>
            <div className={styles.glow} aria-hidden="true" />

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, ease }}
                    className={styles.content}
                >
                    <span className={styles.tag}>Agende sua avaliação</span>

                    <h2 className={styles.title}>
                        O sorriso que você quer <em>começa com uma conversa.</em>
                    </h2>

                    <p className={styles.subtitle}>
                        Na primeira consulta, entendemos o que você deseja e desenhamos juntos o plano ideal para o seu sorriso — sem pressa e sem compromisso.
                    </p>

                    <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Agendar consulta
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                            <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1.1, ease, delay: 0.15 }}
                    className={styles.imageContainer}
                >
                    <div className={styles.arch} aria-hidden="true" />
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={current}
                            src={images[current]}
                            alt="Pacientes sorrindo"
                            className={styles.image}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>
                </motion.div>
            </div>

            <div className={styles.contacts}>
                {contacts.map((c, i) => (
                    <motion.a
                        key={c.label}
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contact}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease, delay: 0.1 * i }}
                    >
                        <span className={styles.contactLabel}>{c.label}</span>
                        <span className={styles.contactValue}>
                            {c.value}
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                                <path d="M7 17L17 7M8 7h9v9" />
                            </svg>
                        </span>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}

export default CallToAction;
