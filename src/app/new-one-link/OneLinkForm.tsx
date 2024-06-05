"use client";

import { Box, Button, SxProps, TextField, Theme } from "@mui/material";
import { useMiniStore } from "../hooks/storeSelector";
import { SubmitHandler, useForm } from "react-hook-form";
import { oneLinkOptions } from "./onelinkValidationOptions";
import { isOnelinkTaken } from "@/helper/onelinkHerlper/onelinkHelper";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface IOneLinkFormProps {
  onelinks: [];
}

type IOneLinkInput = {
  oneLink: string;
};

// get all the onelinks
// check for the selected onelink in the data
// inform user that is the given onelink available or not
// if available then proceed to the next step

function OneLinkForm({ onelinks }: IOneLinkFormProps) {
  const { state, dispatch } = useMiniStore();
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm<IOneLinkInput>();
  const newOnelink = watch("oneLink");

  const onSubmit: SubmitHandler<IOneLinkInput> = (data) => {
    console.log({ data });
    router.push("/signup");
  };

  const isonelinkAvailable = isOnelinkTaken(onelinks, newOnelink);

  console.log({ isonelinkAvailable, newOnelink });

  return (
    <Box sx={{ width: "50%" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <TextField
            placeholder="your one-link"
            fullWidth
            {...register("oneLink", oneLinkOptions)}
          />
          {isonelinkAvailable ? (
            <CheckCircle
              color={
                newOnelink !== undefined && newOnelink.length > 0
                  ? "primary"
                  : "disabled"
              }
            />
          ) : (
            <Cancel color="secondary" />
          )}
        </Box>

        <Box sx={styles.claimButtonBox}>
          <Button variant={"contained"} size="large" fullWidth type="submit">
            Claim
          </Button>
        </Box>
      </form>
    </Box>
  );
}

interface IOneLinkFormStyles {
  claimButtonBox: SxProps<Theme>;
}

const styles: IOneLinkFormStyles = {
  claimButtonBox: {
    width: "100%",
    mt: "8rem",
  },
};

export default OneLinkForm;
