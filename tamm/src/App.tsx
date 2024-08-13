import "./App.css";
import Header from "./components/ui/Header";
import Hero from "./assets/tamm-hero.png";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <section className="bg-mainBlue text-white p-4 mt-10 h-50">
          <div className="columns-2 p-4">
            <div className="justify-items-center">
              <h1 className="text-8xl font-bold">Welcome to TAMM</h1>
              <p className="text-xl">
                We are a team of professionals who are passionate about helping
                you achieve your goals.
              </p>
            </div>
            <img src={Hero} className="w-75 rounded-sm" />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
