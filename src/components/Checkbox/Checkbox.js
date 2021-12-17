import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as CheckedIcon } from "./checked.svg";
import { ReactComponent as UncheckedIcon } from "./unchecked.svg";

const BaseComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
  &:hover {
    background-color: rgba(113, 253, 30, 0.3);
  }
`;

export const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <BaseComponent
      onClick={() => {
        isChecked ? setIsChecked(false) : setIsChecked(true);
      }}
    >
      {isChecked ? <CheckedIcon /> : <UncheckedIcon />}
    </BaseComponent>
  );
};
