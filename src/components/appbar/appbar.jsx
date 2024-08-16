import {
  AppBar,
  Box,
  Breadcrumbs,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Textfield from "../textfield/textfield";
import SelectDropdown from "../select-dropdown/selectDropdown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Dashboard from "../dashboard/dashboard";

function Appbar() {
  return (
    <Box sx={{ flexGrow: 1, height: "12px" }}>
      <AppBar position="static" className="dashboard-appbar">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" href="/dashboard">
                Dashboard V2
              </Link>
            </Breadcrumbs>
          </Box>
          <div className="dashboard-wrapper">
            <Textfield
              id="input-with-icon-textfield"
              placeholder="Search Anything..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="small"
              sx={{ width: "400px" }}
            />
            <SelectDropdown
              sx={{ width: "200px", height: "20px" }}
              size="small"
            ></SelectDropdown>
            <NotificationsActiveIcon color="action"></NotificationsActiveIcon>
            <Typography color={"#000000"}>
              {" "}
              <AccountCircleIcon></AccountCircleIcon>Ishan Kadam
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Dashboard></Dashboard>
    </Box>
  );
}

export default Appbar;
