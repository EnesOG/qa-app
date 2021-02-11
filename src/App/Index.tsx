import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import Question from "../Components/QA/Question";
import Spacing from "../Components/Spacing/Spacing";
import {
	deleteAll,
	toggleSort,
	qaSelector,
	deleteEntry,
} from "../Reducers/qaReducer";

const App = () => {
	const { data, sort } = useSelector(qaSelector);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Created questions</h1>
			<div className="qa__container">
				{data && data.length !== 0 ? (
					data
						.slice()
						.sort((a, b) =>
							!sort
								? a.question.localeCompare(b.question)
								: b.question.localeCompare(a.question)
						)
						.map(({ question, answer }, i) => (
							<Question
								onDeleteClick={() => dispatch(deleteEntry(i))}
								key={i}
								question={question}
								answer={answer}
							/>
						))
				) : (
					<div>no questions</div>
				)}
			</div>
			<Spacing>
				<Button onClick={() => dispatch(toggleSort())} variant="secondary">
					Sort questions
				</Button>
			</Spacing>
			<Button onClick={() => dispatch(deleteAll())} variant="danger">
				Delete all questions
			</Button>
		</div>
	);
};

export default App;
