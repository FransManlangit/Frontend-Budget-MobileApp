import * as React from "react";
import Main from "../navigators/Main";

import { NativeBaseProvider, extendTheme } from "native-base";


const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
const theme = extendTheme({ colors: newColorTheme });



function App() {
  return (


    <Main />


  );
}

export default App;
