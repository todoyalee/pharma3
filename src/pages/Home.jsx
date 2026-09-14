import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import NewsLetterBox from '../components/NewsLetterBox'
import Feature from '../components/Feature'
import Testimonials from '../components/Testimonials'
import DiagnosticSolutions from '../components/DiagnosticSolutions'

const Home = () => {
  return (
    <div>
      <Hero />
      <DiagnosticSolutions />
      <BestSeller />
      <Testimonials />
      <Feature />
      <NewsLetterBox />
    </div>
  )
}

export default Home
