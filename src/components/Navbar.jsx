import { useState, useEffect } from 'react';
import styles from './styles/Navbar.module.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const LOGO_LOTTIE = '/logos/animacoes/logo-veri-sem-fundo-animada-clara.json';

const WHATSAPP_LINK = 'https://wa.me/5561998802777';

const links = [
    ['#inicio', 'Início'],
    ['#sobre', 'Sobre'],
    ['#servicos', 'Serviços'],
    ['#depoimentos', 'Depoimentos'],
    ['#contato', 'Contato'],
];

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('#inicio');

    useEffect(() => {
        let lastY = window.scrollY;
        const onScroll = () => {
            const y = window.scrollY;
            setIsScrolled(y > 20);
            setIsHidden(y > 400 && y > lastY);
            lastY = y;
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const sections = links.map(([href]) => document.querySelector(href)).filter(Boolean);
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: '-45% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        const onKey = (e) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    const navClass = [
        styles.navbar,
        isScrolled && styles.scrolled,
        isHidden && !isOpen && styles.hidden,
        isOpen && styles.menuOpen,
    ].filter(Boolean).join(' ');

    return (
        <header className={styles.headerWrapper}>
            <nav className={navClass}>
                <a
                    href="#inicio"
                    className={styles.logo}
                    onClick={close}
                    aria-label="Veri Odontologia"
                >
                    <DotLottieReact
                        src={LOGO_LOTTIE}
                        loop
                        autoplay
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </a>

                <div className={styles.navLinks}>
                    {links.map(([href, label]) => (
                        <a key={href} href={href} className={active === href ? styles.active : ''}>
                            {label}
                        </a>
                    ))}
                </div>

                <div className={styles.rightActions}>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Agendar
                    </a>
                    <button
                        type="button"
                        className={styles.hamburger}
                        onClick={() => setIsOpen((o) => !o)}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                    >
                        <span className={`${styles.line} ${isOpen ? styles.line1 : ''}`} />
                        <span className={`${styles.line} ${isOpen ? styles.line2 : ''}`} />
                    </button>
                </div>
            </nav>

            <div className={`${styles.menuOverlay} ${isOpen ? styles.open : ''}`} aria-hidden={!isOpen}>
                <div className={styles.overlayLinks}>
                    {links.map(([href, label], i) => (
                        <a
                            key={href}
                            href={href}
                            onClick={close}
                            tabIndex={isOpen ? 0 : -1}
                            style={{ transitionDelay: isOpen ? `${0.1 + i * 0.06}s` : '0s' }}
                        >
                            <span>{String(i + 1).padStart(2, '0')}</span>
                            {label}
                        </a>
                    ))}
                </div>
                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.overlayCta}
                    tabIndex={isOpen ? 0 : -1}
                >
                    Agendar consulta
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                </a>
            </div>
        </header>
    );
}

export default Navbar;
