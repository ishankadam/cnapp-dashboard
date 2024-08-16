import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import _ from "lodash";
import React from "react";

function SelectDropdown(props) {
  const updateMenuItems = (data) => {
    const menu = _.map(data, (obj, index) => {
      return (
        <MenuItem key={index} value={obj.value}>
          {obj.label}
        </MenuItem>
      );
    });
    return menu;
  };

  let menuItems = updateMenuItems(_.get(props, "optionList", []));
  return (
    <FormControl className="select-condition-list" variant="standard">
      <InputLabel id="test-select-label" htmlFor="select-dropdown">
        {props.label}
      </InputLabel>
      <Select
        test-id="select-dropdown"
        id={props.id ? props.id : "select-dropdown"}
        className={props.className ? props.className : "select-dropdown"}
        aria-labelledby="test-select-label"
        label={props.label}
        sx={{ ...props.sx }}
      >
        {menuItems}
      </Select>
    </FormControl>
  );
}

export default SelectDropdown;
