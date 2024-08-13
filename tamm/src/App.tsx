import "./App.css";
import Header from "./components/ui/Header";
import Hero from "./assets/tamm-hero.png";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <section className="bg-mainBlue text-white p-4 mt-10 h-50">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <div className="place-content-center text-left justify-evenly">
              <h1 className="text-8xl font-bold mb-6 text-lightBlue -space-x-3.5">
                Keep your home sparkling clean{" "}
              </h1>
              <p className="text-4xl w-75 pt-4">
                With TAMM cleaning services! We are a team of professionals who
                are passionate about helping you achieve your goals.
              </p>
              <button className="bg-lightGreen text-black text-1xl p-3 rounded-lg mt-4">
                Book now!
              </button>
            </div>
            <div className="place-content-center">
              <img src={Hero} className="rounded-sm" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
