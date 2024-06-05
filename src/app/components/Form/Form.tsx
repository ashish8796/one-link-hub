import React, { BaseSyntheticEvent } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

type ISignUpFormInputs = {
  email: string;
  password: string;
};

interface IFormProps {
  children: React.ReactNode;
  onSubmit: any
}

const Form = ({ children, onSubmit }: IFormProps) => {
  return <form className="form" onSubmit={onSubmit}>{children}</form>;
};

export default Form;
