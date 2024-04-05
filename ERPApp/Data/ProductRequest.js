import url from "./DbURL";

const BASE_URL = url + "Product";
// GET-Anfrage mit ID
const getProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// GET-Anfrage
const getAllProducts = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// DELETE-Anfrage
const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    console.log("Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

// PUT-Anfrage
const updateProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (!response.ok) {
      throw new Error("Failed to update product");
    }
    console.log("Product updated successfully");
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

// POST-Anfrage
const addProduct = async (newProduct) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }
    console.log("Product added successfully");
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};

export { getProduct, deleteProduct, updateProduct, getAllProducts, addProduct };
