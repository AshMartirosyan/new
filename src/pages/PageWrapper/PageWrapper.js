import React, { useState, useRef, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ImageView, NavLinkContainer } from "../../components";
import { BorderColors } from "../../styles/colors";
import {
  leftBorderTopPartHeight,
  leftBorderBottomPartHeight,
} from "../../util/style";
import BackgroundImage from "../../assets/images/bg_img.png";
import { ReactComponent as HomeIcon } from "./icons/HomeIcon.svg";
import { ReactComponent as HomeIconSelected } from "./icons/HomeIconSelected.svg";
import { ReactComponent as ClubIcon } from "./icons/ClubIcon.svg";
import { ReactComponent as ClubIconSelected } from "./icons/ClubIconSelected.svg";
import { ReactComponent as CallendarIcon } from "./icons/CallendarIcon.svg";
import { ReactComponent as CallendarIconSelected } from "./icons/CallendarIconSelected.svg";
import { ReactComponent as UserIcon } from "./icons/UserIcon.svg";
import { ReactComponent as UserIconSelected } from "./icons/UserIconSelected.svg";
import { ReactComponent as LogoutIcon } from "./icons/LogoutIcon.svg";
import { DropDownMenu } from "../../components/DropDownContainer";

import styled from "styled-components";

const WholeScreen = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  overflow: hidden;
`;

const BaseComponent = styled.div`
  display: flex;
  margin-top: 80px;
  margin-bottom: 158px;
  margin-left: 96px;
  margin-right: 96px;
  justify-content: center;
`;

const ContentContainer = styled(BaseComponent)`
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const LeftSider = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  width: 64px;
`;
const LeftSiderWithCurvedEffect = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const RightSideComponent = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
`;

const RoundedComponent = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: ${(props) => props.border};
  border-radius: 8px;
`;

//To Do: There is bug, when chenged screen, please calculate screen size, when it's changes
const SiderRoundedComponent = styled(RoundedComponent)`
  border-left: 0;
  border-top-left-radius: ${(props) =>
    props.border === BorderColors.HOME ? "0" : "8px"};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: rgba(23, 23, 23, 0.8);

  //Top Part
  &:before {
    content: "";
    position: absolute;
    top: ${(props) => (props.border === BorderColors.HOME ? "63px" : "0")};
    height: ${(props) => leftBorderTopPartHeight(props.border)};
    width: 20px;
    border-left: ${(props) => props.border};
    border-top-left-radius: ${(props) =>
      props.border === BorderColors.HOME ? "0" : "8px"};
  }

  //Bottom Part
  &:after {
    content: "";
    position: absolute;
    height: ${(props) =>
      leftBorderBottomPartHeight(props.border, props.fullHeight)};
    bottom: 0px;
    width: 20px;
    border-left: ${(props) => props.border};
    border-bottom-left-radius: 8px;
  }
`;

const SettingsComponent = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 20px;
`;

const ChildCopmonent = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  padding: 24px;
`;

export function PageWrapper(props) {
  const navigate = useNavigate();
  const selectedTeamId = useSelector((state) => state.club.selectedTeamId);
  const resultComponentRef = useRef();
  const [resultComponentHeight, setResultComponentHeight] = useState();
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);
  useEffect(() => {
    setResultComponentHeight(resultComponentRef.current.clientHeight);
  });

  const dropDownMenuItems = [
    {
      text: "SETTINGS",
      onClick: () => {
        navigate("/settings");
        setIsDropDownOpened(false);
      },
    },
    {
      text: "LOGOUT",
      onClick: () => {
        sessionStorage.clear();
        navigate("/");
      },
    },
  ];

  const closeDropDown = () => {
    if (isDropDownOpened) setIsDropDownOpened(false);
  };

  return (
    <WholeScreen onClick={closeDropDown}>
      <img src={BackgroundImage} alt="backgroundImage" />
      <ContentContainer>
        {props.page === "Login" || props.page === "SignUp" ? null : (
          <LeftSider>
            <LeftSiderWithCurvedEffect>
              <NavLinkContainer
                to="/home"
                selectedIcon={<HomeIconSelected />}
                nonSelectedIcon={<HomeIcon />}
                border={props.border}
              />

              {sessionStorage.getItem("teamID") || selectedTeamId ? (
                <>
                  <NavLinkContainer
                    to="/club"
                    selectedIcon={<ClubIconSelected />}
                    nonSelectedIcon={<ClubIcon />}
                    border={props.border}
                  />
                  <NavLinkContainer
                    to="/games"
                    selectedIcon={<CallendarIconSelected />}
                    nonSelectedIcon={<CallendarIcon />}
                    border={props.border}
                  />
                  <NavLinkContainer
                    to="/team"
                    selectedIcon={<UserIconSelected />}
                    nonSelectedIcon={<UserIcon />}
                    border={props.border}
                  />
                </>
              ) : (
                <>
                  <ImageView icon={<ClubIcon />} disabled={true} />
                  <ImageView icon={<CallendarIcon />} disabled={true} />
                  <ImageView icon={<UserIcon />} disabled={true} />
                </>
              )}
            </LeftSiderWithCurvedEffect>
          </LeftSider>
        )}
        <RightSideComponent>
          {/* Please optimize */}
          {props.page === "Settings" ||
          props.page === "Login" ||
          props.page === "SignUp" ? (
            <RoundedComponent
              border={props.border}
              ref={resultComponentRef}
              fullHeight={resultComponentHeight}
            >
              {props.page === "Login" || props.page === "SignUp" ? null : (
                <SettingsComponent>
                  <ImageView
                    icon={<LogoutIcon />}
                    onClick={() =>
                      isDropDownOpened
                        ? setIsDropDownOpened(false)
                        : setIsDropDownOpened(true)
                    }
                  />
                </SettingsComponent>
              )}
              <ChildCopmonent>
                <Outlet />
              </ChildCopmonent>
            </RoundedComponent>
          ) : (
            <SiderRoundedComponent
              border={props.border}
              ref={resultComponentRef}
              fullHeight={resultComponentHeight}
            >
              <SettingsComponent>
                <ImageView
                  icon={<LogoutIcon />}
                  onClick={() =>
                    isDropDownOpened
                      ? setIsDropDownOpened(false)
                      : setIsDropDownOpened(true)
                  }
                />
              </SettingsComponent>
              <ChildCopmonent>
                <Outlet />
              </ChildCopmonent>
            </SiderRoundedComponent>
          )}
        </RightSideComponent>
        {isDropDownOpened ? (
          <DropDownMenu menuItems={dropDownMenuItems} border={props.border} />
        ) : null}
      </ContentContainer>
    </WholeScreen>
  );
}
