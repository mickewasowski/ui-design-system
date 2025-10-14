import React from "react";
import classNames from "classnames";
import Spinner from "./misc/loaders/Spinner.tsx";
import Dots from "./misc/loaders/Dots.tsx";
import { type ButtonType, type Loader, LoaderEnum} from "../types/Button.types.ts";
import "./Button.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  children: React.ReactNode | string;
  additionalClasses?: string;
  loading?: boolean;
  loader?: {
    type?: Loader;
    size?: number;
    mainColor?: string;
    subColor?: string;
  };
  disabled?: boolean;
  clickHandler: () => void;
}

export const Button = ({
  variant,
  children,
  additionalClasses,
  loading,
  loader,
  disabled,
  clickHandler,
  ...rest
}: IButtonProps) => {
  const classes = classNames(
    'btn',
    `btn-${variant}`,
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    additionalClasses,
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

      return <Spinner />;
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
