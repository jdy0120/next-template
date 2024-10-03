"use client";

import { menus } from "../../../constants/router/menus";
import Header from "../../organisms/header/Header";
import Main from "../../organisms/main/Main";
import Sidebar from "../../organisms/sidebar/Sidebar";
import { DashboardContent, DashboardStyled } from "./Dashboard.styles";

interface DashboardProps {
  children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps) => {
  return (
    <DashboardStyled>
      <Sidebar menus={menus} />
      <Main>
        <Header />
        <DashboardContent>{children}</DashboardContent>
      </Main>
    </DashboardStyled>
  );
};

export default Dashboard;
