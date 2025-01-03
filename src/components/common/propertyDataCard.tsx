import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { FaSolidMapMarker } from "@/assets/iconSVG/FaSolidMapMarker";
import { IconamoonCloseDuotone } from "@/assets/iconSVG/IconamoonCloseDuotone";
import { PropertyInfosProps } from "@/types/types";
import { FaSolidBed } from "@/assets/iconSVG/FaSolidBed";
import { Fa6SolidBath } from "@/assets/iconSVG/Fa6SolidBath";
import { Fa6SolidRulerCombined } from "@/assets/iconSVG/Fa6SolidRulerCombined";
import Grid from "@mui/material/Grid2";
import { BasilCheckOutline } from "@/assets/iconSVG/BasilCheckOutline";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import { Fa6SolidPaperPlane } from "@/assets/iconSVG/Fa6SolidPaperPlane";

export const DataCardOne = ({ property }: PropertyInfosProps) => {
  return (
    <Stack
      spacing={2.5}
      sx={{
        alignItems: { xs: "center", sm: "stretch" },
      }}
    >
      <Typography className={"text-gray-500"}>{property.type}</Typography>
      <Box>
        <Typography
          fontWeight={"bold"}
          component={"h1"}
          fontSize={"25px"}
          sx={{
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          {property.name}
        </Typography>
        <Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          mt={0.5}
          sx={{
            justifyContent: { xs: "center", sm: "start" },
          }}
        >
          <FaSolidMapMarker width={15} height={15} color={"#c05621"} />
          <Typography color={"#c05621"} fontSize={"14px"}>
            {property.location.city} {property.location.state}
          </Typography>
        </Stack>
      </Box>
      <Stack
        className={"bg-gray-800 "}
        sx={{
          width: "100%",
          padding: 1,
          alignItems: { xs: "center", sm: "start" },
        }}
      >
        <Typography color={"white"} fontWeight={"bold"}>
          Rates & Options
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: { xs: "center", sm: "stretch" },
          gap: 2,
          width: "100%",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={0.5}
          p={1}
          sx={{
            borderBottom: { xs: "1px solid #e5e7eb", sm: "none" },
            width: { xs: "100%", sm: "auto" },
            justifyContent: "center",
          }}
        >
          <Typography className="text-gray-500 font-bold" fontSize={"14px"}>
            Nightly
          </Typography>
          {property.rates.nightly ? (
            <Typography className=" font-bold text-blue-500" fontSize={"21px"}>
              ${property.rates.nightly.toLocaleString()}
            </Typography>
          ) : (
            <IconamoonCloseDuotone width={30} height={30} />
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={0.5}
          p={1}
          sx={{
            borderBottom: { xs: "1px solid #e5e7eb", sm: "none" },
            width: { xs: "100%", sm: "auto" },
            justifyContent: "center",
          }}
        >
          <Typography className="text-gray-500 font-bold" fontSize={"14px"}>
            Weekly
          </Typography>

          {property.rates.weekly ? (
            <Typography className=" font-bold text-blue-500" fontSize={"21px"}>
              ${property.rates.weekly.toLocaleString()}
            </Typography>
          ) : (
            <IconamoonCloseDuotone width={30} height={30} />
          )}
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={0.5} p={1}>
          <Typography className="text-gray-500 font-bold" fontSize={"14px"}>
            Monthly
          </Typography>
          {property.rates.monthly ? (
            <Typography className=" font-bold text-blue-500" fontSize={"21px"}>
              ${property.rates.monthly.toLocaleString()}
            </Typography>
          ) : (
            <IconamoonCloseDuotone width={30} height={30} />
          )}
        </Stack>
      </Box>
    </Stack>
  );
};

export const DataCardTwo = ({ property }: PropertyInfosProps) => {
  return (
    <Stack spacing={2}>
      <Typography fontWeight={"bold"} fontSize={18}>
        Description & Details
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 2, sm: 2, md: 7 },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <FaSolidBed width={20} height={20} color={"#3B82F6"} />
          <Typography component={"span"} fontSize={"19px"} color={"#3B82F6"}>
            {property.beds} Beds
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Fa6SolidBath width={20} height={20} color={"#3B82F6"} />
          <Typography component={"span"} fontSize={"19px"} color={"#3B82F6"}>
            {property.baths} Baths
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Fa6SolidRulerCombined width={20} height={20} color={"#3B82F6"} />
          <Typography component={"span"} fontSize={"19px"} color={"#3B82F6"}>
            {property.square_feet} sqlt
          </Typography>
        </Stack>
      </Stack>
      <Typography className="text-gray-500" component={"p"}>
        This is a beautiful apartment located near the commons
      </Typography>
    </Stack>
  );
};

export const DataCardThree = ({ property }: PropertyInfosProps) => {
  return (
    <Stack spacing={2}>
      <Typography color={"black"} fontWeight={"bold"} fontSize={16}>
        Amenities
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Box>
            {property.amenities.slice(0, 5).map((amenity: any, index: any) => (
              <Stack key={index} direction={"row"} alignItems={"center"}>
                <BasilCheckOutline />
                <Typography key={index} variant="subtitle1" fontSize={16}>
                  {amenity}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {property.amenities.slice(5, 10).map((amenity: any, index: any) => (
            <Stack direction={"row"} key={index} alignItems={"center"}>
              <BasilCheckOutline />
              <Typography key={index} variant="subtitle1" fontSize={16}>
                {amenity}
              </Typography>
            </Stack>
          ))}
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          {property.amenities.slice(10, 14).map((amenity: any, index: any) => (
            <Stack direction={"row"} key={index} alignItems={"center"}>
              <BasilCheckOutline />
              <Typography key={index} variant="subtitle1" fontSize={16}>
                {amenity}
              </Typography>
            </Stack>
          ))}
        </Grid>
      </Grid>
    </Stack>
  );
};

export const DataCardContact = () => {
  return (
    <Stack spacing={2}>
      <Typography fontWeight={"bold"} fontSize={18}>
        Contact Property Manager
      </Typography>
      <Box
        component="form"
        sx={{
          gap: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack spacing={1}>
          <Typography component={"label"} fontWeight={"bold"} fontSize={14}>
            Name:
          </Typography>
          <CustomInput
            styles={{
              "& .MuiInputBase-input": {
                color: "black",
                height: "8px",
              },
            }}
            placeholder={"Enter your name"}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography component={"label"} fontWeight={"bold"} fontSize={14}>
            Email:
          </Typography>
          <CustomInput
            styles={{
              "& .MuiInputBase-input": {
                color: "black",
                height: "8px",
              },
            }}
            type={"email"}
            placeholder={"Enter your email"}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography component={"label"} fontWeight={"bold"} fontSize={14}>
            Phone:
          </Typography>
          <CustomInput
            styles={{
              "& .MuiInputBase-input": {
                color: "black",
                height: "8px",
              },
            }}
            type={"tel"}
            placeholder={"Enter your phone number"}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography component={"label"} fontWeight={"bold"} fontSize={14}>
            Message:
          </Typography>
          <CustomInput
            styles={{
              "& .MuiInputBase-input": {
                color: "black",
              },
            }}
            multiline={true}
            rows={4}
            placeholder={"Enter your message"}
          />
        </Stack>
        <CustomButton
          title={"Send Message"}
          styles={{
            backgroundColor: "#3B82F6",
            color: "white",
            textTransform: "capitalize",
            fontWeight: "bold",
            width: "100%",
            borderRadius: 20,
            fontSize: 15,
          }}
          icon={<Fa6SolidPaperPlane width={16} height={16} />}
        />
      </Box>
    </Stack>
  );
};
