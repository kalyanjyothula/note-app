import styled from "styled-components";

export const ModelContainerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModelWrapper = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  width: 50%;
  height: auto;
  padding: 0.56rem;
  position: relative;
  @media screen and (max-width: 32em) {
    width: 65%;
  }
`;

export const ModelWrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const ModelCloseCrossIcon = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: row-reverse;
  margin: 0.5rem;
  /* margin-bottom: 0.5rem; */
  cursor: pointer;
`;

export const ModelInputFieldsContainer = styled.form`
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* align-items: center; */
`;

export const ModelButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2px 10px;
`;

export const ModelUserMsgContainer = styled.div`
  height: 30px;
  width: 100%;
  font-size: 0.9rem;
  background-color: ${({ color }) => (color ? color : "green")};
  color: #fff;
  border-radius: 3px;
  align-content: center;
  text-align: center;
  margin: 6px 0px;
  padding: 5px 4px;
`;
