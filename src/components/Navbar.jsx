import styles from './styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                VERI ODONTOLOGIA
            </div>

            <ul className={styles.navLinks}>
                <li><a href="#inicio">Início</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#depoimentos">Depoimentos</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>

            <a
                href="https://wa.me/5561998802777"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
            >
                Agendar via WhatsApp
            </a>
        </nav>
    );
}

export default Navbar;