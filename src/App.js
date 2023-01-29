import logo from './logo.svg';
import './App.css';
import Container from "./components/container"
import Header from "./components/header"
import Hero from './components/Hero'
import Cases from './components/Cases'
import About from './components/About'
import Blog from './components/Blog'
import Team from "./components/Team"
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div>
<Header/>
    <Hero/>
    <About/>
    <Cases/>
    <Blog/>
    <Team/>
    <Contacts/>
    <Footer/>
    </div>
    
    

  );
}

export default App;
