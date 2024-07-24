import Welcome from "../assets/home.jpg";
import { Container } from "@chakra-ui/react";
import { Image,  } from "@chakra-ui/react";
const Home = () => {
  return (
    <div className="welcome">
      <Container
      w={"full"}
      h={"full"}>
        
        <h1>¡Bienvenidos a Terra!</h1>
        <Image
          src={Welcome}
          alt="Welcome"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        />
      </Container>
    </div>
  );
};

export default Home;
