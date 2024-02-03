export const lightMode = false;

export const lightModeColors = {
  color1: "#343090",
  color2: "#5f59f7",
  color3: "#6592fd",
  color4: "#44c2fd",
  color5: "#8c61ff",
  background1: "#f0f0f0",
  background2: "#e0e0e0",
  text: "#000000",
  graytest: "#525252d7",
  white: "white",
  bordercolor: "#242323",
  bordercolor2: "#00000000",
  color3T: "#6593fd91",
  black: "black",
  shadow: "#000",
  background3: "#e0e0e0",
};
export const darkModeColors = {
  color1: "#343090",
  color2: "#5f59f7",
  color3: "#6592fd",
  color4: "#44c2fd",
  color5: "#8c61ff",
  background1: "#101010",
  background2: "#000000",
  text: "#dbdbdb",
  graytest: "#525252d7",
  white: "#101010",
  bordercolor: "#242323",
  bordercolor2: "#00000000",
  color3T: "#6593fd91",
  black: "#dbdbdb",
  shadow: "#101010",
  background3: "#424242",
};

const colors = lightMode === true ? lightModeColors : darkModeColors;
export default colors;
