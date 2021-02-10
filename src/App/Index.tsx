import { useSelector } from "react-redux";
import Button from "../Components/Button";
import { qaSelector } from "../Reducers/qaReducer";

const App = () => {
	const { data } = useSelector(qaSelector);
	console.log(data);
	return (
		<div>
			<div>
				<Button>hello</Button>
				<Button variant="secondary">hello</Button>
				<Button variant="danger">hello</Button>
			</div>
		</div>
	);
};

export default App;
