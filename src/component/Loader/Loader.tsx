import React from "react";
import { LoaderStyled } from "./Loader.styled";

const Loader = (props: { show: boolean }): JSX.Element => (
  <LoaderStyled show={props.show} />
);

export default Loader;
