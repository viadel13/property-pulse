import { Button, Stack, Typography } from "@mui/material";
import { CustomButtonProps } from "@/types/types";

const CustomButton = ({
  title,
  styles,
  icon,
  link,
  onClick,
}: CustomButtonProps) => {
  return (
    <>
      <Button sx={styles} href={link} onClick={onClick}>
        {icon ? (
          <Typography
            component={"span"}
            sx={{ display: "block", marginRight: 0.8 }}
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
