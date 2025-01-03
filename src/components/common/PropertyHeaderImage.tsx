import Box from "@mui/material/Box";
import { PropertyHeaderImageProps } from "@/types/types";
import Image from "next/image";
import { Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { MaterialSymbolsArrowLeftAlt } from "@/assets/iconSVG/MaterialSymbolsArrowLeftAlt";

const PropertyHeaderImage = ({ image }: PropertyHeaderImageProps) => {
  return (
    <Box>
      <Image
        priority
        width="1000"
        height="400"
        sizes="100vw"
        src={`/images/properties/${image}`}
        alt={`${image}`}
        style={{ height: "400px", objectFit: "cover", width: "100%" }}
      />

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
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          mt={2}
          mb={2}
        >
          <MaterialSymbolsArrowLeftAlt color={"#2563EB"} />
          <Link
            href="/properties"
            style={{ color: "#2563EB", textDecoration: "none" }}
          >
            Back to properties
          </Link>
        </Stack>
      </Container>
    </Box>
  );
};

export default PropertyHeaderImage;
