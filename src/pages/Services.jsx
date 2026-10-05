import { useEffect, useRef } from 'react';
import styles from './styles/services.module.css';

function Services() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    // Hook para calcular o scroll vertical e transformar em movimento horizontal
    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !trackRef.current) return;

            const section = sectionRef.current;
            const track = trackRef.current;

            // Medidas
            const offsetTop = section.offsetTop;
            const scrollY = window.scrollY;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;

            // Distância que o utilizador já fez scroll dentro da secção
            const scrollInside = scrollY - offsetTop;
            // Distância total de scroll disponível na secção
            const scrollableDistance = sectionHeight - windowHeight;

            // Se estivermos dentro da secção, aplicamos a animação
            if (scrollInside >= 0 && scrollInside <= scrollableDistance) {
                const progress = scrollInside / scrollableDistance;
                // Calcula o máximo que a faixa pode mover para a esquerda
                const maxTranslate = track.scrollWidth - window.innerWidth + 100; // +100 para margem final
                track.style.transform = `translateX(-${progress * maxTranslate}px)`;
            } else if (scrollInside < 0) {
                track.style.transform = `translateX(0px)`;
            } else if (scrollInside > scrollableDistance) {
                const maxTranslate = track.scrollWidth - window.innerWidth + 100;
                track.style.transform = `translateX(-${maxTranslate}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chamada inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        {
            id: 1,
            title: "Cirurgia Bucomaxilofacial",
            description: "Procedimentos complexos incluindo extração de sisos, cirurgia ortognática, reconstruções ósseas e tratamento de traumas da face.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            )
        },
        {
            id: 2,
            title: "Harmonização Orofacial",
            description: "Equilíbrio estético e funcional através de botox, preenchimento com ácido hialurônico e bioestimuladores de colágeno.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
            )
        },
        {
            id: 3,
            title: "Disfunção Temporomandibular",
            description: "Diagnóstico e tratamento de DTM, alívio de dores orofaciais e intervenções na articulação temporomandibular.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
            )
        },
        {
            id: 4,
            title: "Implantodontia",
            description: "Reabilitação oral com implantes dentários de alta tecnologia, além de implantes faciais e mentoplastia.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            )
        }
    ];

    return (
        <section id="servicos" ref={sectionRef} className={styles.scrollSection}>
            <div className={styles.stickyContainer}>
                <div className={styles.header}>
                    <span className={styles.tag}>Especialidades</span>
                    <h2 className={styles.title}>Nossos Tratamentos</h2>
                    <p className={styles.subtitle}>
                        Excelência técnica aliada ao mais alto padrão de cuidado estético.
                    </p>
                </div>

                <div ref={trackRef} className={styles.track}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <button className={styles.cardButton}>
                                Saiba mais
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;