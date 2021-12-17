import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  ${(props) =>
    !props.disabled
      ? `&:hover {
        cursor:pointer;
        opacity:0.3
  }`
      : `opacity:0.8`}
`;

export function ImageView(props) {
  return (
    <>
      <ImageContainer
        disabled={props.disabled}
        style={props.style}
        onClick={props.onClick}
        border={props.border}
      >
        {props.icon}
      </ImageContainer>
    </>
  );
}

export const NavLinkContainer = ({
  to,
  selectedIcon,
  nonSelectedIcon,
  border,
  onClick,
}) => {
  return (
    <NavLink exact="true" to={to}>
      {({ isActive }) =>
        isActive ? (
          <>
            <ImageView
              isActive={isActive}
              icon={selectedIcon}
              disabled={false}
              border={border}
              onClick={onClick}
              style={{
                backgroundColor: "rgba(23, 23, 23, 0.8)",
                borderRadius: "8px 0 0 8px",
                border: border,
                borderRight: 0,
              }}
            ></ImageView>
          </>
        ) : (
          <ImageView icon={nonSelectedIcon} disabled={false} />
        )
      }
    </NavLink>
  );
};
