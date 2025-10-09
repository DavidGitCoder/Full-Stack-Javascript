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
    const res = await fetch("/api/products", {
      method: "GET",
    });
    const data = await res.json();
    const products = data.data;
    set({ products: products });
    return { success: true, message: "Successfully retrieved all products" };
  },
}));
