import { useNavigate, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./pages/Form"; // Importa tu componente Form

function App() {
  const navigate = useNavigate();

  const handleNavigateToForm = () => {
    navigate("/form"); // Ruta para el formulario
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={handleNavigateToForm} className="navigate-button">
        Ir al Formulario
      </button>

      <Routes>
        <Route path="/form" element={<Form />} />{" "}
        {/* Define la ruta para el formulario */}
      </Routes>
    </div>
  );
}

export default App;
