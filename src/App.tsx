import './App.css'
import Header from './components/Nav.tsx'
import Hero from './components/hero.tsx'
import QuemSomos from './components/quem_somos.tsx'
import HowItWorks from './components/how_it_works.tsx'
import Clientes from './components/clients.tsx'
import Forms from './components/forms.tsx'
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/como-funciona" element={<HowItWorks />} />
        <Route path="/nossos-clientes" element={<Clientes />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
