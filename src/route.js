import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';

const Path = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' exact component={Login} />
				<Route path='/home' exact component={Home} />
			</Switch>
		</Router>
	);
};

export default Path;
