import { Route, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import UserList from './users/UserList';

function App() {
	return (
		<div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32 ">
			<h1 className="text-center font-bold text-2xl text-gray-700">TODO WITH REDUX-TOOLKIT</h1>
			<Routes>
				<Route path="/" exact element={<UserList />} />
				<Route path="/new_user" exact element={<AddUser />} />
			</Routes>
		</div>
	);
}

export default App;
