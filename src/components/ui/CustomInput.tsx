import { TextField } from "@mui/material";
import { CustomInputProps } from "@/types/types";

const CustomInput = ({ styles, placeholder }: CustomInputProps) => {
  const responsiveWidth = {
    xs: "90%",
    md: "100%",
  };

  return (
    <>
      <TextField
        fullWidth
        type="text"
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
