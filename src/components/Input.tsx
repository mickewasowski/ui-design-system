// TODO:
// implement an input field with a label
// it should have states like inactive, focused, error
// accept value and change handler
// accept custom color

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

function Input({
  input,
  label,
  borderColor,
  textColor,
  error = {
    show: false,
    text: "",
  },
}: IInputProps) {
  const { type, value, changeHandler, attributes = {} } = input;
  const { text, name } = label;
  const { show: showError, text: errorText } = error;

  const [focused, setFocused] = useState(false);

  const { onFocus: userOnFocus, onBlur: userOnBlur, ...restAttributes } = attributes;

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);

    if (userOnFocus) userOnFocus(event);
  }
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);

    if (userOnBlur) userOnBlur(event);
  }

  const wrapperClasses = classNames(
    "input-label-wrapper",
    focused && "focus-wrapper",
    showError && "error-wrapper",
  );

  const hasValue = Boolean(
    (typeof value === "string" && value.length > 0) ||
    (typeof value === "number" && !isNaN(value)),
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
        data-color={textColor}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...restAttributes}
      />
      <label className={labelClasses} htmlFor={name} data-color={textColor}>
        {text}
      </label>
    </div>
  );
}

export default Input;
