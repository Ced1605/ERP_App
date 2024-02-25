const BASE_URL = "http://192.168.178.86:5254/db/User";

// GET-Anfrage mit ID
const getUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

// POST-Anfrage für login mit name und password
const login = async (name, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });
    console.log("Response Status:", response.status);
    console.log("Response Status Text:", response.statusText);
    console.log("Response Headers:", response.headers);

    if (!response.ok) {
      throw new Error("Fehler beim Anmelden");
    }

    const responseData = await response.json();
    const { userId, message } = responseData;
    return { userId, message };
  } catch (error) {
    console.error("Fehler :", error);
    throw error;
  }
};

// DELETE-Anfrage
const deleteUser = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Failed to delete user");
    }
    console.log("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// PUT-Anfrage
const updateUser = async (id, updatedUser) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    console.log("User updated successfully");
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};

// GET-Anfrage
const getAllUsers = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// POST-Anfrage
const addUser = async (newUser) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (!response.ok) {
      throw new Error("Failed to add user");
    }
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

export { getUser, deleteUser, updateUser, getAllUsers, addUser, login };
