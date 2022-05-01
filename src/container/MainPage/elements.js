import styled from "styled-components";
import { Button } from "react-bootstrap";

export const MainPageContainerWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const MainPageButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: auto 15px;
`;
export const MainPageButton = styled(Button)`
  text-transform: uppercase;
  margin: 2px 10px;
  background: #049eeb;
  font-weight: 400;
  border: 1px solid #049eeb;
`;

export const MainPageNotesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
