import React from "react";
import Delete from "../../icons/Delete";
import Edit from "../../icons/Edit";
import Fav from "../../icons/Fav";
import { Title } from "../Header/elements";
import {
  EditIcon,
  DeleteIcon,
  NoteCardContainer,
  NoteCardContentBottomContainer,
  NoteCardContentContainer,
  NoteCardContentIconsWrapper,
  NoteCardDate,
  NoteCardTitle,
  NoteCardTitleContainer,
  IconWrapper,
} from "./elements";

export default function NoteCard(props) {
  const { title, description, fav, id, onChangeFav, onDelete, onEdit } = props;
  return (
    <NoteCardContainer>
      <NoteCardTitleContainer>
        <NoteCardTitle>{title}</NoteCardTitle>
        {/* <NoteCardDate>12-01-2022</NoteCardDate> */}
      </NoteCardTitleContainer>
      <NoteCardContentContainer>{description}</NoteCardContentContainer>
      <NoteCardContentBottomContainer>
        <NoteCardContentIconsWrapper>
          <IconWrapper>
            <Edit
              color="#1F93F9"
              height={18}
              width={18}
              onClick={() => onEdit({ id, title, description, fav })}
            />
          </IconWrapper>
          <IconWrapper>
            <Delete
              color="#D13D1C"
              height={18}
              width={18}
              onClick={() => onDelete(id)}
            />
          </IconWrapper>
        </NoteCardContentIconsWrapper>
        <IconWrapper>
          <Fav
            color={fav ? "#EC1F07" : "rgba(100, 100, 100, 0.4)"}
            onClick={() => onChangeFav(id)}
          />
        </IconWrapper>
      </NoteCardContentBottomContainer>
    </NoteCardContainer>
  );
}
