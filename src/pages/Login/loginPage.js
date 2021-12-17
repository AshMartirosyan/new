import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Layout } from "antd";
import { Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BaseComponent } from "../../components/index";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import {
  userLogin,
  userSignUp,
  userLogged,
  errorAction,
  getMe,
} from "../../store/actions/index";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 990px;
  padding: 0px 50px 0px;
`;

export function LoginScreen() {
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
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
    location.pathname === "/" ? setSignUp(false) : setSignUp(true);
  }, [location]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) dispatch(getMe(callback));
  }, []);

  const onFinish = (value) => {
    if (!signUp) {
      const data = {
        email: "gagik.chilingaryan2020@gmail.com",
        password: "12345a",
      };
      dispatch(userLogin(data, callback));
      // dispatch(userLogin(value, callback));
    } else {
      const loginData = {
        email: emailRef.current.props.value,
        password: passwordRef.current.props.value,
      };
      //dispatch(userSignUp(value, loginData,callback));
    }
  };

  return (
    <BaseComponent>
      <LoginComponent>
        <Form
          name="normal_login"
          style={{ maxWidth: 300 }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {signUp ? (
            <>
              <Form.Item
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your First Name!",
                  },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
              <Form.Item
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your Last Name!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </>
          ) : null}
          <Form.Item name="email" rules={[]}>
            <Input
              prefix={
                !signUp ? (
                  <MailOutlined className="site-form-item-icon" />
                ) : null
              }
              placeholder="Email"
              ref={emailRef}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={
                !signUp ? (
                  <LockOutlined className="site-form-item-icon" />
                ) : null
              }
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              {!signUp ? "Log in" : "Sign Up"}
            </Button>
            {!signUp ? (
              <>
                Or{" "}
                <Link
                  to="/signup"
                  onClick={(e) => {
                    setSignUp(true);
                  }}
                >
                  register now!
                </Link>
              </>
            ) : (
              <>
                Already hava account?{" "}
                <Link
                  to="/"
                  onClick={(e) => {
                    setSignUp(false);
                  }}
                >
                  Login
                </Link>
              </>
            )}
          </Form.Item>
        </Form>
      </LoginComponent>
    </BaseComponent>
  );
}
