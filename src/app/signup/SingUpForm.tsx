"use client";

import { Box, Button, SxProps, TextField, Theme } from "@mui/material";
import Form from "../components/Form";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  getEmailValidationOptions,
  getPasswordValidationOptions,
} from "./signupValidatinOptions";

type ISignUpFormInputs = {
  email: string;
  password: string;
};

const SingUpForm = () => {
  const { register, watch, handleSubmit } = useForm<ISignUpFormInputs>();

  const onSubmit: SubmitHandler<ISignUpFormInputs> = (data) => {
    console.log({ data });
  };

  return (
    <Box className="flex-center">
      <Box sx={styles.signupFormBox}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Box className="flex-col">
            <TextField
              placeholder="Email"
              fullWidth
              {...register("email", getEmailValidationOptions())}
            />
            <TextField
              placeholder="Password"
              fullWidth
              {...register("password", getPasswordValidationOptions())}
            />
          </Box>

          <Button type="submit">Create Account</Button>
        </Form>
      </Box>
    </Box>
  );
};

interface ISingUpFormStyles {
  signupFormBox: SxProps<Theme>;
}

const styles: ISingUpFormStyles = {
  signupFormBox: {
    width: "50%",
    border: "2px solid blue",
  },
};

export default SingUpForm;
