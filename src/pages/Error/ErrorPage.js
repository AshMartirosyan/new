import React from "react";
import { BaseComponent } from "../../components";
import errorImage from "./404.png";

export const ErrorPage = () => {
  return (
    <BaseComponent>
      <img src={errorImage} alt="404 Not Found" width="auto" height="auto" />
    </BaseComponent>
  );
};
