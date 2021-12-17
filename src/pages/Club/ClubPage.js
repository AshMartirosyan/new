import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { errorAction } from "../../store/actions";
import { Chart } from "../../components/Chart";
import styled from "styled-components";

const BaseComponent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
`;

const RightComponent = styled.div`
  display: flex;
  flex: 1;
  min-width: 300px;
  min-height: 500px;
  padding: 20px;
  border-radius: 20px;
  background-color: gray;
`;

const LeftComponent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  min-width: 300px;
  min-height: 400px;
  padding: 0px 24px 0px;
`;
const TopComponent = styled.div`
  display: flex;
  flex: 1;
  min-width: 100px;
  min-height: 200px;
  border-radius: 20px;
  background-color: gray;
`;

const ChartComponent = styled.div`
  display: flex;
  flex: 1.5;
  min-width: 200px;
`;

export const ClubPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //ToDO: get data from server
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      // if (allTeams.length === 0) {
      //   dispatch(getAllTeams(errorCallback));
      // }
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
  });

  return (
    <BaseComponent>
      <LeftComponent>
        <TopComponent></TopComponent>
        <ChartComponent>
          <Chart />
        </ChartComponent>
      </LeftComponent>
      <RightComponent></RightComponent>
    </BaseComponent>
  );
};
