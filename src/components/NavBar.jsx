import CartWidget from "./CartWidget";
import miImagen from "../assets/logo-terra.png";


import {
  Container,
  Flex,
  Spacer,
  Box,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  // const { setCategory } = useCategory();
  // const handleCategoryClick = (category) => {
  //   setCategory(category);
  // };
  return (
    <>
      <Container maxW="100rem" bg="blue.600" color="white">
        <Flex alignContent="center" gap="2">
          <Box p="2" color="white">
            <Image boxSize="170px" src={miImagen} alt="Logo Terra" />
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    bg="white"
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {isOpen ? "Close" : "Menu"}
                  </MenuButton>
                  <MenuList>
                    <Link to="/">
                      <MenuItem>
                        All Categories
                      </MenuItem>
                    </Link>
                    <Link to="/category/1">
                      <MenuItem>
                        Category 1
                      </MenuItem>
                    </Link>
                    <Link to="/category/3">
                      <MenuItem>Category 3</MenuItem>
                    </Link>
                    <Link to="/category/4">
                      <MenuItem>Category 4</MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
          <Box p="2" color="white">
            <Button colorScheme="gray" variant="solid">
              <CartWidget />
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
