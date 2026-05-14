import './App.css'
import { useReveal } from './hooks/useReveal'
import Header from './components/Nav.tsx'
import Hero from './components/hero.tsx'
import QuemSomos from './components/quem_somos.tsx'
import HowItWorks from './components/how_it_works.tsx'
import Clientes from './components/clients.tsx'
import Cardapio from './components/cardapio.tsx'
import Forms from './components/forms.tsx'
import Footer from './components/footer.tsx'


function App() {
  useReveal()

  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <HowItWorks />
      <Clientes />
      <Cardapio />
      <Forms />
      <Footer />
    </>
  )
}

export default App
