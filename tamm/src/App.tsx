import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Why from "./components/Why";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <Hero />
        <About />
        <Why />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
