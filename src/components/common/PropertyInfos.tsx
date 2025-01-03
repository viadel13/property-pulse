import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import CardPropertyInfos from "@/components/common/CardPropertyInfos";
import { PropertyInfosProps } from "@/types/types";
import {
  DataCardContact,
  DataCardOne,
  DataCardThree,
  DataCardTwo,
} from "@/components/common/propertyDataCard";
import CustomButton from "@/components/ui/CustomButton";
import { FluentBookmark16Filled } from "@/assets/iconSVG/FluentBookmark16Filled";
import { Stack } from "@mui/material";
import { FaShare } from "@/assets/iconSVG/FaShare";

const PropertyInfos = ({ property }: PropertyInfosProps) => {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 8 }}>
        <CardPropertyInfos content={<DataCardOne property={property} />} />
        <Box mt={3} mb={3} />
        <CardPropertyInfos content={<DataCardTwo property={property} />} />{" "}
        <Box mt={3} mb={3} />
        <CardPropertyInfos content={<DataCardThree property={property} />} />
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2}>
          <CustomButton
            title={"Bookmark Property"}
            styles={{
              backgroundColor: "#3B82F6",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "bold",
              width: "100%",
              borderRadius: 20,
              fontSize: 15,
            }}
            icon={<FluentBookmark16Filled width={23} height={23} />}
          />
          <CustomButton
            title={"Share Property"}
            styles={{
              backgroundColor: "#F97316",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "bold",
              width: "100%",
              borderRadius: 20,
              fontSize: 15,
            }}
            icon={<FaShare width={23} height={23} />}
          />
          <CardPropertyInfos content={<DataCardContact />} />
        </Stack>
      </Grid>
    </Grid>
  );
};
export default PropertyInfos;
