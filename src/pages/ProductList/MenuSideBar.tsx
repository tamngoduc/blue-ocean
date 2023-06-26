import { Box, Typography, Stack, Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import { MENULIST } from "src/constant/navigation";

const MenuSideBar = () => {
  return (
    <Box>
      <Typography variant="h5">DANH MỤC SẢN PHẨM</Typography>

      <Stack
        sx={{ mt: 10, mb: 8 }}
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={2}
      >
        {MENULIST.map((menu) => (
          <NavLink
            key={menu.routing}
            to={menu.routing || ""}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : 400,
              };
            }}
          >
            {menu.title}
          </NavLink>
        ))}
      </Stack>

      <Typography variant="h5">Hỗ trợ khách hàng</Typography>
    </Box>
  );
};

export default MenuSideBar;
