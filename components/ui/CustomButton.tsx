import { Button, Stack, Typography } from "@mui/material";

interface CustomButton {
  title: string;
  styles: React.CSSProperties;
  link?: string;
  icon?: React.ReactNode;
}

const CustomButton = ({ title, styles, icon }: CustomButton) => {
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
