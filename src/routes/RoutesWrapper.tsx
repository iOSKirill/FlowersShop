import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Main from "../views/Main";
import RootWrapper from "../components/RootWrapper";
import Flowers from "../views/Flowers";

const RoutesWrapper: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<RootWrapper />}>
        <Route path={ROUTES.MAIN} element={<Main />} />
        <Route path={ROUTES.FLOWERS} element={<Flowers />} />
        <Route path={ROUTES.DEFAULT} element={<Navigate to={ROUTES.MAIN} />} />
      </Route>
    </Routes>
  );
};

export default RoutesWrapper;
