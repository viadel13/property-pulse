import { fetchProperty, fetchPropertyId } from "@/services/api/properties/api";
import Box from "@mui/material/Box";
import PropertyHeaderImage from "@/components/common/PropertyHeaderImage";
import { Container, Typography } from "@mui/material";
import PropertyInfos from "@/components/common/PropertyInfos";

interface Params {
  id: string;
}

const PropertyPage = async ({ params }: { params: Params }) => {
  const { id } = await params;
  let property;

  try {
    property = await fetchPropertyId(id);
  } catch (error) {
    console.error("Failed to fetch property:", error);
    property = null;
  }

  if (!property) {
    return (
      <Box>
        <Typography>Property not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      {property.images?.[0] && (
        <PropertyHeaderImage image={property.images[0]} />
      )}
      <Box
        sx={{
          width: "100%",
          background: "#eff6ff",
          minHeight: "100vh",
          paddingY: 4,
        }}
      >
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
          <PropertyInfos property={property} />
        </Container>
      </Box>
    </Box>
  );
};

export default PropertyPage;
