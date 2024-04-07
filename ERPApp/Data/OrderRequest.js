import url from "./DbURL";

const BASE_URL = url + "Order";
// GET-Anfrage mit ID
const getOrder = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch Order");
    }
    const Order = await response.json();
    return Order;
  } catch (error) {
    console.error("Error fetching Order:", error);
    throw error;
  }
};

// GET-Anfrage
const getAllOrders = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }
    const orders = await response.json();
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};

// DELETE-Anfrage
const deleteOrder = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete Order");
    }
    console.log("Order deleted successfully");
  } catch (error) {
    console.error("Error deleting Order:", error);
    throw error;
  }
};

// PUT-Anfrage
const updateOrder = async (id, updatedOrder) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedOrder),
    });
    if (!response.ok) {
      throw new Error("Failed to update Order");
    }
    console.log("Order updated successfully");
  } catch (error) {
    console.error("Error updating Order:", error);
    throw error;
  }
};

// POST-Anfrage
const addOrder = async (newOrder) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    });

    if (!response.ok) {
      const errorMessage = `Failed to add Order: ${response.status} ${response.statusText}`;
      throw new Error(errorMessage);
    }

    console.log("Order added successfully");
  } catch (error) {
    console.error("Error adding Order:", error);
    throw error; // Optional: weiterleiten des Fehlers
  }
};

export { getOrder, deleteOrder, updateOrder, getAllOrders, addOrder };
