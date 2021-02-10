import { useSelector } from "react-redux";
import { qaSelector } from "../Reducers/qaReducer";

const App = () => {
	const { data } = useSelector(qaSelector);
	console.log(data);
	return <div>qa app</div>;
};

export default App;
