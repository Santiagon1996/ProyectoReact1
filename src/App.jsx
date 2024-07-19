import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <NavBar />
          <ItemListConteiner />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Ruta para mostrar todos los productos */}
            <Route path="/catalogue" element={<ItemListConteiner />} />
            {/* Ruta para mostrar productos por categoría */}
            <Route path="/items/:category" element={ItemListConteiner} />
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      
    </>
  );
}

export default App;
