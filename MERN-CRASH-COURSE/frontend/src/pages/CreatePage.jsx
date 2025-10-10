import { useProductStore } from "../store/product";
import { useColorModeValue } from "../components/ui/color-mode";
import {
  Box,
  Button,
  Container,
  Input,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { toaster, Toaster } from "../components/ui/toaster";
import { useState } from "react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    //create the new record
    const { success, message } = await createProduct(newProduct);
    //display a toaster message
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        type: "error",
        duration: 5000,
      });
    } else {
      toaster.create({
        title: "Success!",
        description: message,
        status: "error",
        type: "success",
        duration: 5000,
        closable: true,
      });
    }
    //reset the state
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"md"}>
      <VStack spacing={8}></VStack>
      <Toaster />
      <Heading
        as={"h1"}
        size={"4xl"}
        textAlign={"center"}
        fontWeight={"bold"}
        marginTop={8}
        marginBottom={4}
      >
        Create New Product
      </Heading>

      <Box
        width={"full"}
        bg={useColorModeValue("white", "gray.800")}
        p={6}
        rounded={"lg"}
        shadow={"md"}
      >
        <VStack spacing={4}>
          <Input
            bg={useColorModeValue("white", "gray.600")}
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            placeholder={"Product Name"}
          />

          <Input
            bg={useColorModeValue("white", "gray.600")}
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            placeholder={"Product Price"}
          />

          <Input
            bg={useColorModeValue("white", "gray.600")}
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            placeholder={"Product Image"}
          />
          <Button
            w="full"
            colorPalette={"cyan"}
            variant={"solid"}
            onClick={handleAddProduct}
          >
            Add Product
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};
export default CreatePage;
