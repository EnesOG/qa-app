import { useState } from "react";
import { QuestionAndAnswer } from "../../Reducers/qaReducer";
import "./Question.scss";

const Question = ({ question, answer }: QuestionAndAnswer) => {
	const [extended, setExtended] = useState(false);

	return (
		<div onClick={() => setExtended(!extended)} className="qa">
			<div className="qa__question">{question}</div>
			<div className={`qa__answer ${extended && `qa__answer-active`}`}>
				{answer}
			</div>
		</div>
	);
};

export default Question;
