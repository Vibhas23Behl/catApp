import {
    DARK,LIGHT
  } from "../constants/theme";
  
  
  export const loggingIn = (mode) => ({
    type: DARK,
    payload: mode
  });
  
  export const loggedIn = (mode) => ({
    type: LIGHT,
    payload: mode,
  });
  
  