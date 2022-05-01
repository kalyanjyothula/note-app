import styled from "styled-components";
import Edit from "../../icons/Edit";
import Delete from "../../icons/Delete";

export const NoteCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  height: 300px;
  width: 320px;
  position: relative;
  transition: box-shadow 0.15s ease;
  background: #ffffaa;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
  border: 1px solid lightgray;
  border-radius: 4px;
  &:hover {
    box-shadow: 0 5px 5px -5px rgba(0, 0, 0, 0.5);
  }
`;

export const NoteCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid grey;
  padding: 2px 4px;
`;

export const NoteCardTitle = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  color: #000f00;
`;

export const NoteCardDate = styled.div`
  font-size: 0.6rem;
  text-align: center;
  font-weight: 600;
`;

export const NoteCardContentContainer = styled.div`
  color: gray;
  font-size: 0.8rem;
  padding: 5px 8px;
  height: 238px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  position: relative;
`;

export const NoteCardContentBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px 10px;
  position: absolute;
  bottom: 4px;
  right: 10px;
  /* top: 260px; */
`;

export const NoteCardContentIconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-basis: 30%;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
