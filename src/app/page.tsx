import Box from "@mui/material/Box";
import Hero from "@/components/common/Hero";
import InfoBoxes from "@/components/common/InfoBoxes";
import CustomButton from "@/components/ui/CustomButton";
import HomeProperties from "@/components/common/HomeProperties";

const HomePage = () => {
  return (
    <Box mb={2}>
      <Hero />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 4,
          gap: 2,
          mx: { xs: 1, md: 0 },
        }}
      >
        <InfoBoxes
          bgcolor={"#F7FAFC"}
          text={"For Renters"}
          description={
            "Find your dream rental property. Bookmark properties and contact owners."
          }
          button={
            <CustomButton
              title={"Browse Properties"}
              link={"/properties"}
              styles={{
                backgroundColor: "#000000",
                color: "white",
                textTransform: "capitalize",
              }}
            />
          }
        />
        <InfoBoxes
          bgcolor={"#EBF8FF"}
          text={"For Property Owners"}
          description={
            "List your properties and reach potential tenants. Rent as an airbnb or long term."
          }
          button={
            <CustomButton
              title={"Add Property"}
              link={"/properties/add"}
              styles={{
                backgroundColor: "#3B82F6",
                color: "white",
                textTransform: "capitalize",
              }}
            />
          }
        />
      </Box>
      <HomeProperties />
    </Box>
  );
};

export default HomePage;
