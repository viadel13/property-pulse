"use client";

import Box from "@mui/material/Box";
import { FormControl, MenuItem, OutlinedInput, Select } from "@mui/material";
import { names } from "@/constants/actions";
import { useState } from "react";

const CustomSelect = () => {
  const [personName, setPersonName] = useState<string>("All");
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: "auto",
      },
    },
  };
  const handleChange = (event: any) => {
    setPersonName(event.target.value);
  };
  return (
    <Box>
      <FormControl sx={{ width: 200 }}>
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            backgroundColor: "white",
            "& .MuiSelect-select": {
              padding: "10px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
          }}
        >
          {/*<MenuItem disabled value="">*/}
          {/*  <em>Placeholder</em>*/}
          {/*</MenuItem>*/}
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
