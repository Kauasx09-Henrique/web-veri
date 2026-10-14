import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import styles from './styles/services.module.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
    ['Lentes de contato dental', 'Cor, forma e proporção, preservando o dente.', 'https://i.pinimg.com/736x/eb/5a/b0/eb5ab09d3335a258f6166dbd8ac5e92b.jpg'],
    ['Clareamento', 'Um branco luminoso e natural.', 'https://i.pinimg.com/736x/04/86/35/048635ee23da15c57c6f081bf3f91ee1.jpg'],
    ['Implantes', 'Segurança e planejamento digital.', 'https://i.pinimg.com/736x/f6/94/53/f6945320336e854eeb7813d5a5afa240.jpg'],
    ['Alinhadores invisíveis', 'Ortodontia discreta e removível.', 'https://i.pinimg.com/736x/bf/9e/69/bf9e698e8cc535152be5dba03b7ebf63.jpg'],
    ['Reabilitação oral', 'Função e estética, juntas.', 'https://i.pinimg.com/736x/05/a5/36/05a536e428d0bbaac7d1626b5ee9bce8.jpg'],
    ['Harmonização orofacial', 'Equilíbrio entre sorriso e rosto.', '/servicos/harmonizacao.jpg'],
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
