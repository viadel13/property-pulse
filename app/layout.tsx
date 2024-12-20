import { ReactNode } from "react";
import "@/assets/styles/globals.css";
import NavbarLayout from "@/components/layouts/NavbarLayout";
import SimpleBottomNavigation from "@/components/layouts/SimpleBottomNavigation";

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
        <NavbarLayout />
        <main style={{ flex: 1 }}>{children}</main>
        <SimpleBottomNavigation />
      </body>
    </html>
  );
};

export default MainLayout;
