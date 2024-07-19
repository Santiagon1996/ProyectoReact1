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
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import PropTypes from "prop-types";


const ItemList = ({ product }) => {
  return (
    <div className="main-catalogue">
      <Flex
        bg="#edf3f8"//color de fondo para usar en la pagina 
        _dark={{ bg: "#3e3e3e" }}
        p={50}
        w="full"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          maxW="xs"
          mx="auto"
          bg="white"
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          rounded="lg"
        >
          <Box px={3} py={1.5}>
            <Text
              color="gray.800"
              _dark={{ color: "white" }}
              fontWeight="bold"
              fontSize="3xl"
              textTransform="uppercase"
            >
              {product.title}
            </Text>
            <Text
              mt={1}
              fontSize="sm"
              color="gray.600"
              _dark={{ color: "gray.400" }}
            >
              {product.description}
            </Text>
          </Box>

          <Image
            h={48}
            w="full"
            fit="cover"
            mt={2}
            src={product.image}
            alt={product.title}
          />

          <Flex
            alignItems="center"
            justifyContent="space-between"
            px={4}
            py={2}
            bg="gray.900"
            roundedBottom="lg"
            color="white"
            fontWeight="bold"
            fontSize="lg"
          >
            <ItemCount />
            <Text fontSize="2xl" fontWeight="bold">
              {product.price}€
            </Text>
          </Flex>
        </Box>
      </Flex>
    </div>
  );
};

// Validación de PropTypes
ItemList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemList;
