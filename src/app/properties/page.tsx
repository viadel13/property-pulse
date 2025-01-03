import Grid from "@mui/material/Grid2";
import PropertyCard from "@/components/common/PropertyCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { unstable_cache } from "next/cache";
import { fetchProperty } from "@/services/api/properties/api";

fetchProperty();

const Properties = async () => {
  const properties = await fetchProperty();

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
      {properties.length === 0 ? (
        <Typography textAlign={"center"} mt={4} fontSize={25}>
          No properties found
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {properties.map((property: any) => (
            <Grid key={property._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <PropertyCard property={property} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Properties;
