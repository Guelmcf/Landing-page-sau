import { useState } from 'react'
import './forms.css'
import emailjs from '@emailjs/browser'

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'duplicate'

const statusMessages: Record<Exclude<FormStatus, 'idle' | 'loading'>, string> = {
    success:   'Formulário enviado! Nossa equipe entrará em contato em breve.',
    error:     'Erro ao enviar. Por favor, tente novamente.',
    duplicate: 'Você já enviou uma solicitação. Em breve entraremos em contato.',
}

function maskPhone(value: string): string {
    const d = value.replace(/\D/g, '').slice(0, 11)
    if (d.length <= 2)  return d.length ? `(${d}` : ''
    if (d.length <= 7)  return `(${d.slice(0, 2)}) ${d.slice(2)}`
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`
}

function Forms() {
    const [name,        setName]        = useState('')
    const [company,     setCompany]     = useState('')
    const [email,       setEmail]       = useState('')
    const [phone,       setPhone]       = useState('')
    const [mealNumbers, setMealNumbers] = useState('')
    const [status,      setStatus]      = useState<FormStatus>('idle')
    const [errors,      setErrors]      = useState<Record<string, string>>({})

    function clearError(field: string) {
        setErrors(prev => { const next = { ...prev }; delete next[field]; return next })
    }

    function validate(): Record<string, string> {
        const e: Record<string, string> = {}
        if (name.trim().length < 3)
            e.name = 'Informe seu nome completo'
        if (company.trim().length < 2)
            e.company = 'Informe o nome da empresa'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim()))
            e.email = 'Informe um e-mail válido'
        if (phone.replace(/\D/g, '').length < 10)
            e.phone = 'Informe um telefone válido com DDD'
        if (!mealNumbers)
            e.mealNumbers = 'Selecione uma opção'
        return e
    }

    async function sendToSheets(data: Record<string, string>) {
        const url = import.meta.env.VITE_GOOGLE_SHEETS_URL
        if (!url) return
        // no-cors + text/plain: avoids preflight and bypasses Apps Script's redirect CORS issue
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ ...data, data: new Date().toISOString() }),
        })
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        if (localStorage.getItem('enviou') === 'true') {
            setStatus('duplicate')
            return
        }

        const fieldErrors = validate()
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors)
            return
        }

        setStatus('loading')

        const data = {
            nome:            name,
            empresa:         company,
            email:           email,
            numero:          phone,
            numeroRefeicoes: mealNumbers,
        }

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            )
            localStorage.setItem('enviou', 'true')
            setStatus('success')
            setName(''); setCompany(''); setEmail(''); setPhone(''); setMealNumbers('')

            // Fire-and-forget — Sheets failure doesn't affect the user
            sendToSheets(data).catch(err => console.warn('Sheets error:', err))
        } catch (error) {
            console.error('EmailJS error:', error)
            setStatus('error')
        }
    }

    const isLoading = status === 'loading'
    const isDone    = status === 'success'

    return (
        <section className="fm-container" id="formulario">

            {/* COLUNA DE INFORMAÇÃO */}
            <div className="fm-info" data-reveal>
                <span className="fm-badge">Solicite Agora</span>

                <h2 className="fm-titulo">
                    Receba uma proposta personalizada
                </h2>

                <p className="fm-descricao">
                    Preencha o formulário e nossa equipe comercial entrará em contato
                    com uma proposta exclusiva para sua empresa.
                </p>

                <ul className="fm-features">
                    <li className="fm-feature-item">
                        <div className="fm-feature-bullet" aria-hidden="true" />
                        <div className="fm-feature-body">
                            <strong className="fm-feature-title">Resposta Rápida</strong>
                            <p className="fm-feature-desc">Receba seu orçamento em até 24 horas</p>
                        </div>
                    </li>
                    <li className="fm-feature-item">
                        <div className="fm-feature-bullet" aria-hidden="true" />
                        <div className="fm-feature-body">
                            <strong className="fm-feature-title">Sem Compromisso</strong>
                            <p className="fm-feature-desc">Conheça nossa proposta sem obrigação</p>
                        </div>
                    </li>
                    <li className="fm-feature-item">
                        <div className="fm-feature-bullet" aria-hidden="true" />
                        <div className="fm-feature-body">
                            <strong className="fm-feature-title">Atendimento Premium</strong>
                            <p className="fm-feature-desc">Consultor dedicado à sua conta</p>
                        </div>
                    </li>
                </ul>

                <div className="fm-contact-alt">
                    <p className="fm-contact-alt-title">Prefere falar diretamente?</p>
                    <a
                        href="https://wa.me/5531992325030"
                        className="fm-contact-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp: (31) 99232-5030
                    </a>
                    <p className="fm-contact-email">
                        E-mail: saurestaurante@gmail.com
                    </p>
                </div>
            </div>

            {/* CARD DO FORMULÁRIO */}
            <div className="fm-card" data-reveal data-reveal-delay="100">
                <form className="fm-form" onSubmit={handleSubmit} noValidate>

                    <div className="fm-field">
                        <label htmlFor="fm-name" className="fm-label">
                            Nome Completo <span className="fm-required" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="text"
                            id="fm-name"
                            name="name"
                            value={name}
                            onChange={e => { setName(e.target.value); clearError('name') }}
                            placeholder="Seu nome"
                            className={`fm-input${errors.name ? ' fm-input--error' : ''}`}
                            autoComplete="name"
                        />
                        {errors.name && <span className="fm-field-error">{errors.name}</span>}
                    </div>

                    <div className="fm-field">
                        <label htmlFor="fm-company" className="fm-label">
                            Empresa <span className="fm-required" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="text"
                            id="fm-company"
                            name="company"
                            value={company}
                            onChange={e => { setCompany(e.target.value); clearError('company') }}
                            placeholder="Nome da empresa"
                            className={`fm-input${errors.company ? ' fm-input--error' : ''}`}
                            autoComplete="organization"
                        />
                        {errors.company && <span className="fm-field-error">{errors.company}</span>}
                    </div>

                    <div className="fm-field">
                        <label htmlFor="fm-email" className="fm-label">
                            E-mail <span className="fm-required" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="email"
                            id="fm-email"
                            name="email"
                            value={email}
                            onChange={e => { setEmail(e.target.value); clearError('email') }}
                            placeholder="seu@email.com"
                            className={`fm-input${errors.email ? ' fm-input--error' : ''}`}
                            autoComplete="email"
                        />
                        {errors.email && <span className="fm-field-error">{errors.email}</span>}
                    </div>

                    <div className="fm-field">
                        <label htmlFor="fm-phone" className="fm-label">
                            Telefone / WhatsApp <span className="fm-required" aria-hidden="true">*</span>
                        </label>
                        <input
                            type="tel"
                            id="fm-phone"
                            name="phone"
                            value={phone}
                            onChange={e => { setPhone(maskPhone(e.target.value)); clearError('phone') }}
                            placeholder="(00) 00000-0000"
                            className={`fm-input${errors.phone ? ' fm-input--error' : ''}`}
                            autoComplete="tel"
                        />
                        {errors.phone && <span className="fm-field-error">{errors.phone}</span>}
                    </div>

                    <div className="fm-field">
                        <label htmlFor="fm-meals" className="fm-label">
                            Número de Refeições <span className="fm-required" aria-hidden="true">*</span>
                        </label>
                        <select
                            id="fm-meals"
                            name="meal-numbers"
                            value={mealNumbers}
                            onChange={e => { setMealNumbers(e.target.value); clearError('mealNumbers') }}
                            className={`fm-input fm-select${errors.mealNumbers ? ' fm-input--error' : ''}`}
                        >
                            <option value="">Selecione uma opção</option>
                            <option value="5-10 refeições">5–10 refeições</option>
                            <option value="11-20 refeições">11–20 refeições</option>
                            <option value="21-30 refeições">21–30 refeições</option>
                            <option value="31-40 refeições">31–40 refeições</option>
                            <option value="40+ refeições">40+ refeições</option>
                        </select>
                        {errors.mealNumbers && <span className="fm-field-error">{errors.mealNumbers}</span>}
                    </div>

                    <button
                        type="submit"
                        className="fm-submit"
                        disabled={isLoading || isDone}
                    >
                        {isLoading ? 'Enviando…' : isDone ? 'Enviado ✓' : 'Solicitar Orçamento'}
                    </button>

                    {status !== 'idle' && status !== 'loading' && (
                        <p
                            className={`fm-status fm-status--${status}`}
                            role="status"
                            aria-live="polite"
                        >
                            {statusMessages[status as keyof typeof statusMessages]}
                        </p>
                    )}

                    <p className="fm-terms">
                        Ao enviar, você concorda com os termos e condições de uso.
                    </p>

                </form>
            </div>

        </section>
    )
}

export default Forms
