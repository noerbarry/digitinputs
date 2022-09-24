import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder15: "rounded-radius15",
  CircleBorder30: "rounded-radius30",
};
const variants = {
  OutlineWhiteA700: "border border-solid border-white_A700 text-white_A700",
  FillBlack900: "bg-black_900 text-white_A700",
};
const sizes = {
  sm: "xl:p-[4px] lg:p-[4px] 2xl:p-[5px] 3xl:p-[6px] p-[7px]",
  md: "lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] p-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["CircleBorder15", "CircleBorder30"]),
  variant: PropTypes.oneOf(["OutlineWhiteA700", "FillBlack900"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
Button.defaultProps = {
  className: "",
  shape: "CircleBorder15",
  variant: "OutlineWhiteA700",
  size: "sm",
};

export { Button };
