import { useState } from 'react';
import './clients.css';

const reviews = [
    {
        stars: 5,
        text: '"Pontualidade impecável e qualidade excepcional. A equipe está muito mais satisfeita desde que começamos o fornecimento."',
        name: 'Carlos Silva',
        company: 'Agatha Vigilância',
        initial: 'C',
        color: '#8B4513',
    },
    {
        stars: 5,
        text: '"Melhor decisão que tomamos para o bem-estar dos nossos colaboradores. Refeições frescas, saborosas e sempre no horário."',
        name: 'Fernanda Rocha',
        company: 'Tech Solutions BH',
        initial: 'F',
        color: '#2E6B3E',
    },
    {
        stars: 5,
        text: '"Atendimento personalizado e cardápio variado. Os funcionários adoraram a mudança. Recomendo sem hesitar."',
        name: 'Ricardo Mendes',
        company: 'Construtora Mendes',
        initial: 'R',
        color: '#1a4a7a',
    },
    {
        stars: 5,
        text: '"Desde que contratamos o serviço, o absenteísmo caiu e o ânimo no escritório aumentou visivelmente."',
        name: 'Ana Paula Lima',
        company: 'Lima Contabilidade',
        initial: 'A',
        color: '#7B2D8B',
    },
    {
        stars: 5,
        text: '"Flexibilidade no cardápio e preço justo. Exatamente o que precisávamos para nossa equipe de 80 pessoas."',
        name: 'Marcos Oliveira',
        company: 'Grupo Oliveira Logística',
        initial: 'M',
        color: '#B85C00',
    },
];

const clientes = [
    { nome: 'Agatha Vigilância', inicial: 'AV', desde: '2024' },
    { nome: 'Maximus Eventos', inicial: 'ME', desde: '2025' },
    { nome: 'Bravo Cathering', inicial: 'BC', desde: '2023' },
    { nome: 'Pomar Eventos', inicial: 'PE', desde: '2025' },
    { nome: 'naSala Eventos', inicial: 'NS', desde: '2025' },
    { nome: 'AllStar Tenders', inicial: 'AT', desde: '2024' },
];

function Clientes() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
    const next = () => setCurrent((c) => (c + 1) % reviews.length);

    // pega 3 reviews ciclicamente
    const visible = [0, 1, 2].map((i) => reviews[(current + i) % reviews.length]);

    return (
        <div className="clients-wrapper" id='nossos-clientes'>
            <h1 className="clients-title">Empresas que confiam em nós</h1>
            <p className="clients-subtitle">
                Dezenas de empresas já transformaram a alimentação de seus colaboradores
            </p>

            {/* CARROSSEL */}
            <div className="carousel-section">
                <button className="carousel-btn" onClick={prev} aria-label="Anterior">
                <span className='carrousel-btn-span'>&#8249;</span>
                </button>

                <div className="reviews-track">
                    {visible.map((r, i) => (
                        <div className={`Review ${i === 1 ? 'Review--center' : ''}`} key={i}>
                            <div className="review-stars">{'⭐'.repeat(r.stars)}</div>
                            <p className="review-text">{r.text}</p>
                            <div className="review-author">
                                <div
                                    className="review-user-pfp"
                                    style={{ backgroundColor: r.color }}
                                >
                                    {r.initial}
                                </div>
                                <div className="review-user-info">
                                    <p className="review-user-name">{r.name}</p>
                                    <p className="review-user-company">{r.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn" onClick={next} aria-label="Próximo">
                    <span className='carrousel-btn-span'>&#8250;</span> 
                </button>
            </div>

            {/* DOTS */}
            <div className="carousel-dots">
                {reviews.map((_, i) => (
                    <button
                        key={i}
                        className={`dot ${i === current ? 'dot--active' : ''}`}
                        onClick={() => setCurrent(i)}
                        aria-label={`Review ${i + 1}`}
                    />
                ))}
            </div>

            {/* GRADE DE CLIENTES */}
            <div className="clients-grid-section">
                <h2 className="clients-grid-title">Nossos Clientes</h2>
                <div className="clients-grid">
                    {clientes.map((c, i) => (
                        <div className="client-card" key={i}>
                            <div className="client-logo">{c.inicial}</div>
                            <p className="client-name">{c.nome}</p>
                            <p className="client-since">Desde {c.desde}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Clientes;