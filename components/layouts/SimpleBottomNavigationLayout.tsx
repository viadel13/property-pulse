"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { HugeiconsHome04 } from "@/assets/iconSVG/HugeiconsHome04";
import { BiHouses } from "@/assets/iconSVG/BiHouses";
import { AddHome } from "@/assets/iconSVG/AddHome";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

export default function SimpleBottomNavigationLayout() {
  const [value, setValue] = React.useState(0),
    navigate = useRouter(),
    { isLogin } = useAppContext()!;

  const links = [
    {
      label: "Home",
      icon: <HugeiconsHome04 width={25} height={25} />,
      path: "/",
    },
    {
      label: "Properties",
      icon: <BiHouses width={25} height={25} />,
      path: "/properties",
    },
  ];

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
    navigate.replace(links[newValue].path);
  };

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
        onChange={handleChange}
      >
        {links.map((link, index) => (
          <BottomNavigationAction
            key={index}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
