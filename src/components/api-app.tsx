'use client'

import { useState } from 'react';
import axios from 'axios';

export default function ApiApp() {
	const [username, setUsername] = useState<string>('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		try {
			await axios.post('/api/auth/app-login', { username });
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div>
			<div className="diy-tree mb-2">
				<ul className="nested">
					<li>
						<span className="folder">app</span>
						<ul className="nested">
							<li>
								<span className="folder">api</span>
								<ul className="nested">
									<li>
										<span className="folder">auth</span>
										<ul className="nested">
											<li>
												<span className="folder mark">app-login</span>
												<ul className="nested">
													<li>route.ts</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
				</ul>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="mb-2">
					<label htmlFor="username">Username</label>
					<input
						id="username"
						name="username"
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						className="w-full border border-gray-300 px-3 py-2 rounded"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-500 text-white py-2 rounded mb-4"
				>
					Sign In
				</button>
			</form>
		</div>
	)
}