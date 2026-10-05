import styles from './styles/testimonials.module.css';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Mariana Silva",
            procedure: "Harmonização Orofacial",
            text: "O cuidado e a atenção aos detalhes são impressionantes. Fiz o meu preenchimento e o resultado ficou extremamente natural, preservando a minha identidade como eu queria. Profissionais de excelência."
        },
        {
            id: 2,
            name: "Carlos Eduardo",
            procedure: "Cirurgia Ortognática",
            text: "Um procedimento complexo que me deixava muito inseguro, mas os dois cirurgiões transmitiram-me uma confiança absoluta desde a primeira consulta. O acompanhamento pós-operatório foi fantástico."
        },
        {
            id: 3,
            name: "Ana Luiza Costa",
            procedure: "Tratamento de DTM",
            text: "Sofria com dores na articulação há anos. O diagnóstico preciso e o plano de tratamento individualizado mudaram a minha qualidade de vida. O ambiente da clínica é sofisticado e acolhedor."
        }
    ];

    // Ícone de estrela para as avaliações
    const StarIcon = () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    return (
        <section id="depoimentos" className={styles.testimonialsSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.tag}>Prova Social</span>
                    <h2 className={styles.title}>O que dizem os nossos pacientes</h2>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.stars}>
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                            </div>
                            <p className={styles.text}>"{item.text}"</p>
                            <div className={styles.patientInfo}>
                                <h4 className={styles.name}>{item.name}</h4>
                                <span className={styles.procedure}>{item.procedure}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;