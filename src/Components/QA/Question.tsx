import { useState } from "react";
import { QuestionAndAnswer } from "../../Reducers/qaReducer";
import "./Question.scss";

interface QuestionAndAnswerProps extends QuestionAndAnswer {
	onDeleteClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Question = ({
	question,
	answer,
	onDeleteClick,
}: QuestionAndAnswerProps) => {
	const [extended, setExtended] = useState(false);

	return (
		<div onClick={() => setExtended(!extended)} className="qa">
			<div className="qa__header">
				<div className="qa__question">{question}</div>
				<div onClick={onDeleteClick} className="qa__delete">
					Delete entry
				</div>
			</div>
			<div className={`qa__answer ${extended && `qa__answer-active`}`}>
				{answer}
			</div>
		</div>
	);
};

export default Question;
