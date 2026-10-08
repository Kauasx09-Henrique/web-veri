import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/testimonials.module.css';

function Testimonials() {
    const [visibleReviews, setVisibleReviews] = useState(6);

    const realReviews = [
        {
            id: 1,
            name: "Nathália Guimarães",
            procedure: "Paciente Veri",
            text: "Quero deixar meu feedback positivo pra clínica. Fiz a retirada dos meus sisos e foi super tranquilo. A cirurgia foi bem feita, são excelentes profissionais.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Nathalia+Guimaraes&background=a67c68&color=fff"
        },
        {
            id: 2,
            name: "Maronita Almeida Almeida",
            procedure: "Paciente Veri",
            text: "Atendimento excelente, atenciosos, ótimos profissionais! Meu filho extraiu os 4 cisos onde 2 estavam na horizontal (impactado) e foi um sucesso está tendo uma excelente recuperação, recomendo!",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Maronita+Almeida&background=a67c68&color=fff"
        },
        {
            id: 3,
            name: "Kétury Christiane",
            procedure: "Paciente Veri",
            text: "Ótimos profissionais, com explicação incrível, muito prestativos, amei o atendimento, tudo limpo e organizado.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Ketury+Christiane&background=a67c68&color=fff"
        },
        {
            id: 4,
            name: "Rose Gomes",
            procedure: "Paciente Veri",
            text: "Profissionais competentes e super dedicados, são muito compreensíveis e transmitem confiança. Sou muito ansiosa e nevosa , a tranquilidade que eles passam com um carinho e cuidado , me fizeram perder o medo que sentia de procedimentos dentários.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Rose+Gomes&background=a67c68&color=fff"
        },
        {
            id: 5,
            name: "Silezia soares de abreu duarte",
            procedure: "Paciente Veri",
            text: "Excelente atendimento, profissionais muito bem preparados, atenciosos, educados, éticos, percebi foco na qualidade do serviço prestado. Recomendo.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Silezia+Soares&background=a67c68&color=fff"
        },
        {
            id: 6,
            name: "Marina Mello",
            procedure: "Paciente Veri",
            text: "Ótimo atendimento! Sempre tive muito medo de dentista, mas os profissionais me deixaram muito tranquila e me trataram tão bem que nem me preocupei!! Profissionais atenciosos e cuidadosos. Com certeza vou voltar.",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Marina+Mello&background=a67c68&color=fff"
        },
        {
            id: 7,
            name: "Isabella Furtado",
            procedure: "Paciente Veri",
            text: "Atendimento maravilhoso",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Isabella+Furtado&background=a67c68&color=fff"
        },
        {
            id: 8,
            name: "Regina Das Dores",
            procedure: "Paciente Veri",
            text: "Ótimo atendimento e profissionais competentes! Super recomendo!",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Regina+Das+Dores&background=a67c68&color=fff"
        },
        {
            id: 9,
            name: "Cassio Henrique",
            procedure: "Paciente Veri",
            text: "CLÍNICA EXCELENTE ! Profissionais de extrema competencia e qualidade .",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Cassio+Henrique&background=a67c68&color=fff"
        },
        {
            id: 10,
            name: "israel30k@hotmail.com grandao",
            procedure: "Paciente Veri",
            text: "Muito boa excelente atendimento ótimos profissionais parabéns",
            rating: 5,
            image: "https://ui-avatars.com/api/?name=Israel&background=a67c68&color=fff"
        }
    ];

    const loadMore = () => {
        setVisibleReviews(prev => Math.min(prev + 3, realReviews.length));
    };

    const Star = () => (
        <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    const QuoteIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.quoteIconLarge}>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    );

    const GoogleIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.googleIcon}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
    );

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={styles.container}>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>
                        Quem já transformou o sorriso conta como foi.
                    </h2>

                    <div className={styles.ratingOverview}>
                        <div className={styles.ratingScore}>5,0</div>
                        <div className={styles.ratingDetails}>
                            <div className={styles.starsGroup}>
                                {[...Array(5)].map((_, i) => <Star key={i} />)}
                            </div>
                            <div className={styles.ratingText}>
                                <span>+100</span> avaliações no Google
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.masonry}>
                    <AnimatePresence>
                        {realReviews.slice(0, visibleReviews).map((review, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                key={review.id}
                                className={styles.card}
                            >
                                <QuoteIcon />

                                <p className={styles.text}>{review.text}</p>

                                <div className={styles.patient}>
                                    <img src={review.image} alt={review.name} className={styles.avatar} referrerPolicy="no-referrer" />
                                    <div className={styles.patientInfo}>
                                        <h4 className={styles.patientName}>{review.name}</h4>
                                        <div className={styles.patientMeta}>
                                            <div className={styles.metaStars}>
                                                {[...Array(Math.floor(review.rating))].map((_, i) => <Star key={i} />)}
                                            </div>
                                            <div className={styles.googleText}>
                                                <GoogleIcon /> Google
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {visibleReviews < realReviews.length && (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={styles.actionArea}
                    >
                        <button onClick={loadMore} className={styles.loadMoreBtn}>
                            Ver mais depoimentos
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </motion.div>
                )}

            </div>
        </section>
    );
}

export default Testimonials;