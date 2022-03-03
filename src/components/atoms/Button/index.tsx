import classNames from "classnames";

import styles from "_components/atoms/Button/Button.module.css";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  variant?: "default" | "primary" | "primary-text";
  className?: string;
}

const getVariantStyle = (
  variant: ButtonProps["variant"]
): string | undefined => {
  switch (variant) {
    case "primary":
      return styles["button-primary"];
    case "primary-text":
      return styles["button-primary-text"];
    case "default":
    default:
      return undefined;
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={classNames(styles.button, className, getVariantStyle(variant))}
    >
      {children}
    </button>
  );
};

export default Button;
