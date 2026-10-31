import Header from './Header.tsx'
import Hero from './Hero.tsx'
import Steps from './Steps.tsx'
import Features from './Features.tsx'
import Networks from './Networks.tsx'
import CallToAction from './CallToAction.tsx'
import Footer from './Footer.tsx'

export default function Landing() {
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
