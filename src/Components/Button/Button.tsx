import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import "./Button.scss";

interface ButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	disabled?: boolean;
	variant?: "primary" | "secondary" | "danger";
}

const Button = ({
	disabled = false,
	variant = "primary",
	...props
}: ButtonProps) => {
	return (
		<button
			disabled={disabled}
			className={`button button__${variant} ${disabled && "button__disabled"}`}
			{...props}
		/>
	);
};

export default Button;
