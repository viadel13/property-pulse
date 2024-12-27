import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = () => {
  return (
    <ClipLoader
      color="#3bf2f8"
      size={100}
      cssOverride={override}
      aria-label="Loading"
    />
  );
};
export default LoadingPage;
