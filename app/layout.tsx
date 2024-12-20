import { ReactNode } from "react";
import "@/assets/styles/globals.css";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import SimpleBottomNavigationLayout from "@/components/layouts/SimpleBottomNavigationLayout";
import { AppWrapper } from "@/context/AppContext";
import { Divider } from "@mui/material";

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find the perfect rental property",
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppWrapper>
          <NavbarLayout />
          <Divider color={"#0096c7"} />
          <main style={{ flex: 1 }}>{children}</main>
          <SimpleBottomNavigationLayout />
        </AppWrapper>
      </body>
    </html>
  );
};

export default MainLayout;
