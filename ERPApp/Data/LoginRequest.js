import axios from "axios";

const login = async (name, password) => {
  try {
    const response = await axios.post(
      "http://192.168.178.86:5254/Login",
      {
        Name: name,
        Password: password,
        Info: "",
        Email: "",
        Address: "",
        LastName: "",
        Phonenumber: "",
        Role: "User",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      const token = response.data;
      console.log("Erfolgreich angemeldet mit Token");
      return token;
    } else {
      throw new Error("Anmeldung fehlgeschlagen");
    }
  } catch (error) {
    console.error("Fehler beim Abrufen der Anmeldung:", error);
    console.log(error.response.data);
    throw error;
  }
};

export { login };
