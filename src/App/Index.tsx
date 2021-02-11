import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/Button/Button";
import Input from "../Components/Input/Input";
import Question from "../Components/QA/Question";
import Spacing from "../Components/Spacing/Spacing";
import {
	deleteAll,
	toggleSort,
	qaSelector,
	deleteEntry,
	QuestionAndAnswer,
	addQuestion,
} from "../Reducers/qaReducer";
import { nanoid } from "nanoid";

const App = () => {
	const { data, sort } = useSelector(qaSelector);
	const dispatch = useDispatch();
	const { register, handleSubmit, errors, reset } = useForm();
	const onSubmit: SubmitHandler<QuestionAndAnswer> = (data, e) => {
		dispatch(addQuestion({ ...data, id: nanoid() }));
		return reset();
	};

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
						.map((q) => (
							<Question
								onDeleteClick={() => dispatch(deleteEntry(q.id))}
								key={q.id}
								{...q}
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

			<Spacing>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Create new question!</h2>
					<Input
						errors={errors}
						register={register({
							required: {
								value: true,
								message: "Please enter your question",
							},
						})}
						name="question"
						label="What is your question?"
					/>
					<Spacing>
						<Input
							errors={errors}
							register={register({
								required: {
									value: true,
									message: "Please enter your answer",
								},
							})}
							name="answer"
							label="What is your answer?"
						/>
					</Spacing>
					<Button>Create question</Button>
				</form>
			</Spacing>
		</div>
	);
};

export default App;
