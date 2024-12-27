import Box from "@mui/material/Box";
import { PropertyHeaderImageProps } from "@/types/types";
import Image from "next/image";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { MaterialSymbolsArrowLeftAlt } from "@/assets/iconSVG/MaterialSymbolsArrowLeftAlt";

const PropertyHeaderImage = ({ image }: PropertyHeaderImageProps) => {
  return (
    <Box>
      <Image
        priority
        width="0"
        height="0"
        sizes={"100vw"}
        src={`/images/properties/${image}`}
        alt={`${image}`}
        style={{ height: "400px", objectFit: "cover", width: "100%" }}
      />
      <Stack direction={"row"} spacing={2} alignItems={"center"}>
        <MaterialSymbolsArrowLeftAlt color={"#2563EB"} />
        <Link href={"/properties"} color={"#2563EB"}>
          Back to properties
        </Link>
      </Stack>
    </Box>
  );
};

export default PropertyHeaderImage;
