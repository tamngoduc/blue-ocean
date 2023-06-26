import { Stack, Box, Typography, Menu, MenuItem, Fade } from "@mui/material";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "/src/assets/background/logo.png";
import { MENULIST, NAVLIST } from "src/constant/navigation";

const MainHeader = () => {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="start"
      alignItems="center"
      gap={20}
      px={25}
      sx={{
        background: "linear-gradient(90deg, #041C32 0%, #064663 100%)",
      }}
    >
      <Box
        component="img"
        src={logo}
        sx={{ width: 100, height: 100, "&:hover": { cursor: "pointer" } }}
        onClick={() => navigate("/")}
      />

      <Stack direction="row" gap={10} alignItems="center">
        {NAVLIST.map((item) => {
          if (item.routing) {
            return (
              <Link key={item.title} to={item.routing}>
                <Typography variant="caption" sx={{ color: "#fff" }}>
                  {item.title}
                </Typography>
              </Link>
            );
          } else {
            return (
              <div key={item.title}>
                <div onClick={handleClick} className="hover">
                  <Typography variant="caption" sx={{ color: "#fff" }}>
                    {item.title}
                  </Typography>
                </div>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  {MENULIST.map((menu) => (
                    <MenuItem
                      key={menu.title}
                      onClick={() => navigate(`${menu.routing}`)}
                    >
                      <Typography variant="caption">{menu.title}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            );
          }
        })}
      </Stack>
    </Stack>
  );
};

export default MainHeader;
