import classNames from "classnames";
import { useState } from "react";
import "./Input.scss";

interface IInputProps {
  input: {
    type: string;
    value: string | number;
    changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    attributes?: React.InputHTMLAttributes<HTMLInputElement>;
  };
  label: {
    text: string;
    name?: string;
  };
  borderColor?: string;
  textColor?: string;
  error?: {
    show: boolean;
    text: string;
  };
}

export const Input = ({
  input,
  label,
  borderColor,
  textColor,
  error = {
    show: false,
    text: "",
  },
}: IInputProps) => {
  const { type, value, changeHandler, attributes = {} } = input;
  const {
    onFocus: userOnFocus,
    onBlur: userOnBlur,
    ...restAttributes
  } = attributes;
  const { text, name } = label;
  const { show: showError, text: errorText } = error;

  const [focused, setFocused] = useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (userOnFocus) userOnFocus(event);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (userOnBlur) userOnBlur(event);
  };

  const hasValue = Boolean(
    (typeof value === "string" && value.length > 0) ||
    (typeof value === "number" && !isNaN(value)),
  );

  const wrapperClasses = classNames(
    "input-label-wrapper",
    focused && "focus-wrapper",
    hasValue && "has-value",
    showError && "error-wrapper",
  );

  const labelClasses = classNames(
    hasValue && "label-at-top",
    focused && "label-at-top-focused",
  );


  return (
    <div className={wrapperClasses} style={{ borderColor: borderColor }}>
      <p
        className="error-text"
        style={{ display: showError ? "block" : "none" }}
      >
        {errorText}
      </p>
      <input
        id={name}
        value={value}
        type={type}
        onChange={changeHandler}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restAttributes}
      />
      <label className={labelClasses} htmlFor={name} data-color={textColor}>
        {text}
      </label>
    </div>
  );
};
