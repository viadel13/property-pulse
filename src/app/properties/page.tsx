import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import properties from "../../../properties.json";
import PropertyCard from "@/components/common/PropertyCard";
import { Container } from "@mui/material";

const Properties = () => {
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
      <Grid container spacing={2}>
        {properties.map((property) => (
          <Grid key={property._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <PropertyCard property={property} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Properties;
