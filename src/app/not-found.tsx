import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import CustomButton from "@/components/ui/CustomButton";
import { BxsError } from "@/assets/iconSVG/BxsError";

const notFoundPage = () => {
  return (
    <Box
      className="bg-blue-50"
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          width: { xs: "90%", sm: "60%", md: "40%" },
          height: "300px",
          mt: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 0.5,
          boxShadow:
            "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      >
        <BxsError width={55} height={55} />
        <Typography
          variant="h1"
          fontWeight={"bold"}
          textAlign={"center"}
          sx={{
            fontSize: { xs: "20px", md: "25px" },
          }}
        >
          Page Not Found
        </Typography>
        <Typography
          component={"p"}
          sx={{
            fontSize: { xs: "15px", md: "16px" },
          }}
          textAlign={"center"}
          color={"#6B7280"}
        >
          The page you are looking for does not exist.
        </Typography>
        <CustomButton
          title={"Go Home"}
          link={"/"}
          styles={{
            backgroundColor: "#1E3A8A",
            textTransform: "capitalize",
            color: "white",
            fontWeight: "bold",
            padding: "10px",
            mt: 2,
          }}
        />
      </Paper>
    </Box>
  );
};

export default notFoundPage;
