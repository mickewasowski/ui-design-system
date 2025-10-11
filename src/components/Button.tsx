// type
// 'primary', 'secondary', 'warning', 'underline'

import React from "react";
import classNames from "classnames";
import Spinner from "./misc/loaders/Spinner.tsx";
import Dots from "./misc/loaders/Dots.tsx";
import { type Button as ButtonType, type Loader, LoaderEnum} from "../types/Button.types.ts";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  clickHandler: () => void;
  children: React.ReactNode | string;
  loading?: boolean;
  loader?: {
    type?: Loader;
    size?: number;
    mainColor?: string;
    subColor?: string;
  };
  disabled?: boolean;
}

export const Button = ({
  variant,
  clickHandler,
  children,
  loading,
  loader,
  disabled,
  ...rest
}: IButtonProps) => {
  const classes = classNames(
    'btn',
    `btn-${variant}`,
    loading && 'btn-loading',
    disabled && 'btn-disabled',
  );

  const handleClick = () => {
    if (disabled) return;
    clickHandler();
  };

  const renderButtonContents = () => {
    if (loading) {
      if (loader && loader.type) {
        switch (loader.type) {
          case LoaderEnum.Spinner: {
            return <Spinner size={loader.size} mainColor={loader.mainColor} subColor={loader.subColor} />;
          }
          case LoaderEnum.Dots: {
            return <Dots size={loader.size} mainColor={loader.mainColor} subColor={loader.subColor} />;
          }
          default: {
            return <Spinner />;
          }
        }
      }
    }

    return children;
  };

  return (
    <button
      className={classes}
      onClick={handleClick}
      disabled={Boolean(disabled)}
      {...rest}
    >{renderButtonContents()}</button>
  );
};
