import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={
        " block py-2 px-4 outline-none  focus:border-teal-800 focus:ring-teal-800 ring-1 w-80 rounded-lg border border-gray-300 text-sm text-gray-900  bg-gray-100" +
        props.className
      }
      {...props}
    />
  );
});
export default Input;
