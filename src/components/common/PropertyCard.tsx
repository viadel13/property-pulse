import Box from "@mui/material/Box";
import { Card, Divider, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

import CustomButton from "@/components/ui/CustomButton";
import { PropertyCardProps } from "@/types/types";
import { Fa6SolidBath } from "@/assets/iconSVG/Fa6SolidBath";
import { FaSolidBed } from "@/assets/iconSVG/FaSolidBed";
import { Fa6SolidRulerCombined } from "@/assets/iconSVG/Fa6SolidRulerCombined";
import { FaSolidMoneyBillWave } from "@/assets/iconSVG/FaSolidMoneyBillWave";
import { FaSolidMapMarker } from "@/assets/iconSVG/FaSolidMapMarker";

const PropertyCard = ({ property }: PropertyCardProps) => {
  const getRateDisplay = () => {
    const { rates } = property;

    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/nightly`;
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: "auto", mt: 2, backgroundColor: "white" }}
    >
      <Stack>
        <Stack position={"relative"}>
          <Image
            priority
            width="0"
            height="0"
            sizes={"100vw"}
            src={`/images/properties/${property.images[0]}`}
            alt={"a1"}
            style={{ width: "100%", height: "auto" }}
          />
          <Stack
            sx={{
              backgroundColor: "white",
              position: "absolute",
              right: 0,
              padding: 1,
              borderRadius: 2,
              m: 1,
            }}
          >
            <Typography fontWeight={"800"} color={"#3B82F6"} fontSize={"14px"}>
              {getRateDisplay()}
            </Typography>
          </Stack>
        </Stack>
        <Stack p={2}>
          <Typography
            sx={{ fontSize: 15, color: "#4B5563", fontWeight: "bold" }}
          >
            {property.type}
          </Typography>
          <Typography sx={{ fontSize: 18, color: "black", fontWeight: "800" }}>
            {property.name}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FaSolidBed width={10} height={10} />
            <Typography component={"span"} fontSize={"14px"} color={"#6B7280"}>
              {property.beds} Beds
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Fa6SolidBath width={10} height={10} />
            <Typography component={"span"} fontSize={"14px"} color={"#6B7280"}>
              {property.baths} Baths
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Fa6SolidRulerCombined width={10} height={10} />
            <Typography component={"span"} fontSize={"14px"} color={"#6B7280"}>
              {property.square_feet} sqlt
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          mt={1}
          mb={1}
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FaSolidMoneyBillWave width={10} height={10} color={"#065f46"} />
            <Typography component={"span"} fontSize={"14px"} color={"#065F46"}>
              Weekly
            </Typography>
          </Stack>{" "}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FaSolidMoneyBillWave width={10} height={10} color={"#065f46"} />
            <Typography component={"span"} fontSize={"14px"} color={"#065F46"}>
              Monthly
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack
          p={2}
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <FaSolidMapMarker width={15} height={15} color={"#c05621"} />
            <Typography color={"#C05621"} fontSize={"15px"} fontWeight={"bold"}>
              {property.location.city} {property.location.state}
            </Typography>
          </Stack>
          <CustomButton
            title={"Details"}
            link={`/properties/${property._id}`}
            styles={{
              backgroundColor: "#3B82F6",
              textTransform: "capitalize",
              color: "white",
            }}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};
export default PropertyCard;
