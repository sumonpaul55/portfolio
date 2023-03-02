import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Home />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
