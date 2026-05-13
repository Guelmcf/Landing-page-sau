import { useState } from 'react';
import './cardapio.css';

type Dia = {
    dia: string;
    proteina: string;
    guarnicoes: string;
};

type Semana = {
    label: string;
    dias: Dia[];
};

const semanas: Semana[] = [
    {
        label: 'Semana 1',
        dias: [
            { dia: 'Segunda', proteina: 'Frango Grelhado',  guarnicoes: 'Legumes + Farofa' },
            { dia: 'Terça',   proteina: 'Carne Moída',      guarnicoes: 'Purê de Batata + Cenoura' },
            { dia: 'Quarta',  proteina: 'Frango ao Molho',  guarnicoes: 'Polenta + Legumes' },
            { dia: 'Quinta',  proteina: 'Pernil Grelhado',  guarnicoes: 'Abobrinha + Farofa' },
            { dia: 'Sexta',   proteina: 'Frango Empanado',  guarnicoes: 'Farofa + Fritas' },
        ],
    },
    {
        label: 'Semana 2',
        dias: [
            { dia: 'Segunda', proteina: 'Pernil ao Molho',        guarnicoes: 'Batata + Legumes' },
            { dia: 'Terça',   proteina: 'Frango Curry',            guarnicoes: 'Legumes + Farofa' },
            { dia: 'Quarta',  proteina: 'Almôndegas Bovinas',      guarnicoes: 'Macarrão + Legumes' },
            { dia: 'Quinta',  proteina: 'Paleta Suína Acebolada',  guarnicoes: 'Cenoura/Vagem + Purê' },
            { dia: 'Sexta',   proteina: 'Frango Grelhado',         guarnicoes: 'Farofa + Vinagrete' },
        ],
    },
    {
        label: 'Semana 3',
        dias: [
            { dia: 'Segunda', proteina: 'Frango ao Molho',  guarnicoes: 'Purê de Batata + Legumes' },
            { dia: 'Terça',   proteina: 'Costelinha Suína', guarnicoes: 'Legumes + Farofa' },
            { dia: 'Quarta',  proteina: 'Frango Grelhado',  guarnicoes: 'Macarrão + Legumes' },
            { dia: 'Quinta',  proteina: 'Carne Moída',      guarnicoes: 'Abobrinha + Polenta' },
            { dia: 'Sexta',   proteina: 'Frango Empanado',  guarnicoes: 'Farofa + Fritas' },
        ],
    },
];

const precos = [
    { volume: '10 – 20 refeições', reforcada: 'R$ 21,90', padrao: 'R$ 18,90' },
    { volume: '20 – 50 refeições', reforcada: 'R$ 20,90', padrao: 'R$ 17,90' },
    { volume: '50+ refeições',     reforcada: 'R$ 19,90', padrao: 'R$ 16,90' },
];

