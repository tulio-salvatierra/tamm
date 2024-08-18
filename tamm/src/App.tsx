import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
