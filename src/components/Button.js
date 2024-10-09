import { forwardRef } from "react";

const Button = forwardRef((props, ref) => {
  return (
    <button
      ref={ref}
      className={`rounded px-4 p-1  ${props.clxName}`}
      {...props}
    >
      {" "}
      {props.children}
    </button>
  );
});
export default Button;
