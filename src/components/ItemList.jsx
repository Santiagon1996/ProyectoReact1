// import Item from "./Item"
// import PropTypes from 'prop-types';

// const ItemList = ({ product }) => {
//   return (
//     <>
//       <Item product={product} />
//     </>
//   );
// };

// // Validación de PropTypes
// ItemList.propTypes = {
//   product: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
// };
import { Box, Flex, chakra, Link } from "@chakra-ui/react";
// import ItemCount from "./ItemCount";
import PropTypes from "prop-types";

const ItemList = ({ product }) => {
  return (
    //     <div className="main-catalogue">
    //       <Grid
    //          bg="#edf3f8"
    //         // _dark={{ bg: "#3e3e"3e }}
    //          p={50}
    //          w="full"

    //         templateColumns={{
    //           base: "repeat(1, 1fr)", // En pantallas pequeñas, una columna
    //           sm: "repeat(2, 1fr)", // En pantallas medianas, dos columnas
    //           md: "repeat(3, 1fr)" // En pantallas grandes, tres columnas
    //         }}
    //         gap={6} // Espacio entre las tarjetas
    //       >
    //         <GridItem key={product.id}>
    //           <Box
    //             maxW="xs"
    //             mx="auto"
    //             bg="white"
    //             _dark={{ bg: "gray.800" }}
    //             shadow="lg"
    //             rounded="lg"
    //           >
    //             <Box px={3} py={1.5}>
    //               <Text
    //                 color="gray.800"
    //                 _dark={{ color: "white" }}
    //                 fontWeight="bold"
    //                 fontSize="3xl"
    //                 textTransform="uppercase"
    //               >
    //                 {product.title}
    //               </Text>
    //               <Text
    //                 mt={1}
    //                 fontSize="sm"
    //                 color="gray.600"
    //                 _dark={{ color: "gray.400" }}
    //               >
    //                 {product.description}
    //               </Text>
    //             </Box>

    //             <Image
    //               h={48}
    //               w="full"
    //               fit="cover"
    //               mt={2}
    //               src={product.image}
    //               alt={product.title}
    //             />

    //             <Flex
    //               alignItems="center"
    //               justifyContent="space-between"
    //               px={4}
    //               py={2}
    //               bg="gray.900"
    //               roundedBottom="lg"
    //               color="white"
    //               fontWeight="bold"
    //               fontSize="lg"
    //             >
    //               <ItemCount /> {/* Asegúrate de que este componente esté importado */}
    //               <Text fontSize="2xl" fontWeight="bold">
    //                 {product.price}€
    //               </Text>
    //             </Flex>
    //           </Box>
    //         </GridItem>
    //       </Grid>
    //     </div>
    
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        mx={{
          lg: 8,
        }}
        display={{
          lg: "flex",
        }}
        maxW={{
          lg: "5xl",
        }}
        shadow={{
          lg: "lg",
        }}
        rounded={{
          lg: "lg",
        }}
      >
        <Box
          w={{
            lg: "50%",
          }}
        >
          <Box
            h={{
              base: 64,
              lg: "full",
            }}
            rounded={{
              lg: "lg",
            }}
            bgSize="cover"
            style={{
              backgroundImage: `url(${product.image})`,
            }}
          ></Box>
        </Box>

        <Box
          py={12}
          px={6}
          maxW={{
            base: "xl",
            lg: "5xl",
          }}
          w={{
            lg: "50%",
          }}
        >
          <chakra.h2
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            fontWeight="bold"
          >
            {product.title}
          </chakra.h2>
          <chakra.p
            mt={4}
            color="gray.600"
            _dark={{
              color: "gray.400",
            }}
          >
            {product.description}
          </chakra.p>

          <Box mt={8}>
            <Link
              to={`/item/${product.id}`}
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{
                bg: "gray.800",
              }}
            >
              Start Now
            </Link>
          </Box>
        </Box>
      </Box>
    </Flex>
    
  );
};

// Validación de PropTypes
ItemList.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired, // Asegúrate de que 'id' esté aquí si es parte de 'product'
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemList;
