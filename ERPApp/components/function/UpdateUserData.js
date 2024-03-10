import CurrenUserData from "../../Data/LoginUserData";

const updateUserData = (newData) => {
  if (CurrenUserData.length > 0) {
    // Aktualisiere jedes Feld in den Benutzerdaten
    Object.keys(newData).forEach((key) => {
      if (key in CurrenUserData[0]) {
        CurrenUserData[0][key] = newData[key];
      }
    });
  }
};

export default updateUserData;
