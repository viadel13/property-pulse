import { Paper, Typography } from "@mui/material";
import { CardPropertyInfosProps } from "@/types/types";

const CardPropertyInfos = ({ content }: CardPropertyInfosProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        backgroundColor: "white",
        padding: 2,
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }}
    >
      {content}
    </Paper>
  );
};
export default CardPropertyInfos;
