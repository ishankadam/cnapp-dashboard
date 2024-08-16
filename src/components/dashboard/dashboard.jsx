import { Button, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import AutorenewIcon from "@mui/icons-material/Autorenew";

function Dashboard() {
  return (
    <div>
      <Typography variant="h5">CNAPP Dashboard</Typography>
      <Button
        component="label"
        variant="outlined"
        color="success"
        endIcon={<AddIcon />}
        sx={{
          color: "#595959",
          borderColor: "#cccccc",
        }}
        size="small"
      >
        Add Widget
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          color: "#595959",
          borderColor: "#cccccc",
          padding: 0,
        }}
      >
        <AutorenewIcon fontSize={"small"}></AutorenewIcon>
      </Button>
      <Button
        variant="outlined"
        size="small"
        sx={{
          color: "#595959",
          borderColor: "#cccccc",
          padding: 0,
        }}
      >
        <AutorenewIcon fontSize={"small"}></AutorenewIcon>
      </Button>
    </div>
  );
}

export default Dashboard;
