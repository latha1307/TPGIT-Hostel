import { Welcome } from '../components/Welcome'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'


function Home() {
  return (
    <>
        <div>
            <Banner/>
            <NavBar/>
            <Welcome/>
            <Footer/>
        </div>
    </>
  )
}


export default Home;
