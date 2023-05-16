import { useState, useEffect } from 'react';
import { Data, User } from './types';
import './App.css';

function App() {
	const [randomUsers, setRandomUsers] = useState<User[]>([]);

	const getData = async () => {
		try {
			const res = await fetch('https://randomuser.me/api/');
			const data: Data = await res.json();
			setRandomUsers((randomUsers) => [...randomUsers, data.results[0]]);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<main className="App">
			<h1>ba-interview-1</h1>
			<ul>
				{randomUsers &&
					randomUsers.map((user) => (
						<li key={user.id.name}>
							<img src={user.picture.thumbnail} alt="" />
							<p>
								{user.name.first} {user.name.last}
							</p>
						</li>
					))}
			</ul>
			<button onClick={() => getData()}>Fetch more people!</button>
		</main>
	);
}

export default App;
