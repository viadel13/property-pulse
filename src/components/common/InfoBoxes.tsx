import { Paper, Stack, Typography } from "@mui/material";
import { InfoBoxesProps } from "@/types/types";

const InfoBoxes = ({ text, description, button, bgcolor }: InfoBoxesProps) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 1, md: 3 },
        backgroundColor: bgcolor,
        width: { xs: "100%", md: "30%" },
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      <Stack
        spacing={1}
        justifyContent={"center"}
        sx={{
          display: "block",
        }}
      >
        <Typography
          component={"h2"}
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: "18px", md: "19px" },
          }}
        >
          {text}
        </Typography>
        <Typography component={"p"} fontSize={"15px"}>
          {description}
        </Typography>
        {button}
      </Stack>
    </Paper>
  );
};

export default InfoBoxes;
