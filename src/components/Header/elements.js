import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainHeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #ffffff;
  transition: box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
`;

export const Title = styled.h1`
  margin-left: 0.2rem;
  margin-top: 0.36rem;
  font-weight: 600;
  user-select: none;
  font-size: 2rem;
  color: #000;
`;
