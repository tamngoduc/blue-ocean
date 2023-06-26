import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";

const MainLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <MainHeader />

      <Outlet />

      <MainFooter />
    </Box>
  );
};

export default MainLayout;
