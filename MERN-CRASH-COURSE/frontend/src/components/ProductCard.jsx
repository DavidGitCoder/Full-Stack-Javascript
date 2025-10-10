import {
  Container,
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Popover,
  Portal,
  Text,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useColorModeValue } from "./ui/color-mode";
import { LuPen, LuTrash } from "react-icons/lu";
import { useProductStore } from "../store/product";
import { toaster } from "./ui/toaster";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const [open, setOpen] = useState(false);
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bg = useColorModeValue("white", "cyan.800");
  const bgPopover = useColorModeValue("gray.200", "cyan.700");
  const colorTitlePopover = useColorModeValue("#764cc9ff", "#5edcf0ff");
  const colorInputText = useColorModeValue("gray.800", "gray.200");

  const handleUpdateProduct = async (product) => {
    const { success, message } = await updateProduct(product);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        duration: 5000,
        status: "error",
        style: { boxShadow: "none" }, // remove shadow
      });
    } else {
      toaster.create({
        title: "Success!",
        description: message,
        type: "success",
        placement: "top-end",
      });
      setOpen(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
        style: { boxShadow: "none" }, // remove shadow
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        type: "success",
        style: { boxShadow: "none" }, // remove shadow
      });
    }
  };
  return (
    <Container>
      <Box
        bg={bg}
        m={2}
        rounded={"lg"}
        shadow={"sm"}
        overflow="hidden"
        transition={"all 0.3s"}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          object-fit="cover"
        />
        <Box py={4} m={4}>
          <Heading as="h3" size="md" mb={2} color={textColor}>
            {product.name}
          </Heading>

          <Text fontweight="bold" color={textColor} fontsize="xl" mb={4}>
            ${product.price}
          </Text>

          <HStack spacing={2}>
            <Popover.Root
              positioning={{ placement: "top-start" }}
              open={open}
              onOpenChange={(e) => setOpen(e.open)}
            >
              <Popover.Trigger asChild>
                <IconButton bg={"blue.300"} name="updateProduct">
                  <LuPen />
                </IconButton>
              </Popover.Trigger>

              <Portal>
                <Popover.Positioner>
                  <Popover.Content bg={bgPopover} rounded="lg" p={1} width="md">
                    <Popover.Body>
                      <VStack gap={4}>
                        <Popover.Title
                          fontSize={{ base: "16px", sm: "22px" }}
                          fontWeight="bold"
                          color={colorTitlePopover}
                          pb={4}
                          alignSelf={"start"}
                        >
                          Update Product
                        </Popover.Title>
                        <Input
                          borderColor={useColorModeValue(
                            "purple.600",
                            "cyan.600"
                          )}
                          color={colorInputText}
                          size="lg"
                          value={updatedProduct.name}
                          name="name"
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              name: e.target.value,
                            })
                          }
                        />
                        <Input
                          borderColor={useColorModeValue(
                            "purple.600",
                            "cyan.600"
                          )}
                          color={colorInputText}
                          size="lg"
                          value={updatedProduct.price}
                          name="price"
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              price: e.target.value,
                            })
                          }
                        />
                        <Input
                          borderColor={useColorModeValue(
                            "purple.600",
                            "cyan.600"
                          )}
                          color={colorInputText}
                          size="lg"
                          value={updatedProduct.image}
                          name="image"
                          onChange={(e) =>
                            setUpdatedProduct({
                              ...updatedProduct,
                              image: e.target.value,
                            })
                          }
                        />
                        <Box alignSelf={"end"}>
                          <HStack gap={4}>
                            <Button
                              bg={"blue.300"}
                              onClick={() =>
                                handleUpdateProduct(updatedProduct)
                              }
                            >
                              Update
                            </Button>
                            <Popover.CloseTrigger asChild>
                              <Button bg={"gray.100"}>Cancel</Button>
                            </Popover.CloseTrigger>
                          </HStack>
                        </Box>
                      </VStack>
                    </Popover.Body>
                  </Popover.Content>
                </Popover.Positioner>
              </Portal>
            </Popover.Root>
            <IconButton
              bg={"red.300"}
              name="handleDeleteProduct"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <LuTrash />
            </IconButton>
          </HStack>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductCard;
