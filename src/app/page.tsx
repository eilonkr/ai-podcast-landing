import Navbar from './components/Navbar'
import Hero from './components/Hero'
import UseCases from './components/UseCases'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <UseCases />
      <Footer />
    </main>
  )
}
