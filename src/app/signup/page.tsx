import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";
import SingUpForm from "./SingUpForm";
import IconBox from "../components/IconBox";
import { ArrowBackIosNew } from "@mui/icons-material";
import MainContainer from "../components/MainContainer";

function SignUp() {
  return (
    <Layout>
      <MainContainer>
        <IconBox>
          <ArrowBackIosNew sx={{ color: "#151515" }} />
        </IconBox>
        <Box>
          <Typography variant="h3">One Link Secured!</Typography>
          <Typography component={"p"}>
            Now, let’s create your Spatial iD to begin editing your Circle.
          </Typography>
        </Box>
        <SingUpForm />
      </MainContainer>
    </Layout>
  );
}

export default SignUp;
