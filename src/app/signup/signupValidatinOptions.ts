import { RegisterOptions } from "react-hook-form";

export const getEmailValidationOptions = (): RegisterOptions => {
  return {
    required: "One link is required",
  };
};

export const getPasswordValidationOptions = (): RegisterOptions => {
  return {
    required: "One link is required",
  };
};
