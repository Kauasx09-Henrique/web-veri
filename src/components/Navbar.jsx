import { useState, useEffect } from 'react';
import styles from './styles/Navbar.module.css';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={styles.headerWrapper}>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <a href="#inicio" className={styles.logo} onClick={closeMenu}>
                    <span className={styles.logoVeri}>veri</span>
                    <span className={styles.logoOdonto}>ODONTOLOGIA</span>
                </a>

                <div className={`${styles.menuOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
                    <div className={styles.navLinks}>
                        <a href="#inicio" onClick={closeMenu}>Início</a>
                        <a href="#sobre" onClick={closeMenu}>Sobre</a>
                        <a href="#servicos" onClick={closeMenu}>Serviços</a>
                        <a href="#depoimentos" onClick={closeMenu}>Depoimentos</a>
                        <a href="#faq" onClick={closeMenu}>FAQ</a>
                    </div>
                </div>

                <div className={styles.rightActions}>
                    <a href="https://wa.me/5561998802777" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                        Agendar
                    </a>
                    <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                        <span className={`${styles.line} ${isMobileMenuOpen ? styles.line1 : ''}`}></span>
                        <span className={`${styles.line} ${isMobileMenuOpen ? styles.line2 : ''}`}></span>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;