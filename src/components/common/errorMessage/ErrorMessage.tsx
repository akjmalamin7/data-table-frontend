import React from "react";
interface Props {
  message?: string;
}

const ErrorMessage = ({ message }: Props) => {
  return <h3>{message}</h3>;
};

export default ErrorMessage;
