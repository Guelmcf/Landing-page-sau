import './App.css'
import Header from './components/Nav.tsx'
import Hero from './components/hero.tsx'
import QuemSomos from './components/quem_somos.tsx'
import HowItWorks from './components/how_it_works.tsx'
import Clientes from './components/clients.tsx'
import Forms from './components/forms.tsx'


function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuemSomos />
      <HowItWorks />
      <Clientes />
      <Forms />
    </>
  )
}

export default App
