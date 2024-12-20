"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { HugeiconsHome04 } from "@/assets/iconSVG/HugeiconsHome04";
import { BiHouses } from "@/assets/iconSVG/BiHouses";
import { AddHome } from "@/assets/iconSVG/AddHome";
import { SolarLogin3Outline } from "@/assets/iconSVG/SolarLogin3Outline";
import { MingcuteGoogleFill } from "@/assets/iconSVG/MingcuteGoogleFill";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "block", md: "none" },
      }}
    >
      <BottomNavigation
        sx={{
          backgroundColor: "white",
          borderTop: "1px solid #e5e5e5",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HugeiconsHome04 width={25} height={25} />}
        />
        <BottomNavigationAction
          label="Properties"
          icon={<BiHouses width={25} height={25} />}
        />
        <BottomNavigationAction
          label="Add Property"
          icon={<AddHome width={25} height={25} />}
        />
        <BottomNavigationAction
          label="Login"
          icon={<MingcuteGoogleFill width={25} height={25} />}
        />
      </BottomNavigation>
    </Box>
  );
}
