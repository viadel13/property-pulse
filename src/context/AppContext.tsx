"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { AppContextProps } from "@/types/types";

export const AppContext = createContext<AppContextProps | null>(null);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
