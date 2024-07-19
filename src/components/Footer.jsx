import {
  Box,
  Stack,
  Flex,
  Image,
  HStack,
  Link,
  Divider,
  VStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import miImagen from '../assets/logo-terra.png';

import { BiFacebook, BiTwitter, BiInstagram, BiLinkedin } from "boxicons"; // Importa los íconos de Boxicons

const Footer = () => {
  return (
    <>
      <Box
        bg="white"
        _dark={{
          bg: "gray.600",
        }}
      >
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
          w="full"
          justify="space-between"
          p={10}
        >
          <Flex justify="center">
            <Image
              src={miImagen}
              alt="Company Logo"
              rounded="lg"
              width={{
                base: "150px",
                lg: "200px",
              }}
              height={{
                base: "105px", // Altura base aumentada un 40%
                lg: "140px", // Altura para dispositivos grandes aumentada un 40%
              }}
              my={{
                base: 2,
                lg: 0,
              }}
            />
          </Flex>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Pre-Sale FAQS</Link>
              <Link textTransform="uppercase">Submit a ticket</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Services</Link>
              <Link textTransform="uppercase">Theme Tweak</Link>
            </Flex>
          </HStack>
          <HStack
            alignItems="start"
            flex={1}
            justify="space-around"
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            color="gray.800"
            _dark={{
              color: "white",
            }}
            textAlign={{
              base: "center",
              md: "left",
            }}
          >
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">Show Case</Link>
              <Link textTransform="uppercase">Widget Kit</Link>
              <Link textTransform="uppercase">Support</Link>
            </Flex>
            <Flex justify="start" direction="column">
              <Link textTransform="uppercase">About Us</Link>
              <Link textTransform="uppercase">Contact Us</Link>
              <Link textTransform="uppercase">Resources</Link>
            </Flex>
          </HStack>
        </Stack>
        <Divider
          w="95%"
          mx="auto"
          color="gray.600"
          _dark={{
            color: "#F9FAFB",
          }}
          h="3.5px"
        />
        <VStack py={3}>
          <HStack justify="center">
            <Link href="https://facebook.com" isExternal>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={BiFacebook}
              />
            </Link>
            <Link>
              <Icon
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={BiTwitter}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={BiInstagram}
              />
            </Link>
            <Link>
              <Icon
                _dark={{
                  color: "white",
                }}
                h="20px"
                w="20px"
                as={BiLinkedin}
              />
            </Link>
          </HStack>

          <Text
            textAlign="center"
            fontSize="smaller"
            _dark={{
              color: "white",
            }}
          >
            &copy;Copyright. All rights reserved.
          </Text>
        </VStack>
      </Box>
      ;
    </>
  );
};

export default Footer;
