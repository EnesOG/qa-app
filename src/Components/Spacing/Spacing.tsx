import { ReactNode } from "react";
import "./Spacing.scss";

interface SpacingProps {
	children: ReactNode;
}
const Spacing = ({ children }: SpacingProps) => {
	return <div className="spacing">{children}</div>;
};

export default Spacing;
