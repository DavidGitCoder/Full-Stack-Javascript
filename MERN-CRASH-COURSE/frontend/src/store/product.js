import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please provide product info" };
    }
    //calls the backend API to create a new record in MongoDB Atlas (cloud)
    const res = await fetch("/api/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const data = await res.json();
    set((state) => ({
      products: [...state.products, data.data],
    }));
    return { success: true, message: "Product created successfully" };
  },
  fetchProducts: async () => {
    //call the GET products API from the backend
    const res = await fetch("/api/products/");
    const data = await res.json();
    const products = data.data;
    set({ products: products });
    //return { success: true, message: "Successfully retrieved all products" };
  },
  updateProduct: async (product) => {
    const productID = product._id;
    const res = await fetch(`/api/products/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await res.json();
    set((state) => ({
      products: state.products.map((p) => (p._id === productID ? product : p)),
    }));
    const m = data.success
      ? "Product updated successfully"
      : "Error while updating";
    return { success: data.success, message: m };
  },
  deleteProduct: async (id) => {
    if (!id) {
      return { success: false, message: "ProductID is empty" };
    }
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    //update the UI immediately, without needing a refresh
    set((state) => ({
      products: state.products.filter((product) => product._id !== id),
    }));
    const m = data.success
      ? "Product deleted successfully"
      : "Error while deleting";
    return { success: data.success, message: m };
  },
}));
