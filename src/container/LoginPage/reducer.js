import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const loginPage = createSlice({
  name: "loginPage",
  initialState: { token: "", userDetails: {} },
  reducers: {
    updateUserDetails: (state, { type, payload }) => {
      state.userDetails[payload.name] = payload.value;
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

export const { updateUserDetails, updateSuccessMsg, updateErrorMsg } =
  loginPage.actions;

export const loginPageSelector = (state) => state.loginPage;
export const login = (userDetails) => async (dispatch) => {
  try {
    const {
      data: { success, token },
    } = await axios.post(
      "https://min-cart-api.herokuapp.com/api/login",
      userDetails
    );
    console.log(success, token, "res");
    if (success) {
      window.localStorage.setItem("userToken", JSON.stringify(token));
      window.location = "/home";
    }
  } catch (err) {
    console.log(err);
    dispatch(updateErrorMsg("Something Went Wrong !"));
  }
};

export default loginPage;
