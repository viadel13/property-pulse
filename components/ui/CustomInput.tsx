import { TextField } from "@mui/material";
import { CustomInputProps } from "@/types/types";

const CustomInput = ({ styles, placeholder }: CustomInputProps) => {
  return (
    <>
      <TextField fullWidth type="text" placeholder={placeholder} sx={styles} />
    </>
  );
};
export default CustomInput;
