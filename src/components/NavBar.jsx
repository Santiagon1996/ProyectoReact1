import CartWidget from "./CartWidget";
import FormWidget from "./FormWidget";
import miImagen from "../assets/logo-terra.png";
import FondoNav from "../assets/fondo-tec.jpg";

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
  return (
    <>
      <Container
        maxW="100rem"
        bgImage={FondoNav}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        color="white"
      >
        <Flex alignContent="center" gap="2">
          <Box p="2" color="white">
            <Link to={"/"}>
              <Image boxSize="170px" src={miImagen} alt="Logo Terra" />
            </Link>
          </Box>
          <Spacer />
          <Box p="2" color="black">
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton
                    bg="#1C9F53"
                    isActive={isOpen}
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                  >
                    {isOpen ? "Close" : "Menu"}
                  </MenuButton>
                  <MenuList>
                    <Link to={"/catalogue"}>
                      <MenuItem>Servicios con IA</MenuItem>
                    </Link>
                    <Link to="/category/1">
                      <MenuItem>ChatBots</MenuItem>
                    </Link>
                    <Link to="/category/3">
                      <MenuItem>Soluciones con IA</MenuItem>
                    </Link>
                    <Link to="/category/4">
                      <MenuItem>Modelos Entrenados</MenuItem>
                    </Link>
                  </MenuList>
                </>
              )}
            </Menu>
          </Box>
          <Box p="2" color="white">
            <Button bg="#1C9F53" colorScheme="gray" variant="solid">
              <Link to={"/cart"}>
              <CartWidget />
              </Link>
            </Button>
          </Box>
          <Box p="2" color="white">
            <Button bg="#1C9F53" colorScheme="gray" variant="solid">
              <Link to={"/form"}>
              <FormWidget />
              </Link>
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
