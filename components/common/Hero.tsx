import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import CustomInput from "@/components/ui/CustomInput";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1E40AF",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
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
            fontSize: { xs: "12px", md: "18px" },
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
            placeholder={"Enter Location(City, State, Zip, etc"}
            styles={{
              caretColor: "white",
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
                  borderColor: "#D6B473",
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
          {/*<CustomInput*/}
          {/*  placeholder={"Enter Location(City, State, Zip, etc"}*/}
          {/*  styles={{*/}
          {/*    caretColor: "white",*/}
          {/*    color: "white",*/}
          {/*    borderRadius: 2,*/}
          {/*    "& .MuiOutlinedInput-root": {*/}
          {/*      "& fieldset": {*/}
          {/*        border: "1px solid white",*/}
          {/*      },*/}
          {/*      "&:hover fieldset": {*/}
          {/*        borderColor: "#506677",*/}
          {/*      },*/}
          {/*      "&.Mui-focused fieldset": {*/}
          {/*        borderColor: "#D6B473",*/}
          {/*      },*/}
          {/*    },*/}
          {/*    "& .MuiInputBase-input": {*/}
          {/*      color: "white",*/}
          {/*      height: "10px",*/}
          {/*      borderRadius: 2,*/}
          {/*      backgroundColor: "white",*/}
          {/*    },*/}
          {/*    "& .MuiInputBase-input::placeholder": {*/}
          {/*      color: "#506677",*/}
          {/*      opacity: 1,*/}
          {/*    },*/}
          {/*  }}*/}
          {/*/>*/}
        </Stack>
      </Stack>
    </Box>
  );
};
export default Hero;
