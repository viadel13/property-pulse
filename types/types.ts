import { Dispatch, SetStateAction } from "react";
import { SxProps } from "@mui/material";

export type AppContextProps = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export interface CustomButtonProps {
  title: string;
  styles: React.CSSProperties;
  link?: string;
  icon?: React.ReactNode;
}

export interface CustomInputProps {
  styles: SxProps;
  placeholder: string;
}
