import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Landing = () => <div>Landing</div>;
const header = () => <div>Header</div>;

const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path='/' compoennt={Landing} />
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
