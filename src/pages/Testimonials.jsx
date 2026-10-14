import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/testimonials.module.css';

const GOOGLE_URL = 'https://maps.app.goo.gl/5gxwToZZuzgBTsZD7';

const reviews = [
    { id: 1, name: 'Nathália Guimarães', text: 'Quero deixar meu feedback positivo pra clínica. Fiz a retirada dos meus sisos e foi super tranquilo. A cirurgia foi bem feita, são excelentes profissionais.' },
    { id: 2, name: 'Maronita Almeida Almeida', text: 'Atendimento excelente, atenciosos, ótimos profissionais! Meu filho extraiu os 4 cisos onde 2 estavam na horizontal (impactado) e foi um sucesso está tendo uma excelente recuperação, recomendo!' },
    { id: 3, name: 'Kétury Christiane', text: 'Ótimos profissionais, com explicação incrível, muito prestativos, amei o atendimento, tudo limpo e organizado.' },
    { id: 4, name: 'Rose Gomes', text: 'Profissionais competentes e super dedicados, são muito compreensíveis e transmitem confiança. Sou muito ansiosa e nevosa , a tranquilidade que eles passam com um carinho e cuidado , me fizeram perder o medo que sentia de procedimentos dentários.' },
    { id: 5, name: 'Silezia soares de abreu duarte', text: 'Excelente atendimento, profissionais muito bem preparados, atenciosos, educados, éticos, percebi foco na qualidade do serviço prestado. Recomendo.' },
    { id: 6, name: 'Marina Mello', text: 'Ótimo atendimento! Sempre tive muito medo de dentista, mas os profissionais me deixaram muito tranquila e me trataram tão bem que nem me preocupei!! Profissionais atenciosos e cuidadosos. Com certeza vou voltar.' },
    { id: 7, name: 'Isabella Furtado', text: 'Atendimento maravilhoso' },
    { id: 8, name: 'Regina Das Dores', text: 'Ótimo atendimento e profissionais competentes! Super recomendo!' },
    { id: 9, name: 'Cassio Henrique', text: 'CLÍNICA EXCELENTE ! Profissionais de extrema competencia e qualidade .' },
    { id: 10, name: 'israel30k@hotmail.com grandao', text: 'Muito boa excelente atendimento ótimos profissionais parabéns' },
];

const avatarColors = ['#5C6BC0', '#26A69A', '#EF6C00', '#8E24AA', '#43A047', '#D81B60', '#00897B', '#6D4C41', '#3949AB', '#F4511E'];

const Star = () => (
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
);

const Stars = ({ className }) => (
    <span className={className} aria-label="5 estrelas">
        {[...Array(5)].map((_, i) => <Star key={i} />)}
    </span>
);

const GoogleIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const VerifiedIcon = () => (
    <svg viewBox="0 0 24 24" className="verified" aria-label="Verificado">
        <circle cx="12" cy="12" r="10" fill="#1A73E8" />
        <path d="M7.5 12.5l3 3 6-6.5" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ease = [0.2, 0.7, 0.2, 1];

function Testimonials() {
    const [visible, setVisible] = useState(6);

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.9, ease }}
                    className={styles.header}
                >
                    <div className={styles.headerMain}>
                        <span className={styles.tag}>Depoimentos</span>
                        <h2 className={styles.title}>
                            Quem já transformou o sorriso <em>conta como foi.</em>
                        </h2>
                    </div>

                    <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className={styles.summary}>
                        <span className={styles.summaryTop}>
                            <GoogleIcon className={styles.summaryLogo} />
                            <span className={styles.summaryLabel}>Avaliações</span>
                        </span>
                        <span className={styles.summaryRow}>
                            <strong className={styles.summaryScore}>5,0</strong>
                            <Stars className={styles.starsLarge} />
                        </span>
                        <span className={styles.summaryCount}>Com base em +100 avaliações</span>
                    </a>
                </motion.div>

                <div className={styles.masonry}>
                    <AnimatePresence initial={false}>
                        {reviews.slice(0, visible).map((review, index) => (
                            <motion.article
                                key={review.id}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.6, ease, delay: (index % 3) * 0.08 }}
                                className={styles.card}
                            >
                                <div className={styles.cardHeader}>
                                    <span className={styles.avatar} style={{ background: avatarColors[index % avatarColors.length] }} aria-hidden="true">
                                        {review.name.charAt(0).toUpperCase()}
                                    </span>
                                    <span className={styles.patientInfo}>
                                        <span className={styles.patientName}>{review.name}</span>
                                        <span className={styles.patientMeta}>Avaliação no Google</span>
                                    </span>
                                    <GoogleIcon className={styles.cardLogo} />
                                </div>

                                <div className={styles.cardRating}>
                                    <Stars className={styles.starsSmall} />
                                    <VerifiedIcon />
                                </div>

                                <p className={styles.text}>{review.text}</p>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </div>

                <div className={styles.actionArea}>
                    {visible < reviews.length ? (
                        <button type="button" onClick={() => setVisible((v) => Math.min(v + 3, reviews.length))} className={styles.loadMoreBtn}>
                            Ver mais depoimentos
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        </button>
                    ) : (
                        <a href={GOOGLE_URL} target="_blank" rel="noreferrer" className={styles.loadMoreBtn}>
                            Ver todas no Google
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                                <path d="M7 17L17 7M8 7h9v9" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
