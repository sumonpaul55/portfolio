import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Home />
      </header>
    </div>
  );
}

export default App;
