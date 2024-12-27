import { fetchProperty, fetchPropertyId } from "@/services/api";
import Box from "@mui/material/Box";
import PropertyHeaderImage from "@/components/common/PropertyHeaderImage";

interface Params {
  id: string;
}

const PropertyPage = async ({ params }: { params: Params }) => {
  const { id } = params;

  const property = await fetchPropertyId(id);

  return (
    <Box>
      <PropertyHeaderImage image={property.images[0]} />
      {property.name}
    </Box>
  );
};

export default PropertyPage;
