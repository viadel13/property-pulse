import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import CustomInput from "@/components/ui/CustomInput";
import CustomSelect from "@/components/ui/CustomSelect";
import CustomButton from "@/components/ui/CustomButton";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E40AF",
        paddingBottom: { xs: 4, md: 8 },
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack spacing={2}>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "30px", md: "45px" },
            textAlign: "center",
            fontWeight: 800,
          }}
        >
          Find The Perfect Rental
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "13px", md: "18px" },
            textAlign: "center",
            fontWeight: 600,
          }}
        >
          Discover the perfect property that suits your needs.
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomInput
            placeholder={"Enter Location (City, State, Zip, etc)"}
            styles={{
              caretColor: "black",
              color: "black",
              borderRadius: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "1px solid white",
                },
                "&:hover fieldset": {
                  borderColor: "#506677",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1976d2",
                },
              },
              "& .MuiInputBase-input": {
                color: "black",
                height: "10px",
                borderRadius: 2,
                backgroundColor: "white",
              },
              "& .MuiInputBase-input::placeholder": {
                color: "#506677",
                opacity: 1,
              },
            }}
          />

          <CustomSelect />
          <CustomButton
            title={"search"}
            styles={{
              backgroundColor: "#3B82F6",
              color: "white",
              textTransform: "capitalize",
              padding: "10px 30px",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
export default Hero;
