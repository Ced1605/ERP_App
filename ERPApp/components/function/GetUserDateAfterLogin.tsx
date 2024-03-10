import * as AuthSession from "expo-auth-session";
import { jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import { getUser } from "../../Data/UserRequest";
import updateUserData from "./UpdateUserData";

const GetLoginUserData = async (userToken) => {
  try {
    const decodedToken = jwtDecode(userToken);
    console.log("Dekodierte Token-Daten:", decodedToken);
    const userId = decodedToken && decodedToken.ID; //Doch

    if (!userId) {
      throw new Error("UserID nicht im Token gefunden");
    }

    try {
      const user = await getUser(userId);
      console.log("Benutzerdaten:", user);
      updateUserData({
        id: user.id,
        name: user.name,
        lastName: user.lastName,
        address: user.address,
        email: user.email,
        phoneNumber: user.phoneNumber,
        info: user.info,
        role: user.role,
        UserToken: userToken,
      });
    } catch (error) {
      console.error("Fehler beim Abrufen des Benutzers:", error.message);
    }
  } catch (error) {
    console.error("Fehler beim Dekodieren des Tokens:", error.message);
  }
};

export default GetLoginUserData;
