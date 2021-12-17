import styled from "styled-components";
import { map } from "lodash";

const DropDownMenuContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  min-height: 30px;
  width: 96px;
  margin-top: 64px;
  margin-right: 8px;
  top: 0;
  right: 0;
  border: ${(props) => props.border};
  border-radius: 4px;
  background-color: #343434;
`;

const TextComponent = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  font-weight: normal;
  font-size: 14px;
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 0.88);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Divider = styled.div`
  width: 62px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.08);
`;

export const DropDownMenu = (props) => {
  return (
    <DropDownMenuContainer border={props.border}>
      {map(props.menuItems, (item, index) => {
        return (
          <>
            <TextComponent onClick={item.onClick}>{item.text}</TextComponent>
            {index === props.menuItems.length - 1 ? null : <Divider />}
          </>
        );
      })}
    </DropDownMenuContainer>
  );
};
