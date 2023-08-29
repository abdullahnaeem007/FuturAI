import '../App.css'
import Contract from './Contract'
import Footer from './Footer'
import Gallery from './Gallery'
import Header from './Header'
import Hero from './Hero'
import Revenue from './Revenue'
import Roadmap from './Roadmap'
import Tools from './Tools'
import Use from './Use'
function Homepage() {
    return (
        <div className='flex flex-col w-screen min-h-screen bg-brandDarkBlue'>
            <div className='flex flex-col items-center sectionOne w-full h-screen'>
                <Header />
                <Hero />
            </div>
            <div className='flex flex-col w-full'>
                <Gallery />
                <Tools />
                <Contract />
                <Revenue />
                <Roadmap />
                <Use />
                <Footer />
            </div>
        </div>
    )
}

export default Homepage
