import React from "react";
import "./sidebar.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {Button,styled} from "@mui/material";


export const Sidebar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#000000",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const SidebarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  return (
    <SidebarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <NavbarLinksBox className="nav-items">
          <NavLink variant="body2">
            <Button className="scroll-btn" variant="contained">
              Scroll
              <ArrowDownwardIcon />
            </Button>
          </NavLink>
          <NavLink variant="body2">Performance</NavLink>
          <NavLink variant="body2">Design</NavLink>
          <NavLink variant="body2">Technology</NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      ></Box>
    </SidebarContainer>
  );
};

export default Sidebar;
