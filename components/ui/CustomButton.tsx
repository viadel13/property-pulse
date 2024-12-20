import { Button, Stack, Typography } from "@mui/material";
import { CustomButtonProps } from "@/types/types";

const CustomButton = ({ title, styles, icon }: CustomButtonProps) => {
  return (
    <>
      <Button sx={styles}>
        {icon ? (
          <Typography
            component={"span"}
            sx={{ display: "block", marginRight: 0.5 }}
          >
            {icon}
          </Typography>
        ) : null}
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
