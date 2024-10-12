import About from "../components/About"
import Features from "../components/Features"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Listing from "../components/Listing"


const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Features/>
        <Listing/>
        <About/>
        <Footer/>
    </div>
  )
}

export default Home