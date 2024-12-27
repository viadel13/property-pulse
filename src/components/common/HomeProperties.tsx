import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import properties from "../../../properties.json";
import PropertyCard from "@/components/common/PropertyCard";
import CustomButton from "@/components/ui/CustomButton";
import { fetchProperty } from "@/services/api";

fetchProperty();

const HomeProperties = async () => {
  const response = await fetchProperty();

  const recentProperties = response.slice(0, 4);

  return (
    <Container
      sx={{
        maxWidth: {
          xs: "100%",
          sm: "100%",
          md: "800px",
          lg: "80%",
        },
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        color="#3B82F6"
        textAlign="center"
        fontWeight="800"
        fontSize={"25px"}
        mb={1}
        mt={4}
      >
        Recent Properties
      </Typography>
      {properties.length === 0 ? (
        <Typography textAlign={"center"} mt={4} fontSize={25}>
          No properties found
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {recentProperties.map((property: any) => (
              <Grid key={property._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <PropertyCard property={property} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 8,
            }}
          >
            <CustomButton
              title={"View All Properties"}
              link={"/properties"}
              styles={{
                backgroundColor: "#000000",
                textTransform: "capitalize",
                color: "white",
                width: { xs: "60%", sm: "50%", md: "30%" },
              }}
            />
          </Box>
        </>
      )}
    </Container>
  );
};

export default HomeProperties;
