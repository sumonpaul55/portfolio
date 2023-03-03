import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Copyright from "./components/Copyright";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  return (
    <div className="App">
      <header className="App-header sticky top-0 shadow">
        <Navbar />
      </header>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
