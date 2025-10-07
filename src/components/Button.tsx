// TODO:
// here implement the structure of a button component you wish to provide to the user
// add different variants like - primary, secondary, disabled, loading
// add props - type (variant), custom color, click handler, state for disabling
//
//

// const options = {
//   shadow: true,
//   shadowColor: '',
//   color: '',
//   loaderType: 'spinner' | 'dots'
// }

// type
// 'primary', 'secondary', 'warning', 'underline'

// loading - boolean prop

// disable - boolean prop

// click handler

// children - assuming this is a text and/or an icon
//

import React from "react";
import { Button as ButtonType, Options } from "../types/Button.types.ts";

interface IButtonProps {
  type: ButtonType;
  clickHandler: () => void;
  children: React.ReactNode | string;
  options?: Options;
  loading?: boolean;
  disable?: boolean;
}

export const Button = ({
  type,
  clickHandler,
  children,
  options,
  loading,
  disable,
}: IButtonProps) => {
  return (
    <button
      className={`btn btn-${type}`}
      onClick={clickHandler}
      disabled={Boolean(disable)}
    ></button>
  );
};
