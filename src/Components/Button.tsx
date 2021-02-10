import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import "./Button.scss";

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	variant?: "primary" | "secondary" | "danger";
}

const Button = ({ variant = "primary", ...props }: ButtonProps) => {
	return <button className={`button button__${variant}`} {...props} />;
};

export default Button;
