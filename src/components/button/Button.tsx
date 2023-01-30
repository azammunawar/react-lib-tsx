import React from "react";

interface IButtonProps {
  title: string;
}

export const Button: React.FC<IButtonProps> = ({ title }) => {
  return <button>{title}</button>;
};
