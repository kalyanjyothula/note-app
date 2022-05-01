import React from "react";
import Logo from "../../icons/Logo";
import { MainHeaderContainer, TitleContainer, Title } from "./elements";

function Header(props) {
  const { height, width, url, children } = props;
  return (
    <MainHeaderContainer>
      <TitleContainer to={url}>
        <Logo height={height} width={width} />
        <Title>NoteBook</Title>
      </TitleContainer>
      {children}
    </MainHeaderContainer>
  );
}

export default Header;
