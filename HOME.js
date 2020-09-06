import React from 'react';
import {HashRouter,Switch, Route } from 'react-router-dom';
import Login from './screen/Login';
import UserScreen from "./screen/UserScreen.js";
import Store from "./screen/Store.js";
import Example from "./screen/demo.js";
function HOME(){
	return(
	<HashRouter>
		<Switch>
			 <Route path='/login' component={Login} />
			 <Route path='/userscreen' component={UserScreen} />
			 <Route path='/store' component={Store} />
			 <Route path='/s' component={Example} />
		</Switch>
	</HashRouter>
	);
}

export default HOME;
