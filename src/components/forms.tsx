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
    const data = {
        "nome": name,
        "empresa": company,
        "email": email,
        "numero": phone,
        "numeroRefeicoes": mealNumbers
    }
    await emailjs.send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, data, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
    localStorage.setItem('enviou', 'true')
}
    return (
        <div className='forms-container'>
            
            <div>
                <h3 className='Solicite'>Solicite Agora</h3>
                <h2>Receba uma proposta personalizada</h2>
                <p>Preencha o formulário e nossa equipe comercial entrará em contato com uma proposta exclusiva para sua empresa.</p>

                <ul className='cto'>
                    <div className='cto-item'>
                     <span className='innerball'></span><li>Resposta Rapida</li>  
                    </div>
                    <div className='cto-item'>
                     <span className='innerball'></span><li>Resposta Rapida</li>   
                    </div>
                    <div className='cto-item'>
                     <span className='innerball'></span><li>Resposta Rapida</li>   
                    </div>
                </ul>

                <div className='talk-direct'>
                    <h3>Prefere Falar Diretamente?</h3>
                    <p>Whatsapp: <span>(31) 99999-9999</span></p>
                    <p>Email: <span>saurestaurante@gmail.com</span></p>
                </div>
            </div>
            
            <div className='forms'>
                Nome Completo*
                <input type="text" name="Name" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder='Seu Nome' className='cx-txt'/>
                Empresa*
                <input type="text" name="Company" id="" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Nome da Empresa' className='cx-txt'/>
                Email*
                <input type="email" name="Email" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Seu Email' className='cx-txt'/>
                Telefone / Whatsapp*
                <input type="tel" name="phone" id="" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='(00) 00000-0000' className='cx-txt'/>
                Numero de Refeições*
                <select name="meal-numbers" id="" value={mealNumbers} onChange={(e) => setMealNumbers(e.target.value)} className='cx-txt'>
                    <option value="">Selecione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            <button onClick={() => handleSubmit()} className='Btn-forms'>Solicitar orçamento</button>
            <p className='termofserice'>Ao enviar, você concorda com os termos e condições de uso.</p>
            </div>
        </div>
    )

}

export default Forms;