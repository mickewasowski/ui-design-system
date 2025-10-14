// TODO:
// implement an input field with a label
// it should have states like inactive, focused, error
// accept value and change handler
// accept custom color

import classNames from "classnames";

interface IInputProps {
  input: {
    type: string;
    value: string | number;
    changeHandler: () => void;
    attibutes?: React.InputHTMLAttributes<HTMLInputElement>;
  };
  label: {
    text: string;
    name?: string;
  };
  borderColor?: string;
  textColor?: string;
  inactive: boolean;
  focused: boolean;
  error: boolean;
  errorText: string;
}

function Input({
  input,
  label,
  borderColor,
  textColor,
  inactive,
  focused,
  error,
  errorText,
}: IInputProps) {
  const {type, value, changeHandler, attibutes} = input;
  const {text, name} = label;

    const wrapperClasses = classNames({

    });

  const inputClasses = classNames({

  });

  const labelClasses = classNames({

  });

  return (
    <div className={wrapperClasses}>
      <p>{errorText}</p>
      <input className={inputClasses} value={value} type={type} onChange={changeHandler} {...attibutes} />
      <label className={labelClasses} name={name}>{text}</label>
    </div>
  );
}

export default Input;
