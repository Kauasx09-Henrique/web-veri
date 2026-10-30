import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles/services.module.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    ['Cirurgia ortognática', 'Correção das alterações ósseas da face, proporcionando equilíbrio facial e funcionalidade.', 'https://i.pinimg.com/736x/eb/5a/b0/eb5ab09d3335a258f6166dbd8ac5e92b.jpg'],
    ['Mentoplastia', 'Remodelação do queixo para harmonizar o perfil e as proporções faciais.', 'https://i.pinimg.com/1200x/0d/b5/df/0db5dffbe8b2add8e905ba83d39d634d.jpg'],
    ['⁠Cervicoplastia', 'Procedimento para melhorar o contorno do pescoço e definir a região abaixo do queixo.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMg-e_0Du8LUcUbOuqmNB8-1W1fR2MK4m2hpdN2SiZKw&s=10'],
    ['Extração de sisos', 'Remoção dos dentes do siso para prevenir ou tratar dores, inflamações e complicações.', 'https://i.pinimg.com/736x/e9/b5/b6/e9b5b6b9dd333a6fe6c17db970a13aa8.jpg'],
    ['Tratamentos de DTM', 'Cuidados para aliviar dores, estalos e desconfortos relacionados à articulação temporomandibular.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwbT-7vmttyQPa74-Ll_ljpJPtAImopF20n4XRUgXz75uC9drJZ7DJ1tA&s=10'],
    ['Cirurgias da ATM', 'Procedimentos para tratar alterações na articulação temporomandibular e recuperar sua função.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtyH4vJ2vIB8v-C4WFfYB7XzASxQDSPnES-5vDGg8UFg&s=10'],
    ['Implantes dentários', 'Reposição de dentes perdidos, devolvendo a função mastigatória e a estética do sorriso.', 'https://i.pinimg.com/736x/f6/94/53/f6945320336e854eeb7813d5a5afa240.jpg'],
    ['Aparelhos ortodônticos', 'Correção do posicionamento dos dentes e da mordida para um sorriso alinhado e saudável.', 'https://i.pinimg.com/736x/24/4e/c3/244ec34afe4e8e45c03b856ac8e83a1a.jpg'],
    ['Harmonização orofacial', 'Procedimentos estéticos que equilibram as proporções faciais e valorizam a beleza natural.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiOpChNO6M-ww4FWGCTZYhMTp9AjM_99FuE04f1AwGRA&s=10'],
];

function Services() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const progressRef = useRef(null);
    const headerRef = useRef(null);

    useLayoutEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                desktop: '(min-width: 969px)',
                reduce: '(prefers-reduced-motion: reduce)',
            },
            ({ conditions }) => {
                if (conditions.reduce) return;

                const track = trackRef.current;
                const cards = gsap.utils.toArray('[data-card]', track);

                gsap.from(headerRef.current.children, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    stagger: 0.1,
                    scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
                });

                if (!conditions.desktop) return;

                const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);

                const scrollTween = gsap.to(track, {
                    x: () => -distance(),
                    ease: 'none',
                    force3D: true,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        start: 'top top',
                        end: () => `+=${distance()}`,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => gsap.set(progressRef.current, { scaleX: self.progress }),
                    },
                });

                cards.forEach((card) => {
                    gsap.fromTo(
                        card,
                        { opacity: 0.2 },
                        {
                            opacity: 1,
                            ease: 'none',
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: scrollTween,
                                start: 'left 100%',
                                end: 'left 70%',
                                scrub: true,
                            },
                        }
                    );
                });
            }
        );

        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener('load', refresh);

        return () => {
            window.removeEventListener('load', refresh);
            mm.revert();
        };
    }, []);

    return (
        <section id="servicos" ref={sectionRef} className={styles.scrollSection}>
            <div className={styles.stickyContainer}>
                <div ref={headerRef} className={styles.header}>
                    <div className={styles.headerMain}>
                        <span className={styles.tag}>Especialidades</span>
                        <h2 className={styles.title}>
                            Nossos <em>tratamentos</em>
                        </h2>
                    </div>
                    <div className={styles.lottie} aria-hidden="true">
                        <DotLottieReact src="logos/animacoes/logo-veri-sem-fundo-animada-clara.json" loop autoplay />
                    </div>
                </div>

                <div ref={trackRef} className={styles.track}>
                    {services.map(([title, text, image], i) => (
                        <article key={title} className={styles.card} data-card>
                            <img src={image} alt="" className={styles.cardImage} loading="lazy" />
                            <span className={styles.cardShade} aria-hidden="true" />
                            <span className={styles.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{title}</h3>
                                <p className={styles.cardDescription}>{text}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.progress} aria-hidden="true">
                    <span ref={progressRef} className={styles.progressBar} />
                </div>
            </div>
        </section>
    );
}

export default Services;
