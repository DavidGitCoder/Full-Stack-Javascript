import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import { useColorMode } from "./ui/color-mode";

const Navbar = () => {
  //chakra-ui built-in hook
  const { colorMode, toggleColorMode } = useColorMode();

  //curly brackets are used for js expressions
  return (
    <Container
      maxW={"1140px"}
      px={4}
      bgGradient={"to-l"}
      gradientFrom={"#3182ce"}
      gradientTo={"#1A365D"}
    >
      {" "}
      {/** px = padding left and right 4=16px */}
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient={"to-l"}
          gradientFrom={"#9F7AEA"}
          gradientTo={"#22d3ee"}
          bgClip={"text"}
          textTransform={"uppercase"}
          textAlign={"center"}
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="extrabold"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={"2"} alignItems={"center"}>
          <Link to={"/create"}>
            <Button variant={"surface"} colorPalette={"cyan"}>
              <BsPlusSquare fontSize={"20"} />
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            variant={"surface"}
            colorPalette={"cyan"}
          >
            {colorMode === "light" ? (
              <MdOutlineLightMode fontSize={"20"} />
            ) : (
              <MdOutlineDarkMode fontSize={"20"} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
