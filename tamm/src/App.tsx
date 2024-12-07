import "./App.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
