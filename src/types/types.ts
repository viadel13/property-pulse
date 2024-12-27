import { Dispatch, SetStateAction } from "react";
import { SxProps } from "@mui/material";

export type AppContextProps = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export interface CustomButtonProps {
  title: string;
  styles: SxProps;
  link?: string;
  icon?: React.ReactNode;
}

export interface InfoBoxesProps {
  text: string;
  description: string;
  button: React.ReactNode;
  bgcolor: string;
}

export interface PropertyCardProps {
  property: any;
}

export interface CustomInputProps {
  styles: SxProps;
  placeholder: string;
}
