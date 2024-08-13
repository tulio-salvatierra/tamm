import "./App.css";
import Header from "./components/ui/Header";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <section className="bg-mainBlue text-white h-50 bg-[url('./assets/yellow.png')] bg-cover bg-no-repeat h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4">
            <div className="place-content-center text-left justify-evenly p-9">
              <h1 className="text-[9rem] font-bold mb-6 text-lightBlue -space-x-3.5 tracking-tighter leading-none">
                Keep your home sparkling clean{" "}
              </h1>
              <p className="text-4xl w-75 pt-4 text-lightGreen ">
                With TAMM cleaning services! We are a team of professionals who
                are passionate about helping you achieve your goals.
              </p>
              <button className="bg-mainBlue text-white text-1xl p-3 rounded-lg mt-4">
                Book now!
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
