import React from "react";
import { InputContainer, IconWrapper, TextInput } from "./elements";

export default function Input(props) {
  const { icon, ...restProps } = props;
  return (
    <InputContainer>
      {icon ? <IconWrapper>{icon}</IconWrapper> : null}
      <TextInput {...restProps} />
    </InputContainer>
  );
}
