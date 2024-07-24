import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListConteiner from "./components/ItemListConteiner";
import Form from "./components/Form";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ItemDetailConteiner from "./components/ItemDetailConteiner";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Item from "./components/Item";

function App() {
  return (
    <>
      
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Ruta para mostrar todos los productos */}
            <Route path="/catalogue" element={<ItemListConteiner />} />

            {/* Ruta para mostrar productos por categoría */}
            <Route path="/items/:category" element={ItemListConteiner} />
              
              {/* Ruta para mostrar el detalle de un producto */}
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
            
            <Route path="/item" component={Item} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/form" element={<Form />} />
            
          </Routes>

          <Footer />
        </BrowserRouter>
      
    </>
  );
}

export default App;
