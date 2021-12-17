import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import {
  LoginScreen,
  HomePage,
  ErrorPage,
  ClubPage,
  GamesPage,
  PageWrapper,
  TeamPage,
  SettingsPage,
  ReviewPage,
  LoginTestScreen,
} from "./pages/index";
import { BorderColors } from "./styles/colors";
{
  /* <Route exact="true" path="/" element={<LoginTestScreen />} />
      <Route exact="true" path="/test" element={<LoginScreen />} /> */
}
{
  /* <Route exact="true" path="/signup" element={<LoginScreen />} /> */
}
export default function App() {
  const selectedTeamId = useSelector((state) => state.club.selectedTeamId);
  return (
    <Routes>
      <Route
        path="/"
        element={<PageWrapper page={"Login"} border={BorderColors.HOME} />}
      >
        <Route exact="true" path="" element={<LoginTestScreen />} />
      </Route>
      <Route
        path="/signup"
        element={<PageWrapper page={"SignUp"} border={BorderColors.HOME} />}
      >
        <Route exact="true" path="" element={<LoginTestScreen />} />
      </Route>

      <Route path="/home" element={<PageWrapper border={BorderColors.HOME} />}>
        <Route exact="true" path="" element={<HomePage />} />
      </Route>
      {sessionStorage.getItem("teamID") || selectedTeamId ? (
        <>
          <Route
            exact="true"
            path="/club"
            element={<PageWrapper border={BorderColors.CLUB} />}
          >
            <Route exact="true" path="" element={<ClubPage />} />
          </Route>
          <Route
            exact="true"
            path="/games"
            element={<PageWrapper border={BorderColors.GAMES} />}
          >
            <Route exact="true" path="" element={<GamesPage />} />
          </Route>
          <Route
            exact="true"
            path="/team"
            element={<PageWrapper border={BorderColors.TEAM} />}
          >
            <Route exact="true" path="" element={<TeamPage />} />
          </Route>
        </>
      ) : null}
      {/* There is a bug, this route always shows. */}
      <Route exact="true" path="/games/:gameId" element={<ReviewPage />} />

      <Route
        exact="true"
        path="/settings"
        element={
          <PageWrapper page={"Settings"} border={BorderColors.SETTINGS} />
        }
      >
        <Route exact="true" path="" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} exact="true" />
    </Routes>
  );
}
