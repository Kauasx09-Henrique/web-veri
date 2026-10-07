import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './styles/services.module.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const track = trackRef.current;

            gsap.to(track, {
                x: () => -(track.scrollWidth - window.innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1.5,
                    end: () => "+=" + track.scrollWidth,
                    invalidateOnRefresh: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const services = [
        {
            id: 1,
            title: "Cirurgia Bucomaxilofacial",
            description: "Procedimentos complexos incluindo extração de sisos, cirurgia ortognática, reconstruções ósseas e tratamento de traumas da face.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2L2 14.5 9.5 22 22 9.5 14.5 2z" />
                    <path d="M14.5 2L22 9.5" />
                    <line x1="8" y1="16" x2="16" y2="8" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Harmonização Orofacial",
            description: "Equilíbrio estético e funcional através de botox, preenchimento com ácido hialurônico e bioestimuladores de colágeno.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                    <path d="M5 5l1.5 4.5L11 11 6.5 12.5 5 17l-1.5-4.5L2 11l1.5-1.5L5 5z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Disfunção Temporomandibular",
            description: "Diagnóstico e tratamento de DTM, alívio de dores orofaciais e intervenções na articulação temporomandibular.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h3l3-7 4 14 3-7h3" />
                    <circle cx="12" cy="12" r="10" strokeDasharray="4 4" />
                </svg>
            )
        },
        {
            id: 4,
            title: "Implantodontia",
            description: "Reabilitação oral com implantes dentários de alta tecnologia, além de implantes faciais e mentoplastia.",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 9C7 5 9 3 12 3s5 2 5 6c0 3.3-1.7 4.7-3 6H10c-1.3-1.3-3-2.7-3-6z" />
                    <path d="M10 15v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                    <line x1="9" y1="19" x2="15" y2="19" />
                </svg>
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