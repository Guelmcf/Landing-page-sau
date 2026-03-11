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
        <div>
            <h1>Forms</h1>
            <div className='forms'>
                <input type="text" name="Name" id="" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" name="Company" id="" value={company} onChange={(e) => setCompany(e.target.value)} />
                <input type="email" name="Email" id="" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" name="phone" id="" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <select name="meal-numbers" id="" value={mealNumbers} onChange={(e) => setMealNumbers(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

            <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )

}

export default Forms;