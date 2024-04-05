import React from "react";
import { Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Main from "../views/Main";
import RootWrapper from "../components/RootWrapper";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<RootWrapper />}>
        <Route path={ROUTES.MAIN} element={<Main />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
