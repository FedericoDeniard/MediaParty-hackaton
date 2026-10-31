import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Steps from './components/Steps.tsx'
import Features from './components/Features.tsx'
import Networks from './components/Networks.tsx'
import CallToAction from './components/CallToAction.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Steps />
        <Features />
        <Networks />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
