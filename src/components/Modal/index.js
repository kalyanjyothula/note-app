import React, { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import Cross from "../../icons/Cross";
import {
  ModelButtonsContainer,
  ModelCloseCrossIcon,
  ModelContainerWrapper,
  ModelInputFieldsContainer,
  ModelUserMsgContainer,
  ModelWrapper,
  ModelWrapperBox,
} from "./elements";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Model(props) {
  const dispatch = useDispatch();
  const {
    title,
    description,
    onChangeDescription,
    onChangeTitle,
    openModal,
    onFormSubmit,
    successMsg,
    errorMsg,
  } = props;
  return (
    <ModelContainerWrapper>
      <ModelWrapper>
        <ModelWrapperBox>
          <ModelCloseCrossIcon onClick={() => dispatch(openModal())}>
            <Cross />
          </ModelCloseCrossIcon>
          <ModelInputFieldsContainer onSubmit={onFormSubmit}>
            <Input
              type="text"
              placeholder="Enter Note Title here .."
              name="title"
              value={title}
              onChange={onChangeTitle}
            />
            <TextArea
              rows="6"
              cols="50"
              type="text"
              name="description"
              placeholder="Enter Note description here ... "
              value={description}
              onChange={onChangeDescription}
            />
            <ModelButtonsContainer>
              <Button
                type="button"
                variant="danger"
                onClick={() => dispatch(openModal())}
              >
                Cancel
              </Button>
              <Button type="submit" name="submitNote">
                Submit
              </Button>
            </ModelButtonsContainer>
            {successMsg ? (
              <ModelUserMsgContainer>{successMsg}</ModelUserMsgContainer>
            ) : (
              ""
            )}
            {errorMsg ? (
              <ModelUserMsgContainer color="red">
                {errorMsg}
              </ModelUserMsgContainer>
            ) : (
              ""
            )}
          </ModelInputFieldsContainer>
        </ModelWrapperBox>
      </ModelWrapper>
    </ModelContainerWrapper>
  );
}
