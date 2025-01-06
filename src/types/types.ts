import { Dispatch, SetStateAction } from "react";
import { SxProps } from "@mui/material";
import CardPropertyInfos from "@/components/common/CardPropertyInfos";

export type AppContextProps = {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
};

export interface CustomButtonProps {
  title: string;
  styles: SxProps;
  link?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
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
  placeholder?: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
}

export interface PropertyHeaderImageProps {
  image: string;
}

export interface CardPropertyInfosProps {
  content: React.ReactNode;
}

export interface PropertyInfosProps {
  property: any;
}
