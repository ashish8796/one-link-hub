import { RegisterOptions } from "react-hook-form";

export const oneLinkOptions: RegisterOptions = {
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
