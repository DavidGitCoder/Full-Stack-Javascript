import ProductCard from "../components/ProductCard";
import { useProductStore } from "../store/product";
import { Container, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster } from "../components/ui/toaster";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    // useEffect will run the code at elast one when it mounts it to the component
    //even if the dependency array is empty
    //the dependency array tells useEffect what state to listen to and

    fetchProducts();
  }, [fetchProducts]); // The dependency array

  return (
    <Container maxW={"4xl"} py={12}>
      <Toaster />
      <VStack gap={12}>
        <Text
          bgGradient={"to-l"}
          gradientFrom={"#9F7AEA"}
          gradientTo={"#22d3ee"}
          bgClip={"text"}
          textAlign={"center"}
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight="extrabold"
        >
          Current Products 🚀
        </Text>
        {products.length > 0 ? (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={10}
            w={"full"}
          >
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </SimpleGrid>
        ) : (
          <HStack>
            <Text color={"gray.400"} fontWeight={"bold"} fontSize={"xl"}>
              No products found 😢
            </Text>
            <Link to={"/create"}>
              <Text
                color={"blue.400"}
                fontWeight={"bold"}
                _hover={{ textDecoration: "underline" }}
                fontSize={"xl"}
              >
                Create a product
              </Text>
            </Link>
          </HStack>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;
