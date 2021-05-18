import React from 'react';
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

const Landing = () => <div>Landing</div>;
const Header = () => <div>Header</div>;

const App = () => (
	<React.StrictMode>
		<BrowserRouter>
			<div>
				<Header />
				<Route exact path="/" component={Landing} />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);
export default App;
