import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";

function App() {
  return (
    <>
      <div className="App grid-container">
        <Header />
        <Hero />
        <About />
        <Why />
        <Footer />
      </div>
    </>
  );
}

export default App;
