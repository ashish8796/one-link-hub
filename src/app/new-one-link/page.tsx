import {
  Box,
  Button,
  SxProps,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import { ArrowBackIosNew } from "@mui/icons-material";
import IconBox from "../components/IconBox";
import MainContainer from "../components/MainContainer";
import Logo from "../components/Logo";

function CreateOneLink() {
  return (
    <Layout>
      <MainContainer>
        <IconBox>
          <ArrowBackIosNew sx={{ color: "#151515" }} />
        </IconBox>

        <Box component={"div"} sx={styles.logoBox} className="flex-center">
          <Logo width={100} height={100} />
        </Box>

        <Box className="flex-col">
          <Typography component={"h4"} variant="h4">
            Create you one link
          </Typography>
          <Typography component={"p"} sx={{ my: 2 }}>
            Your one link is your unique identifier for sharing your Circle
            experiences.
          </Typography>

          <Box sx={{ width: "50%" }}>
            <TextField placeholder="your one-link" fullWidth />
          </Box>
        </Box>

        <Box className="flex-center">
          <Box sx={styles.claimButtonBox} className="flex-center">
            <Button variant={"contained"} size="large" fullWidth>
              Claim
            </Button>
          </Box>
        </Box>
      </MainContainer>
    </Layout>
  );
}

interface ICreateOneLinkStyles {
  logoBox: SxProps<Theme>;
  claimButtonBox: SxProps<Theme>;
}

const styles: ICreateOneLinkStyles = {
  logoBox: {
    mt: "4rem",
    mb: "2rem",
  },

  claimButtonBox: {
    width: "30%",
    mt: "8rem"
  },
};

export default CreateOneLink;
