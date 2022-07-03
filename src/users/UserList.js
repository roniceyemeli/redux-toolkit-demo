import React from 'react';
import UserCard from './UserCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const UserList = () => {
	const users = [
		{ id: Math.random(), name: 'Kemi', email: 'kemi@email.com' },
		{ id: Math.random(), name: 'Sékou', email: 'sekou@email.com' },
		{ id: Math.random(), name: 'Adama', email: 'adama@email.com' },
		{ id: Math.random(), name: 'Djibril', email: 'djibril@email.com' }
	];
	const spreader = () => users.map((user, i) => <UserCard user={user} key={i}/>);
	return (
		<div>
			<Link to="/new_user">
				<Button>
					
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
					</svg>
                    <span>New User</span>
				</Button>
			</Link>
			<div className="grid gap-5 md:grid-cols-2">
				{users ? (
					spreader()
				) : (
					<p className="text-center col-span-2 text-gray-700 font-semibold">No user to show </p>
				)}
			</div>
		</div>
	);
};

export default UserList;
