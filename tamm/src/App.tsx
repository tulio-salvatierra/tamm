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
      <div className="App grid-container">
        <Header />
        <div className="main">
          <Hero />
          <About />
          <Why />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
