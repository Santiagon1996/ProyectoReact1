// import { Heading, Center } from "@chakra-ui/react";
// import ItemList from "./ItemList";
// import { useEffect, useState } from "react";

// const ItemListConteiner = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     };

//     fetchData(); // Llama a la función asíncrona
//   }, []);

//   const renderProducts = products.map((product) => {
//     return <ItemList key={product.id} product={product} />;
//   });

//   if (products === undefined) {
//     return (
//       <div>
//         <Center>
//           <Heading>Catalogo</Heading>
//         </Center>
//         {renderProducts}
//       </div>
//     );
//   } else {
//     const catFilter = products.filter(
//       (product) => product.category === products
//     );
//     return (
//       <div>
//         <Center>
//           <Heading>Catalogo</Heading>
//         </Center>
//         {catFilter ? renderProducts : <p>No hay productos</p>}
//       </div>
//     );
//   }
// };

// export default ItemListConteiner;

import { Heading, Center, Select } from "@chakra-ui/react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);

    // Usa useParams para obtener el parámetro category de la URL
    const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        
        // Filtra los productos basándose en el parámetro category si está presente
        const filtered = category ? data.filter(product => product.category === category) : data;
        setFilteredProducts(filtered);

        // Obtiene todas las categorías únicas de los productos
        const uniqueCategories = [...new Set(data.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData(); // Llama a la función asíncrona
  }, [category]);

  const filterProductsByCategory = (category) => {
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    if (selectedCategory) {
      filterProductsByCategory(selectedCategory);
    } else {
      setFilteredProducts(products); // Muestra todos los productos si no se selecciona ninguna categoría
    }
  };

  const renderProducts = filteredProducts.map((product) => {
    return <ItemList key={product.id} product={product} />;
  });

  return (
    <div >
      <Center>
        <Heading>Nuestras Tecnologias</Heading>
      </Center>
      <Select placeholder="Selecciona una categoría" onChange={handleCategoryChange}>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </Select>
      {renderProducts.length > 0 ? renderProducts : <p>No hay productos</p>}
    </div>
  );
};

export default ItemListContainer;