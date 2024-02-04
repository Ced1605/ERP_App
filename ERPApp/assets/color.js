let isLightMode = true;

export const lightModeColors = {
  color1: "#343090",
  color2: "#5f59f7",
  color3: "#6592fd",
  color4: "#44c2fd",
  color5: "#8c61ff",
  background1: "#f0f0f0",
  background2: "#e0e0e0",
  background3: "#e0e0e0",
  header: "#f0f0f0",
  text: "#000000",
  graytest: "#525252d7",
  white: "white",
  bordercolor: "#242323",
  bordercolor2: "#00000000",
  color3T: "#6593fd91",
  black: "black",
  shadow: "#000",
};
export const darkModeColors = {
  color1: "#343090",
  color2: "#5f59f7",
  color3: "#6592fd",
  color4: "#44c2fd",
  color5: "#8c61ff",
  background1: "#151515",
  background2: "#040404",
  background3: "#424242",
  header: "#424242",
  text: "#dbdbdb",
  graytest: "#525252d7",
  white: "#151515",
  bordercolor: "#242323",
  bordercolor2: "#00000000",
  color3T: "#6593fd91",
  black: "#dbdbdb",
  shadow: "#101010",
};
const colors = lightModeColors;

export const getColors = () => {
  const colors = isLightMode ? lightModeColors : darkModeColors;
  return colors;
};

export const toggleLightMode = () => {
  isLightMode = !isLightMode;
};
export default colors;
