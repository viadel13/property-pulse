import { CircularProgress, Stack } from "@mui/material";

const override = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = () => {
  return (
    <Stack direction="row" justifyContent="center" mt={4}>
      <CircularProgress
        size={50}
        sx={{
          color: "#3bf2f8",
        }}
      />
    </Stack>
  );
};
export default LoadingPage;
