import { DeepMap, FieldError } from "react-hook-form";
import Spacing from "../Spacing/Spacing";
import "./Input.scss";

interface InputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	errors: DeepMap<Record<string, any>, FieldError>;
	register: any;
	label?: string;
}

const Input = ({
	errors,
	register,
	label = "Placeholder",
	name = "default",
	...props
}: InputProps) => {
	return (
		<>
			<label htmlFor={name} className="input__label">
				{label}
			</label>
			<input className="input" name={name} ref={register} {...props} />
			{errors[name] && (
				<Spacing>
					<div className="input__error">{errors[name].message}</div>
				</Spacing>
			)}
		</>
	);
};

export default Input;
