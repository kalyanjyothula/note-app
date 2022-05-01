import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { login, loginPageSelector, updateUserDetails } from "./reducer";
import Header from "../../components/Header";
import Input from "../../components/Input";
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  LoginIconContainer,
  LoginInputContainer,
  LogInButtonContainer,
  LogInButton,
  LinkContainer,
  LinkButton,
  ButtonsWrapper,
  ErrorMessageContainer,
  LoginButtonLink,
} from "./elements";

export default function LoginPage(props) {
  useEffect(() => {
    const token = window.localStorage.getItem("userToken");
    if (typeof token !== 'undefined' && token != null) window.location = "/home";
  
  }, []);
  const dispatch = useDispatch();
  const { userDetails } = useSelector(loginPageSelector);

  function handleFormChange(name, value) {
    dispatch(updateUserDetails({ name, value }));
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userDetails));
  };
  const errorMsg = "";
  return (
    <React.Fragment>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of SignIn" />
      </Helmet>
      <Header height={40} width={40} url="/home">
        <ButtonsWrapper>
          {/* <LoginButtonLink to="/login">
            <LogInButton>Log in</LogInButton>
          </LoginButtonLink> */}
          <LoginButtonLink to="/signup">
            <LogInButton bgColor="#d8625e" variant="danger">
              Sign up
            </LogInButton>
          </LoginButtonLink>
        </ButtonsWrapper>
      </Header>
      <LoginWrapper>
        <LoginContainer>
          <LoginIconContainer />
          <LoginTitle>sign in with credentials</LoginTitle>
          <LoginInputContainer onSubmit={handleOnSubmit}>
            <Input
              name="email"
              type="email"
              onChange={({ target }) => handleFormChange("email", target.value)}
              placeholder="Enter email"
              // {...register("email")}
              required
            />
            <Input
              name="password"
              type="password"
              // icon={<Password />}
              placeholder="Enter password"
              onChange={({ target }) =>
                handleFormChange("password", target.value)
              }
              // {...register("password")}
              required
            />
            <LogInButtonContainer>
              <LogInButton type="submit" name="submit_button">
                Login
              </LogInButton>
            </LogInButtonContainer>
          </LoginInputContainer>
          <LinkContainer>
            <LinkButton to="/forgot-password">Forgot password</LinkButton>
            <LinkButton to="/signup">Create new account</LinkButton>
          </LinkContainer>
        </LoginContainer>
        {errorMsg ? (
          <ErrorMessageContainer>{errorMsg}</ErrorMessageContainer>
        ) : (
          ""
        )}
      </LoginWrapper>
    </React.Fragment>
  );
}
