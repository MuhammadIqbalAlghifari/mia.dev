import './index.css'
import './globals.css'
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Service from './components/service';
import Contact from './components/contact';
import Footer from './components/footer';
import Project from './components/project';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  )
}
