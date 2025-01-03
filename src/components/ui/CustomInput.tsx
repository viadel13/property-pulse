import { TextField } from "@mui/material";
import { CustomInputProps } from "@/types/types";

const CustomInput = ({
  styles,
  placeholder,
  type = "text",
  multiline = false,
  rows = 0,
}: CustomInputProps) => {
  const responsiveWidth = {
    xs: "100%",
    md: "100%",
  };

  return (
    <>
      <TextField
        fullWidth
        multiline={multiline}
        type={type}
        rows={rows}
        placeholder={placeholder}
        sx={{
          ...styles,
          width: { xs: responsiveWidth.xs, md: responsiveWidth.md },
        }}
      />
    </>
  );
};
export default CustomInput;
