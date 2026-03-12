import { useState } from 'react'
import './forms.css'
import emailjs from '@emailjs/browser'


function Forms() {

const [name, setName] = useState('')
const [company, setCompany] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [mealNumbers, setMealNumbers] = useState('')

    async function handleSubmit() {
    
    if (localStorage.getItem('enviou') == 'true') {
        alert('Voce ja enviou o formulario, obrigado!')
        return
    }

    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim() || !mealNumbers.trim()) {
        alert('Por favor, preencha todos os campos obrigatórios.')
        return
    }

    const data = {
        "nome": name,
        "empresa": company,
        "email": email,
        "numero": phone,
        "numeroRefeicoes": mealNumbers
    }
    try {
        await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, data, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
        localStorage.setItem('enviou', 'true')
        alert('Formulário enviado com sucesso! Nossa equipe entrará em contato em breve.')
    } catch (error) {
        console.error('Error sending email:', error)
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.')
    }
}
    return (
        <div className='forms-container' id='formulario'>
            
            <div className='wrapper-text'>
                <h3 className='Solicite'>Solicite Agora</h3>
                <h2>Receba uma proposta personalizada</h2>
                <p>Preencha o formulário e nossa equipe comercial entrará em contato <br />
                com uma proposta exclusiva para sua empresa.</p>

                <ul className='cto'>
                        <li className='cto-item-li'>
                            <div className='cto-item'><span className='innerball'></span>
                            <div className='cto-item-txt'>Resposta Rapida
                            <p className='cto-item-li-txt'>Receba seu orçamento em até 24 horas</p> 
                            </div>
                            </div>
                        </li>
                        <li className='cto-item-li'>
                            <div className='cto-item'><span className='innerball'></span>
                            <div className='cto-item-txt'>Sem Compromisso
                            <p className='cto-item-li-txt'>Conheça nossa proposta sem obrigação</p> 
                            </div>
                            </div>
                        </li>
                        <li className='cto-item-li'>
                            <div className='cto-item'><span className='innerball'></span>
                            <div className='cto-item-txt'>Atendimento Premium
                            <p className='cto-item-li-txt'>Consultor dedicado a sua conta</p> 
                            </div>
                            </div>
                        </li>
                </ul>

                <div className='talk-direct'>
                    <h3>Prefere Falar Diretamente?</h3>
                    <p>Whatsapp: <span className='txt-tlk'><a href="https://wa.me/5531992325030" target="_blank" rel="noopener noreferrer" className='zap'>(31) 99232-5030</a></span></p>
                    <p>Email: <span className='txt-tlk'>saurestaurante@gmail.com</span></p>
                </div>
            </div>
            
            <div className='forms'>
                <label htmlFor="name">Nome Completo*</label>
                <input type="text" name="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Seu Nome' className='cx-txt'/>
                <label htmlFor="company">Empresa*</label>
                <input type="text" name="Company" id="company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Nome da Empresa' className='cx-txt'/>
                <label htmlFor="email">Email*</label>
                <input type="email" name="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Seu Email' className='cx-txt'/>
                <label htmlFor="phone">Telefone / Whatsapp*</label>
                <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='(00) 00000-0000' className='cx-txt'/>
                <label htmlFor="meal-numbers">Numero de Refeições*</label>
                <select name="meal-numbers" id="meal-numbers" value={mealNumbers} onChange={(e) => setMealNumbers(e.target.value)} className='cx-txt'>
                    <option value="">Selecione</option>
                    <option value="5-10 marmitas">5-10 refeições</option>
                    <option value="11-20 marmitas">11-20 refeições</option>
                    <option value="21-30 marmitas">21-30 refeições</option>
                    <option value="31-40 marmitas">31-40 refeições</option>
                    <option value="40+ marmitas">40+ refeições</option>
                </select>

            <button onClick={() => handleSubmit()} className='Btn-forms'>Solicitar orçamento</button>
            <p className='termofserice'>Ao enviar, você concorda com os termos e condições de uso.</p>
            </div>
        </div>
    )

}

export default Forms;