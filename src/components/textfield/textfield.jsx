import { TextField } from "@mui/material";
import React from "react";

function Textfield(props) {
  return (
    <TextField
      className={`common-textfield ${props.className ? props.className : ""}`}
      id={props.id ? props.id : ""}
      name={props.name || null}
      autoComplete={props.name || null}
      type={props.type}
      label={props.label}
      placeholder={props.placeholder}
      variant={props.variant}
      size={props.size}
      InputProps={props.InputProps}
      InputLabelProps={{ className: "common-textfield-label" }}
      sx={props.sx}
      disabled={props.disabled}
    ></TextField>
  );
}

export default Textfield;
