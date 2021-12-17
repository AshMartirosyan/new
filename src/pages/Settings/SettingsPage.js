import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/inputStyle.css";
import { useNavigate } from "react-router-dom";
import { getMe, errorAction, changePassword } from "../../store/actions/index";
import styled from "styled-components";
import { isEmpty, isEqual, filter, map } from "lodash";
import { validation } from "../../util/validation";
import {
  CustomInput,
  CustomPasswordInput,
  BaseText,
  InputHelperText,
  EyeIcon,
  HidedEyeIcon,
  InputsContainer,
  PositiveButton,
  NegativeButton,
  ButtonContainer,
  ErrorMessage,
} from "../../components";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4px;
  width: 420px;
  height: 100%;
`;

export function SettingsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newPasswordRef = useRef();

  const userData = useSelector((state) => state.user.userData);
  const isPasswordChanged = useSelector(
    (state) => state.user.isPasswordChanged
  );

  const [oldPassError, setOldPassError] = useState("");
  const [newPassError, setNewPassError] = useState("");
  const [confirmPassError, setConfirmPassError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      if (userData.id === null) {
        dispatch(getMe(() => {}));
      }
    } else {
      navigate("/");
      dispatch(
        errorAction({
          statusCode: 401,
          message: "Unautorized",
          error: "Not token",
        })
      );
    }
  }, []);

  const oldPasswordValidation = (e) =>
    !isEmpty(e.target.value) && !validation.email.test(e.target.value)
      ? setOldPassError(
          "Password must has 6 characters that include at least 1 lowercase,1 uppercase, 1 number and one spceial character in (!@#$%^&*)"
        )
      : setOldPassError("");

  const newPasswordValidation = (e) =>
    !isEmpty(e.target.value) && !validation.password.test(e.target.value)
      ? setNewPassError(
          "Password must has 6 characters that include at least 1 lowercase,1 uppercase, 1 number and one spceial character in (!@#$%^&*)"
        )
      : setNewPassError("");

  const repitePasswordValidation = (e) => {
    !isEmpty(e.target.value) &&
    !isEqual(newPasswordRef.current.state.value, e.target.value)
      ? setConfirmPassError("Passwords are not equal")
      : setConfirmPassError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      password: e.target["oldPass"].value,
      newPassword: e.target["newPass"].value,
      confirmNewPassword: e.target["repitePass"].value,
    };

    const conditionsArray = [
      {
        condition: isEmpty(data.password),
        callback: () => setOldPassError("Please input your old password!"),
      },
      {
        condition: isEmpty(data.newPassword),
        callback: () => setNewPassError("Please input your new password!"),
      },
      {
        condition: isEmpty(data.confirmNewPassword),
        callback: () =>
          setConfirmPassError("Please input your repite password!"),
      },
    ];

    const errorArray = map(
      filter(conditionsArray, (obj) => obj.condition === true),
      (obj) => obj.callback()
    );

    if (isEmpty(errorArray)) {
      dispatch(changePassword(data));
    }
  };

  return (
    <BaseComponent>
      <SettingsContainer>
        <BaseText>SETTINGS</BaseText>
        <InputsContainer onSubmit={handleSubmit}>
          <InputHelperText>First Name</InputHelperText>
          <CustomInput value={userData.firstName} readOnly />
          <InputHelperText>Last Name</InputHelperText>
          <CustomInput value={userData.lastName} readOnly />
          <InputHelperText>Email</InputHelperText>
          <CustomInput value={userData.email} readOnly />
          <InputHelperText>Old Password</InputHelperText>
          <CustomPasswordInput
            className="password"
            type="password"
            id="oldPass"
            onChange={oldPasswordValidation}
            iconRender={(visible) => (visible ? <EyeIcon /> : <HidedEyeIcon />)}
          />
          {oldPassError !== "" ? (
            <ErrorMessage>{oldPassError}</ErrorMessage>
          ) : null}
          <InputHelperText>New Password</InputHelperText>
          <CustomPasswordInput
            className="password"
            id="newPass"
            size="large"
            type="password"
            ref={newPasswordRef}
            onChange={newPasswordValidation}
            iconRender={(visible) => (visible ? <EyeIcon /> : <HidedEyeIcon />)}
          />
          {newPassError !== "" ? (
            <ErrorMessage>{newPassError}</ErrorMessage>
          ) : null}
          <InputHelperText>Confirm Password</InputHelperText>
          <CustomPasswordInput
            className="password"
            type="password"
            id="repitePass"
            onChange={repitePasswordValidation}
            iconRender={(visible) => (visible ? <EyeIcon /> : <HidedEyeIcon />)}
          />
          {confirmPassError !== "" ? (
            <ErrorMessage>{confirmPassError}</ErrorMessage>
          ) : null}

          <ButtonContainer>
            <PositiveButton type="submit">SAVE</PositiveButton>
            <NegativeButton
              onClick={() => {
                navigate("/home");
              }}
            >
              CANCEL
            </NegativeButton>
          </ButtonContainer>
          {isPasswordChanged ? <div>changed successfully</div> : null}
        </InputsContainer>
      </SettingsContainer>
    </BaseComponent>
  );
}
