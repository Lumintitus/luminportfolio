import './App.css';
import About from './Components/About';
import Header from './Components/Header'
import Hero from './Components/Hero'
import about from './Components/About'
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
