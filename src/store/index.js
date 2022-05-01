import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginPage from "../container/LoginPage/reducer";
import signupPage from "../container/SignupPage/reducer";
import mainPage from "../container/MainPage/reducer";

const reducer = combineReducers({
  loginPage: loginPage.reducer,
  signupPage: signupPage.reducer,
  mainPage: mainPage.reducer,
});

const store = configureStore({
  reducer,
});

export default store;
