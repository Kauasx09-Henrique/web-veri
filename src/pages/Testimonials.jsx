import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles/testimonials.module.css';

function Testimonials() {
    const [allReviews, setAllReviews] = useState([]);
    const [ratingInfo, setRatingInfo] = useState({ rating: 5.0, total: 0 });
    const [visibleReviews, setVisibleReviews] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    const fallbackReviews = [
        {
            id: 1,
            name: "Mariana Costa",
            procedure: "Extração de Siso",
            text: "A estrutura da clínica no Gama é fantástica. Fui acolhida desde a recepção até o pós-operatório. A cirurgia foi impecável, rápida e sem dor. Recomendo de olhos fechados!",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Lucas Alves",
            procedure: "Tratamento de DTM",
            text: "Anos sentindo dores de cabeça e estalos na mandíbula até encontrar a Dra. Isabela. O protocolo de tratamento foi super claro e hoje tenho uma qualidade de vida que não tinha há muito tempo.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Fernanda Lima",
            procedure: "Harmonização Orofacial",
            text: "O meu maior medo era ficar com um rosto artificial. Eles tiveram um cuidado enorme em preservar os meus traços naturais. O resultado ficou elegante, sofisticado e devolveu a minha autoestima.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=256&auto=format&fit=crop"
        }
    ];

    useEffect(() => {
        const fetchGoogleReviews = async () => {
            try {
                const cacheData = localStorage.getItem('veri_reviews_api');
                const cacheTime = localStorage.getItem('veri_reviews_time_api');
                const now = new Date().getTime();

                if (cacheData && cacheTime && (now - parseInt(cacheTime)) < 86400000) {
                    const parsed = JSON.parse(cacheData);
                    setAllReviews(parsed.reviews);
                    setRatingInfo(parsed.info);
                    setIsLoading(false);
                    return;
                }

                const response = await fetch('/api/reviews');

                if (!response.ok) {
                    throw new Error("Falha na API Serverless");
                }

                const data = await response.json();

                if (data && data.reviews && data.reviews.length > 0) {
                    const formattedReviews = data.reviews.map((r, index) => ({
                        id: index,
                        name: r.authorAttribution?.displayName || "Paciente",
                        text: r.text?.text || r.originalText?.text || "",
                        rating: r.rating || 5,
                        image: r.authorAttribution?.photoUri || "https://ui-avatars.com/api/?name=Paciente&background=a67c68&color=fff",
                        procedure: r.relativePublishTimeDescription || ""
                    })).filter(r => r.rating >= 4);

                    const info = {
                        rating: data.rating || 5.0,
                        total: data.userRatingCount || formattedReviews.length
                    };

                    setAllReviews(formattedReviews);
                    setRatingInfo(info);
                    localStorage.setItem('veri_reviews_api', JSON.stringify({ reviews: formattedReviews, info }));
                    localStorage.setItem('veri_reviews_time_api', now.toString());
                } else {
                    setAllReviews(fallbackReviews);
                    setRatingInfo({ rating: data.rating || 5.0, total: data.userRatingCount || 3 });
                }
            } catch (error) {
                setAllReviews(fallbackReviews);
                setRatingInfo({ rating: 5.0, total: 3 });
            } finally {
                setIsLoading(false);
            }
        };

        fetchGoogleReviews();
    }, []);

    const loadMore = () => {
        setVisibleReviews(prev => Math.min(prev + 3, allReviews.length));
    };

    const StarIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    const QuoteIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.quoteIcon}>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    );

    if (isLoading) {
        return (
            <section id="depoimentos" className={styles.section} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '2px' }}>A carregar avaliações...</div>
            </section>
        );
    }

    return (
        <section id="depoimentos" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.layout}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className={styles.sidebar}
                    >
                        <span className={styles.tag}>Transformações Reais</span>
                        <h2 className={styles.title}>O sorriso e a confiança de quem confia no nosso trabalho.</h2>
                        <p className={styles.subtitle}>
                            Histórias de pacientes que vivenciaram o nosso cuidado focado em excelência, conforto e resultados naturais.
                        </p>

                        <div className={styles.ratingBadge}>
                            <div className={styles.ratingScore}>{ratingInfo.rating}</div>
                            <div className={styles.ratingDetails}>
                                <div className={styles.starsGroup}>
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                                </div>
                                <span>Baseado em {ratingInfo.total} avaliações</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className={styles.grid}>
                        <AnimatePresence>
                            {allReviews.slice(0, visibleReviews).map((review, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    key={review.id}
                                    className={styles.card}
                                >
                                    <div className={styles.cardHeader}>
                                        <div className={styles.avatarWrapper}>
                                            <img src={review.image} alt={review.name} className={styles.avatar} referrerPolicy="no-referrer" />
                                            <div className={styles.avatarGlow}></div>
                                        </div>
                                        <QuoteIcon />
                                    </div>

                                    <div className={styles.stars}>
                                        {[...Array(Math.floor(review.rating))].map((_, i) => <StarIcon key={i} />)}
                                    </div>

                                    <p className={styles.text}>"{review.text}"</p>

                                    <div className={styles.patientInfo}>
                                        <h4 className={styles.name}>{review.name}</h4>
                                        <span className={styles.procedure}>{review.procedure || "Paciente Veri"}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {visibleReviews < allReviews.length && (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={styles.actionArea}
                            >
                                <button onClick={loadMore} className={styles.loadMoreBtn}>
                                    Ver mais relatos
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;