function Cardapio() {
    const [semanaAtiva, setSemanaAtiva] = useState(0);

    const scrollToForm = () =>
        document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section className="cd-container" id="cardapio">

            {/* HEADER */}
            <h2 className="cd-badge" data-reveal>Cardápio &amp; Preços</h2>
            <p className="cd-chamada" data-reveal data-reveal-delay="50">
                Refeições para a sua empresa
            </p>
            <p className="cd-subtitulo" data-reveal data-reveal-delay="100">
                Cardápio quinzenal rotativo com duas linhas de produto e preços por volume.
                Tudo que sua equipe precisa, entregue com regularidade.
            </p>

            {/* ROTATIVO INFO */}
            <div className="cd-rotativo" data-reveal data-reveal-delay="100">
                <span className="cd-rotativo-icon" aria-hidden="true">↻</span>
                <p className="cd-rotativo-texto">
                    Cardápio quinzenal rotativo — a cada quinzena de dias úteis os pratos se renovam,
                    garantindo variedade para sua equipe ao longo do mês. Nos finais de semana, o
                    cliente escolhe entre os pratos da semana em vigor.
                </p>
            </div>

            {/* LINHAS DE PRODUTO */}
            <div className="cd-linhas" data-reveal data-reveal-delay="150">

                <div className="cd-linha">
                    <div className="cd-linha-header">
                        <span className="cd-linha-tag cd-linha-tag--padrao">Custo-benefício</span>
                        <h3 className="cd-linha-nome">Linha Padrão</h3>
                        <p className="cd-linha-desc">
                            Opção mais competitiva em preço. Ideal para empresas que buscam
                            praticidade sem abrir mão da qualidade.
                        </p>
                    </div>
                    <ul className="cd-linha-itens">
                        <li className="cd-linha-item">Arroz <strong>150g</strong></li>
                        <li className="cd-linha-item">Feijão <strong>150g</strong></li>
                        <li className="cd-linha-item">2 guarnições por refeição</li>
                    </ul>
                    <button className="cd-linha-cta" onClick={scrollToForm}>
                        Solicitar orçamento
                    </button>
                </div>

                <div className="cd-linha cd-linha--destaque">
                    <span className="cd-linha-recomendada">Recomendada B2B</span>
                    <div className="cd-linha-header">
                        <span className="cd-linha-tag cd-linha-tag--reforcada">Recomendada</span>
                        <h3 className="cd-linha-nome">Linha Reforçada</h3>
                        <p className="cd-linha-desc">
                            Maior valor percebido. Indicada para equipes que fazem da
                            refeição a principal refeição do dia.
                        </p>
                    </div>
                    <ul className="cd-linha-itens">
                        <li className="cd-linha-item">Arroz <strong>200g</strong></li>
                        <li className="cd-linha-item">Feijão <strong>200g</strong></li>
                        <li className="cd-linha-item">2 guarnições por refeição</li>
                    </ul>
                    <button className="cd-linha-cta cd-linha-cta--destaque" onClick={scrollToForm}>
                        Solicitar orçamento
                    </button>
                </div>

            </div>

            {/* TABELA DE PREÇOS */}
            <div className="cd-precos" data-reveal data-reveal-delay="100">
                <h3 className="cd-secao-titulo">Preços por Volume Diário</h3>
                <div className="cd-tabela-wrapper">
                    <table className="cd-tabela-precos">
                        <thead>
                            <tr>
                                <th scope="col">Volume / dia</th>
                                <th scope="col">Linha Reforçada</th>
                                <th scope="col">Linha Padrão</th>
                            </tr>
                        </thead>
                        <tbody>
                            {precos.map((p, i) => (
                                <tr
                                    key={p.volume}
                                    className={i === precos.length - 1 ? 'cd-tabela-row--melhor' : undefined}
                                >
                                    <td>{p.volume}</td>
                                    <td className="cd-tabela-valor">{p.reforcada}</td>
                                    <td className="cd-tabela-valor">{p.padrao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="cd-nota">
                    Volume mínimo: 10 refeições/dia. Preço unitário por refeição entregue.
                </p>
            </div>

            {/* CARDÁPIO QUINZENAL */}
            <div className="cd-menu" data-reveal data-reveal-delay="50">
                <h3 className="cd-secao-titulo">Cardápio Quinzenal</h3>

                <div className="cd-tabs" role="tablist" aria-label="Semanas do cardápio">
                    {semanas.map((s, i) => (
                        <button
                            key={s.label}
                            role="tab"
                            aria-selected={semanaAtiva === i}
                            className={`cd-tab${semanaAtiva === i ? ' cd-tab--ativa' : ''}`}
                            onClick={() => setSemanaAtiva(i)}
                        >
                            {s.label}
                        </button>
                    ))}
                </div>

                <div className="cd-tab-panel" role="tabpanel">
                    <div className="cd-tabela-wrapper">
                        <table className="cd-tabela-menu">
                            <thead>
                                <tr>
                                    <th scope="col">Dia</th>
                                    <th scope="col">Proteína Principal</th>
                                    <th scope="col">Guarnições</th>
                                </tr>
                            </thead>
                            <tbody>
                                {semanas[semanaAtiva].dias.map((d) => (
                                    <tr key={d.dia}>
                                        <td className="cd-tabela-dia">{d.dia}</td>
                                        <td className="cd-tabela-proteina">{d.proteina}</td>
                                        <td className="cd-tabela-guarnicao">{d.guarnicoes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="cd-nota">
                        Todas as refeições incluem arroz e feijão como base.
                    </p>
                </div>
            </div>

        </section>
    );
}

export default Cardapio;
