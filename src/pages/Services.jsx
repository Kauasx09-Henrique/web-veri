import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './styles/services.module.css';

gsap.registerPlugin(ScrollTrigger);

function Services() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track = trackRef.current;

            if (!track) return;

            const getScrollDistance = () => {
                return Math.max(
                    0,
                    track.scrollWidth - window.innerWidth
                );
            };

            gsap.to(track, {
                x: () => -getScrollDistance(),
                ease: 'none',

                scrollTrigger: {
                    trigger: sectionRef.current,

                    // Mantém a seção presa enquanto os cards passam
                    pin: true,

                    start: 'top top',

                    // A distância vertical necessária
                    // será proporcional à distância horizontal
                    end: () => `+=${getScrollDistance()}`,

                    // Quanto menor, mais responsivo ao scroll
                    scrub: 0.35,

                    anticipatePin: 1,

                    invalidateOnRefresh: true,

                    // Evita comportamentos estranhos durante resize
                    fastScrollEnd: true,
                }
            });

            // Recalcula depois que tudo estiver renderizado
            ScrollTrigger.refresh();
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);

    const services = [
        {
            id: 1,
            title: "Lorem Ipsum Dolor",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante, sed dignissim sapien.",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14.5 2L2 14.5 9.5 22 22 9.5 14.5 2z" />
                    <path d="M14.5 2L22 9.5" />
                    <line x1="8" y1="16" x2="16" y2="8" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Consectetur Adipiscing",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae justo at mauris tincidunt tincidunt.",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                    <path d="M5 5l1.5 4.5L11 11 6.5 12.5 5 17l-1.5-4.5L2 11l1.5-1.5L5 5z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Vestibulum Posuere",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tincidunt neque vel sapien ultrices, vitae consequat.",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M4 12h3l3-7 4 14 3-7h3" />
                    <circle
                        cx="12"
                        cy="12"
                        r="10"
                        strokeDasharray="4 4"
                    />
                </svg>
            )
        },
        {
            id: 4,
            title: "Integer Sollicitudin",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula, libero vitae tincidunt luctus, lorem metus.",
            icon: (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 9C7 5 9 3 12 3s5 2 5 6c0 3.3-1.7 4.7-3 6H10c-1.3-1.3-3-2.7-3-6z" />
                    <path d="M10 15v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                    <line x1="9" y1="19" x2="15" y2="19" />
                </svg>
            )
        }
    ];

    return (
        <section
            id="servicos"
            ref={sectionRef}
            className={styles.scrollSection}
        >
            <div className={styles.stickyContainer}>

                <div className={styles.header}>
                    <span className={styles.tag}>
                        Especialidades
                    </span>

                    <h2 className={styles.title}>
                        Nossos Tratamentos
                    </h2>

                    <p className={styles.subtitle}>
                        Excelência técnica aliada ao mais alto padrão
                        de cuidado estético.
                    </p>
                </div>

                <div
                    ref={trackRef}
                    className={styles.track}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={styles.card}
                        >
                            <div className={styles.iconWrapper}>
                                {service.icon}
                            </div>

                            <h3 className={styles.cardTitle}>
                                {service.title}
                            </h3>

                            <p className={styles.cardDescription}>
                                {service.description}
                            </p>

                            <button
                                className={styles.cardButton}
                                type="button"
                            >
                                Saiba mais

                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line
                                        x1="5"
                                        y1="12"
                                        x2="19"
                                        y2="12"
                                    />

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