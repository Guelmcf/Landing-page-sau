import { useState } from 'react';
import './clients.css';

const reviews = [
    {
        stars: 5,
        text: '"Pontualidade impecável e qualidade excepcional. A equipe está muito mais satisfeita desde que começamos o fornecimento."',
        name: 'Carlos Silva',
        company: 'Agatha Vigilância',
        initial: 'C',
        avatarClass: 'cl-avatar--1',
    },
    {
        stars: 5,
        text: '"Melhor decisão que tomamos para o bem-estar dos nossos colaboradores. Refeições frescas, saborosas e sempre no horário."',
        name: 'Fernanda Rocha',
        company: 'Tech Solutions BH',
        initial: 'F',
        avatarClass: 'cl-avatar--2',
    },
    {
        stars: 5,
        text: '"Atendimento personalizado e cardápio variado. Os funcionários adoraram a mudança. Recomendo sem hesitar."',
        name: 'Ricardo Mendes',
        company: 'Construtora Mendes',
        initial: 'R',
        avatarClass: 'cl-avatar--3',
    },
    {
        stars: 5,
        text: '"Desde que contratamos o serviço, o absenteísmo caiu e o ânimo no escritório aumentou visivelmente."',
        name: 'Ana Paula Lima',
        company: 'Lima Contabilidade',
        initial: 'A',
        avatarClass: 'cl-avatar--4',
    },
    {
        stars: 5,
        text: '"Flexibilidade no cardápio e preço justo. Exatamente o que precisávamos para nossa equipe de 80 pessoas."',
        name: 'Marcos Oliveira',
        company: 'Grupo Oliveira Logística',
        initial: 'M',
        avatarClass: 'cl-avatar--5',
    },
];

const clientes = [
    { nome: 'Agatha Vigilância', inicial: 'AV', desde: '2024' },
    { nome: 'Maximus Eventos',   inicial: 'ME', desde: '2025' },
    { nome: 'Bravo Catering',    inicial: 'BC', desde: '2023' },
    { nome: 'Pomar Eventos',     inicial: 'PE', desde: '2025' },
    { nome: 'naSala Eventos',    inicial: 'NS', desde: '2025' },
    { nome: 'AllStar Tenders',   inicial: 'AT', desde: '2024' },
];

function Clientes() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
    const next = () => setCurrent((c) => (c + 1) % reviews.length);

    const visible = [0, 1, 2].map((i) => reviews[(current + i) % reviews.length]);

    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="cl-container" id="nossos-clientes">

            <h2 className="cl-titulo" data-reveal>Empresas que confiam em nós</h2>
            <p className="cl-subtitulo" data-reveal data-reveal-delay="50">
                Dezenas de empresas já transformaram a alimentação de seus colaboradores
            </p>

            {/* CARROSSEL */}
            <div className="cl-carousel" data-reveal data-reveal-delay="100">
                <button className="cl-carousel-btn" onClick={prev} aria-label="Review anterior">
                    &#8249;
                </button>

                <div className="cl-reviews-track">
                    {visible.map((r, i) => (
                        <div
                            className={`cl-review-card${i === 1 ? ' cl-review-card--center' : ''}`}
                            key={r.name}
                        >
                            <div
                                className="cl-review-stars"
                                aria-label={`${r.stars} estrelas`}
                            >
                                {'⭐'.repeat(r.stars)}
                            </div>
                            <p className="cl-review-text">{r.text}</p>
                            <div className="cl-review-author">
                                <div className={`cl-review-pfp ${r.avatarClass}`}>
                                    {r.initial}
                                </div>
                                <div className="cl-review-info">
                                    <p className="cl-review-name">{r.name}</p>
                                    <p className="cl-review-company">{r.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="cl-carousel-btn" onClick={next} aria-label="Próximo review">
                    &#8250;
                </button>
            </div>

            {/* DOTS */}
            <div className="cl-dots" role="tablist" aria-label="Navegação de reviews">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        className={`cl-dot${i === current ? ' cl-dot--active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Ir para review ${i + 1}`}
                        aria-current={i === current ? 'true' : undefined}
                    />
                ))}
            </div>

            {/* GRADE DE CLIENTES */}
            <div className="cl-grid-section" data-reveal data-reveal-delay="150">
                <h3 className="cl-grid-title">Nossos Clientes</h3>
                <div className="cl-grid">
                    {clientes.map((c) => (
                        <div className="cl-client-card" key={c.nome}>
                            <div className="cl-client-logo">{c.inicial}</div>
                            <p className="cl-client-name">{c.nome}</p>
                            <p className="cl-client-since">Desde {c.desde}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <button className="cl-cta" onClick={scrollToForm} data-reveal data-reveal-delay="50">
                Quero fazer parte
            </button>

        </section>
    );
}

export default Clientes;
