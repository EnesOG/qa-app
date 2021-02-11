import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import Question from "../Components/QA/Question";
import { deleteAll, qaSelector } from "../Reducers/qaReducer";

const App = () => {
	const { data, sort } = useSelector(qaSelector);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Created questions</h1>
			<div className="qa__container">
				{data.map(({ question, answer }, i) => (
					<Question key={i} question={question} answer={answer} />
				))}
			</div>
			<Button variant="secondary">Sort questions</Button>
			<Button onClick={() => dispatch(deleteAll())} variant="danger">
				Delete all questions
			</Button>
		</div>
	);
};

export default App;
