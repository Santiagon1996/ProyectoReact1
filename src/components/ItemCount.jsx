import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

const ItemCount = () => {
    const [suma, setSuma] = useState(0);

  return (
    <>
        <Text fontSize="2xl" fontWeight="bold">
            {suma}u
          </Text>
          <Button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{ bg: "gray.200" }}
            _focus={{ bg: "gray.400" }}
            onClick={() => setSuma(suma + 1)}
          >
            +
          </Button>
          <Button
            px={2}
            py={1}
            bg="white"
            fontSize="xs"
            color="gray.900"
            fontWeight="bold"
            rounded="lg"
            textTransform="uppercase"
            _hover={{ bg: "gray.200" }}
            _focus={{ bg: "gray.400" }}
            onClick={() => setSuma(Math.max(suma - 1, 0))}
            disabled={suma === 0}
          >
            -
          </Button>
    </>
  )
}

export default ItemCount