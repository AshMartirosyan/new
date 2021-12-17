import React, { useCallback, useEffect, useRef, useState } from "react";
import "../../styles/inputStyle.css";
import styled from "styled-components";
import { Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseText,
  InputHelperText,
  InputsContainer,
  CustomInput,
  CustomPasswordInput,
  EyeIcon,
  HidedEyeIcon,
  ButtonContainer,
  PositiveButton,
  ErrorMessage,
} from "../../components";
import Checkbox from "../../components";

import { userLogin, errorAction, getMe } from "../../store/actions/index";
import { useNavigate, Link } from "react-router-dom";
import { isEmpty, map, filter } from "lodash";
import { validation } from "../../util/validation";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`;

const LoginComponent = styled.div`
  display: flex;
  margin-top: 44px;
  min-height: 100px;
  min-width: 200px;
  width: 420px;
  height: auto;
  flex-direction: column;
  align-items: center;
`;

const LinkedTextContainer = styled.div`
  margin-top: 18px;
  width: auto;
  height: auto;
`;

const LinkedText = styled(Link)`
  margin-top: 18px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.77);
  &:hover {
    color: rgba(113, 253, 30, 0.77);
  }
`;

const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 24px;
`;

const BottomText = styled.div`
  font-style: normal;
  margin-right: 3px;
  font-weight: 300px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.96);
`;

const LinkedForgotPassword = styled(Link)`
  font-style: normal;
  font-weight: 300px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.96);

  &:hover {
    color: rgba(113, 253, 30, 0.77);
  }
`;

const Divider = styled.div`
  margin-top: 6px;
  height: 1px;
  background-color: rgba(113, 253, 30, 0.77);
`;

const CheckboxContainer = styled.div``;

export function LoginTestScreen() {
  const [signUp, setSignUp] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callback = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const error = useSelector((state) => {
    if (state.error) {
      return state.error.error;
    }
  });

  useEffect(() => {
    if (error.statusCode) {
      switch (error.statusCode) {
        case 400: {
          alert(error.message);
          break;
        }
        case 401: {
          alert("Please Login First");
          break;
        }
        case 404: {
          alert("Server Not Found");
          break;
        }
        default: {
          alert("Unexpected Error");
        }
      }
    }
  }, [error]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      dispatch(getMe(callback));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const data = {
    //   email: e.target["email"].value,
    //   password: e.target["password"].value,
    // };

    const data = {
      email: "gagik.chilingaryan2020@gmail.com",
      password: "12345a",
    };

    const conditionsArray = [
      {
        condition: isEmpty(data.email),
        callback: setEmailError("Please input your Email!"),
      },
      {
        condition: isEmpty(data.password),
        callback: setPasswordError("Please input your Password!"),
      },
    ];

    const errorArray = map(
      filter(conditionsArray, (obj) => obj.condition === true),
      (obj) => obj.callback()
    );

    if (isEmpty(errorArray)) {
      dispatch(userLogin(data, callback));
    }
  };

  const emailValidation = (e) =>
    !isEmpty(e.target.value) && !validation.email.test(e.target.value)
      ? setEmailError("Please enter valid email address.")
      : setEmailError("");

  const passwordValidation = (e) => {
    !isEmpty(e.target.value) && !validation.password.test(e.target.value)
      ? setPasswordError(
          "Password must has 6 characters that include at least 1 lowercase,1 uppercase, 1 number and one spceial character in (!@#$%^&*)"
        )
      : setPasswordError("");
  };

  return (
    <BaseComponent>
      <LoginComponent>
        <BaseText>{!signUp ? "LOGIN" : "REGISTER"}</BaseText>
        <LinkedTextContainer>
          {!signUp ? (
            <LinkedText
              to="/signup"
              onClick={(e) => {
                setSignUp(true);
              }}
            >
              REGISTER?
            </LinkedText>
          ) : (
            <LinkedText
              to="/"
              onClick={(e) => {
                setSignUp(false);
              }}
            >
              LOG IN?
            </LinkedText>
          )}
          <Divider />
        </LinkedTextContainer>
        <InputsContainer onSubmit={handleSubmit}>
          {signUp ? (
            <>
              <InputHelperText>First Name</InputHelperText>
              <CustomInput id="first" />
              <InputHelperText>Last Name</InputHelperText>
              <CustomInput id="last" />
            </>
          ) : null}
          <InputHelperText>Email</InputHelperText>
          <CustomInput id="email" onChange={emailValidation} />
          {emailError !== "" ? <ErrorMessage>{emailError}</ErrorMessage> : null}
          <InputHelperText>Password</InputHelperText>
          <CustomPasswordInput
            id="password"
            className="password"
            iconRender={(visible) => (visible ? <EyeIcon /> : <HidedEyeIcon />)}
            onChange={passwordValidation}
          />
          {passwordError !== "" ? (
            <ErrorMessage>{passwordError}</ErrorMessage>
          ) : null}
          <ButtonContainer>
            <PositiveButton type="submit">LOGIN</PositiveButton>
          </ButtonContainer>
          <BottomTextContainer>
            {!signUp ? (
              <LinkedForgotPassword to="/forgot" disable={true}>
                FORGOT PASSWORD?
              </LinkedForgotPassword>
            ) : (
              <>
                <BottomText>ALREADY MEMBER?</BottomText>
                <LinkedForgotPassword
                  to="/"
                  onClick={(e) => {
                    setSignUp(false);
                  }}
                  style={{ color: "rgba(113, 253, 30, 0.77)" }}
                >
                  LOG IN?
                </LinkedForgotPassword>
              </>
            )}
          </BottomTextContainer>
        </InputsContainer>
      </LoginComponent>
    </BaseComponent>
  );
}
