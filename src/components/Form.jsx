import { Container, Box } from "@chakra-ui/react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  SimpleGrid,
  GridItem,
  Heading,
  Text,
  Stack,
  chakra,
  Textarea,
} from "@chakra-ui/react";
const Form = () => {
  // Definimos el estado para cada campo de entrada que queremos capturar
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    if (!firstName || !lastName || !emailAddress || !country || !message) {
      alert("Please fill in all fields"); // Si algún campo está vacío, muestra una alerta
      // Aquí podrías agregar un mensaje más bonito con Chakra UI o SweetAlert
      return;
    }
    console.log({
      firstName,
      lastName,
      emailAddress,
      country,
      message,
    });
    // Aquí podrías enviar los datos a un servidor o realizar otras acciones
  };

  // Definimos un objeto con los estilos comunes para evitar repetición
  const commonStyles = {
    fontSize: "sm",
    fontWeight: "md",
    color: "gray.700",
    _dark: { color: "gray.50" },
    mt: 1,
    focusBorderColor: "brand.400",
    shadow: "sm",
    size: "sm",
    w: "full",
    rounded: "md",
  };

  return (
    <Container bg="#edf3f8">
      <Box mt={[10, 0]}>
        <SimpleGrid
          display={{ base: "initial", md: "grid" }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Personal Information
              </Heading>
              <Text mt={1} {...commonStyles} _dark={{ color: "gray.400" }}>
                Use a permanent address where you can receive mail.
              </Text>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              method="POST"
              shadow="base"
              rounded={{ base: "none", md: "md" }}
              overflow={{ base: "visible", md: "hidden" }}
              bg="white"
              _dark={{ bg: "#141517" }}
              p={{ base: 4, sm: 6 }}
              onSubmit={handleSubmit}
            >
              <Stack
                px={4}
                py={5}
                bg="white"
                _dark={{ bg: "#141517" }}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel htmlFor="first_name" {...commonStyles}>
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      {...commonStyles}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel htmlFor="last_name" {...commonStyles}>
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      {...commonStyles}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel htmlFor="email_address" {...commonStyles}>
                      Email address
                    </FormLabel>
                    <Input
                      type="text"
                      name="email_address"
                      id="email_address"
                      autoComplete="email"
                      {...commonStyles}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                  </FormControl>

                  {/* Ejemplo con Select y Textarea */}
                  <FormControl as={GridItem} colSpan={[6, 4]}>
                    <FormLabel htmlFor="country" {...commonStyles}>
                      Country / Region
                    </FormLabel>
                    <Select
                      id="country"
                      name="country"
                      autoComplete="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={(e) => setCountry(e.target.value)}
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </Select>
                  </FormControl>

                  {/* Ejemplo con Textarea */}
                  <FormControl as={GridItem} colSpan={[6]}>
                    <FormLabel htmlFor="message" {...commonStyles}>
                      Message
                    </FormLabel>
                    <Textarea
                      placeholder="Here is a sample placeholder"
                      mt={1}
                      focusBorderColor="brand.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg="gray.50"
                _dark={{ bg: "#121212" }}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="brand"
                  bg="blue.500" // Cambia el color de fondo a azul oscuro como ejemplo
                  color="white" // Cambia el color del texto a blanco para mayor contraste
                  _hover={{ bg: "blue.700", transform: "scale(1.05)" }} // Cambia el color al pasar el mouse y agrega una pequeña animación de escala
                  _active={{ bg: "blue.800" }} // Cambia el color cuando el botón es presionado
                  _focus={{
                    boxShadow: "outline",
                    ring: 2,
                    ringColor: "blue.500",
                  }} // Agrega un efecto de foco más visible
                  fontSize="lg" // Aumenta el tamaño del texto
                  fontWeight="md"
                  px={8} // Aumenta el padding horizontal para hacer el botón más ancho
                  py={6} // Aumenta el padding vertical para hacer el botón más alto
                  shadow="lg" // Agrega una sombra grande para darle profundidad
                >
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Form;
