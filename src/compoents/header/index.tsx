import React from "react";
import * as Style from "./styles";
import logo from "./logo.png";

export default function Header() {
  return (
    <Style.Layout data-cy="Layout">
      <a href={"#!"}>
        <img src={logo} alt="logo" />
      </a>
    </Style.Layout>
  );
}
