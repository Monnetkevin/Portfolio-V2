import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeMode from "./styles/ThemeMode";
import Home from "./pages/Home";
import Navbar from "./components/menu/Navbar";

function App() {
  return (
    <BrowserRouter>
      <ThemeMode>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeMode>
    </BrowserRouter>
  );
}

export default App;
