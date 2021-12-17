import { Input } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

//To Do: Please implement horizontal scrolling.
export const ScrollableComponent = styled.div`
  display: flex;
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  flex-direction: column;
  border: 2px solid gray;
  border-radius: 10px;
  overflow-y: scroll;
  overflow-x: scroll;
`;

export const CustomInput = styled(Input)`
  width: 420px;
  height: 40px;
  margin-top: 14px;
  margin-bottom: 10px;
  border: 1px solid rgba(113, 253, 30, 0.44);
  border-radius: 4px;
  background-color: #242424;
  padding-left: 15px;
  color: rgba(255, 255, 255, 0.96);
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  &: hover {
    border: 1px solid rgba(113, 253, 30, 0.44);
  }
  &:focus {
    outline: none;
    border: 1px solid rgba(113, 253, 30, 0.44);
  }
`;

export const CustomPasswordInput = styled(Input.Password)`
  width: 420px;
  height: 40px;
  margin-top: 14px;
  margin-bottom: 10px;
  border: 1px solid rgba(113, 253, 30, 0.44);
  border-radius: 4px;
  background-color: #242424;
  padding-left: 15px;
`;

export const BaseText = styled.div`
  display: flex;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.94);
`;

export const InputHelperText = styled.div`
  display: flex;
  width: 100%;
  height: 15px;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 0.96);
`;

export const EyeIcon = styled(EyeOutlined)`
  font-size: 14px;
  color: rgba(113, 253, 30, 0.34);
`;

export const HidedEyeIcon = styled(EyeInvisibleOutlined)`
  font-size: 14px;
  color: rgba(113, 253, 30, 0.34);
`;

export const InputsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-context: flex-start;
  margin-top: 25px;
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
  width: 100%;
  height: 40px;
`;

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(113, 253, 30, 0.44);
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: #ffffff;
  &:hover {
    opacity: 0.3;
  }
`;

export const PositiveButton = styled(CustomButton)`
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.025em;
  color: #ffffff;
  background-color: rgba(113, 253, 30, 0.44);
  margin-right: 5px;
`;

export const NegativeButton = styled(CustomButton)`
  background-color: rgba(155, 155, 155, 0.14);
`;

export const ErrorMessage = styled.div`
  margin-top: 2px;
  padding-left: 8px;
  padding-right: 8px;
  min-height: 18px;
  font-size: 14px;
  color: red;
  width: 100%;
`;
