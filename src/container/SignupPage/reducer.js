import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const signupPage = createSlice({
  name: "signupPage",
  initialState: {
    createAccount: {},
    errorMsg: "",
    successMsg: "",
  },
  reducers: {
    updateCreateAccount: (state, { payload }) => {
      state.createAccount[payload.name] = payload.value;
      state.errorMsg = "";
      state.successMsg = "";
    },
    updateErrorMsg: (state, { payload }) => {
      state.errorMsg = payload;
      state.successMsg = "";
    },
    updateSuccessMsg: (state, { payload }) => {
      state.successMsg = payload;
      state.errorMsg = "";
    },
  },
});
//Actions
export const { updateCreateAccount, updateErrorMsg, updateSuccessMsg } =
  signupPage.actions;
// Selector
export const signupPageSelector = (state) => state.signupPage;

export const signupUser = (data) => async (dispatch) => {
  const { email, password1, mobileNo, userName } = data;
  const payload = {
    email,
    password: password1,
    mobileNo,
    userName,
  };
  try {
    const res = await axios.post(
      "https://min-cart-api.herokuapp.com/api/signup",
      payload
    );
    res.statusText === "OK"
      ? dispatch(updateSuccessMsg("Profile Created Successfully"))
      : dispatch(updateErrorMsg("Something Went Wrong !"));
  } catch (err) {
    console.log(err);
    dispatch(updateErrorMsg("Something Went Wrong !"));
  }
};

export default signupPage;
