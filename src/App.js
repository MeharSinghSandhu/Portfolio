import logo from './logo.svg';
import './App.css';
import {MyNavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Skills} from './components/Skills.js'
import {Banner} from './components/Banner.js';
import {Projects} from "./components/Projects.js";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
function App() {
  return (
    <div className="App">
      <MyNavBar/>  
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
