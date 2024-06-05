"use client";

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
import { useMiniStore } from "../hooks/storeSelector";
import { Form, RegisterOptions, SubmitHandler, useForm } from "react-hook-form";

type IOneLinkInput = {
  oneLink: string;
};

function CreateOneLink() {
  const { state, dispatch } = useMiniStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOneLinkInput>();

  const onSubmit: SubmitHandler<IOneLinkInput> = (data) => {
    console.log({ data });
  };

  console.log("Log in One link page.");

  const oneLinkOptions: RegisterOptions = {
    required: "One link is required",

    minLength: {
      value: 3,
      message: "One link should be at least 3 characters",
    },

    maxLength: {
      value: 20,
      message: "One link should be at most 20 characters",
    },
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                placeholder="your one-link"
                fullWidth
                {...register("oneLink", oneLinkOptions)}
              />

              <Box sx={styles.claimButtonBox}>
                <Button
                  variant={"contained"}
                  size="large"
                  fullWidth
                  type="submit"
                >
                  Claim
                </Button>
              </Box>
            </form>
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
    width: "100%",
    mt: "8rem",
  },
};

export default CreateOneLink;
