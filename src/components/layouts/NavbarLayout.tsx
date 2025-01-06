"use client";

import {
  AppBar,
  Avatar,
  Badge,
  Container,
  Divider,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import logoWhite from "@/assets/images/logo-white.png";
import profile from "@/assets/images/profile.png";
import CustomButton from "@/components/ui/CustomButton";
import { linksNavbar } from "@/constants/links";
import Link from "next/link";
import { Box } from "@mui/system";
import { MingcuteGoogleFill } from "@/assets/iconSVG/MingcuteGoogleFill";
import { IonNotificationsOutline } from "@/assets/iconSVG/IonNotificationsOutline";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const NavbarLayout = () => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const { isLogin } = useAppContext()!;
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };
    setAuthProviders();
  }, []);

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        sx={{
          backgroundColor: "#1E40AF",
          py: 0.8,
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
            padding: 0,
          }}
        >
          <Toolbar>
            <Box
              alignItems={"center"}
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Link href="/">
                <Image
                  className="h-9 w-auto"
                  src={logoWhite}
                  alt="PropertyPulse"
                />
              </Link>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 1,
                  marginRight: 2,
                  fontSize: 18,
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                }}
              >
                PropertyPulse
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Link href="/">
                <Image
                  className="h-10 w-auto"
                  src={logoWhite}
                  alt="PropertyPulse"
                />
              </Link>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 2,
                  marginRight: 2,
                  fontSize: 20,
                }}
              >
                PropertyPulse
              </Typography>
              {linksNavbar.map((link, i) => (
                <Link
                  key={i}
                  href={link.link}
                  className={`text-white ${pathName === link.link ? "bg-black text-white" : "hover:text-blue-300 "}   rounded-md px-3 py-2 ms-3`}
                >
                  {link.name}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!isLogin ? (
                providers &&
                Object.values(providers).map((provider: any, index) => (
                  <CustomButton
                    onClick={() => signIn(provider.id)}
                    key={index}
                    title={"Login"}
                    icon={<MingcuteGoogleFill />}
                    styles={{
                      backgroundColor: "#374151",
                      color: "white",
                      textTransform: "capitalize",
                    }}
                  />
                ))
              ) : (
                <>
                  <IconButton>
                    <Badge badgeContent={2} color="error">
                      <Stack
                        sx={{
                          backgroundColor: "#000000",
                          borderRadius: 999,
                          width: 30,
                          height: 30,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <IonNotificationsOutline
                          height={20}
                          width={20}
                          color={"white"}
                        />
                      </Stack>
                    </Badge>
                  </IconButton>

                  <IconButton>
                    <Stack
                      sx={{
                        backgroundColor: "white",
                        width: 30,
                        height: 30,
                        borderRadius: 999,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        alt="profile"
                        src={profile}
                        width={25}
                        height={25}
                      />
                    </Stack>
                  </IconButton>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider color={"#0096c7"} />
    </>
  );
};

export default NavbarLayout;
