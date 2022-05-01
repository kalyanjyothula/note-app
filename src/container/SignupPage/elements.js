import styled from "styled-components";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SignUpWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

export const SignUpContainer = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  padding: 1rem;
  border-radius: 3px;
  background: rgb(244, 245, 247);
  @media screen and (max-width: 32em) {
    width: 90%;
  }
`;

export const SignUpTitle = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  padding: 0.4rem 0.8rem;
  border-radius: 2px;
  background: #d8625e;
  font-weight: 600;
  font-size: 0.98 rem;
  margin-bottom: 1rem;
  color: #fffadf;
  @media screen and (max-width: 32em) {
    width: 90%;
  }
`;

export const ErrorMessageContainer = styled.div`
  height: 40px;
  width: 50%;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  padding: 0.5rem 0.8rem;
  background: ${({ bgColor }) => bgColor || ""};
  margin-top: 0.5rem;
  border-radius: 5px;
  text-align: center;
  color: #fff;
  @media screen and (max-width: 32em) {
    width: 90%;
  }
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  /* position: relative; */
`;

export const SubmitButton = styled(Button)`
  height: 35px;
`;

export const LoadingSpinner = styled.div`
  border-radius: 50%;
  border-width: 3px;
  background-color: #000;
  border-top: 1px solid red;
  z-index: 100;
  height: 1rem;
  transform: rotateZ(60deg);
  width: 1rem;
  position: absolute;
  top: 10;
  right: 10px;
`;

export const ButtonsWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 32em) {
    width: 35%;
  }
`;

export const LogInButton = styled(Button)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  background: ${({ bgColor }) => bgColor || ""};
`;

export const LoginButtonLink = styled(Link)`
  text-decoration: none;
`;
