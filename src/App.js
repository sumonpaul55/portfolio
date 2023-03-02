import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <About />
      <Skills />
    </div>
  );
}

export default App;
