import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/Header";
import Input from "../../components/Input";

import {
  SignUpWrapper,
  SignUpContainer,
  SubmitButtonWrapper,
  SubmitButton,
  SignUpTitle,
  ErrorMessageContainer,
  ButtonsWrapper,
  LoginButtonLink,
  LogInButton,
  // LoadingSpinner,
} from "./elements";
import {
  signupPageSelector,
  signupUser,
  updateCreateAccount,
  updateErrorMsg,
} from "./reducer";

export default function SignupPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (typeof token !== "undefined" && token != null)
      window.location = "/home";
  }, []);
  // const [password, setPassword] = useState("");
  const { createAccount, errorMsg, successMsg } =
    useSelector(signupPageSelector);

  // componentDidMount() {
  //   const { successMsg, onUpdateSuccessMsg } = this.props;
  //   if (successMsg) {
  //     onUpdateSuccessMsg();
  //     const token = window.localStorage.getItem('userToken');
  //     token ? (window.location = '/app/home') : '';
  //   }
  // }

  const handleOnSubmitClick = (e) => {
    e.preventDefault();
    const { password1, password2 } = createAccount;
    if (password1 !== password2)
      dispatch(updateErrorMsg("Password mismatched !"));
    else dispatch(signupUser(createAccount));
  };

  const handleFormChange = (name, value) => {
    dispatch(updateCreateAccount({ name, value: value.trim() }));
  };
  return (
    <div>
      <Helmet>
        <title>SignUp</title>
        <meta name="description" content="Description of SignUp" />
      </Helmet>
      <Header height={40} width={40} url="/">
        <ButtonsWrapper>
          <LoginButtonLink to="/login">
            <LogInButton>Log in</LogInButton>
          </LoginButtonLink>
          {/* <LoginButtonLink to="/signup">
            <LogInButton bgColor="#d8625e" variant="danger">
              Sign up
            </LogInButton>
          </LoginButtonLink> */}
        </ButtonsWrapper>
      </Header>
      <SignUpWrapper>
        <SignUpTitle>SIGN UP</SignUpTitle>
        <SignUpContainer onSubmit={handleOnSubmitClick}>
          <Input
            name="userName"
            type="text"
            placeholder="Enter User Name"
            onChange={({ target }) =>
              handleFormChange("userName", target.value)
            }
            required
          />
          <Input
            name="email"
            type="email"
            placeholder=" Enter Email "
            onChange={({ target }) => handleFormChange("email", target.value)}
            required
          />
          <Input
            name="mobileNo"
            type="text"
            placeholder="Enter Mobile Number"
            onChange={({ target }) =>
              handleFormChange("mobileNo", target.value)
            }
            required
          />
          <Input
            name="password1"
            type="password"
            placeholder="Enter password"
            onChange={({ target }) =>
              handleFormChange("password1", target.value)
            }
            required
          />
          <Input
            name="password2"
            type="password"
            placeholder="confirm password"
            onChange={({ target }) =>
              handleFormChange("password2", target.value)
            }
            required
          />
          <SubmitButtonWrapper>
            <SubmitButton type="submit">Submit</SubmitButton>
            {/* <LoadingSpinner /> */}
          </SubmitButtonWrapper>
        </SignUpContainer>
        {errorMsg ? (
          <ErrorMessageContainer bgColor="#d8625e">
            {errorMsg}
          </ErrorMessageContainer>
        ) : successMsg ? (
          <ErrorMessageContainer bgColor="#4BDA49">
            Registration Successful
          </ErrorMessageContainer>
        ) : (
          ""
        )}
      </SignUpWrapper>
    </div>
  );
}
