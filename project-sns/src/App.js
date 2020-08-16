import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Instagram from "./components/instagram";
import Twitter from "./components/twitter";
import Youtube from "./components/youtube";
import "./App.css";

class App extends Component {
	render() {
		return (
			<div className='projectMain'>
				<div className="projcetLogo">
					<h1>Rowoon<span>.</span></h1>
				</div>
				<ul className='projcetNav'>
					<li>
						<NavLink exact to='/04.project-collect-sns/instagram' activeClassName="active">
							<span>#</span> Instagram
						</NavLink>
					</li>
					<li>
						<NavLink to='/04.project-collect-sns/twitter' activeClassName="active">
							<span>#</span> Twitter
						</NavLink>
					</li>
					<li>
						<NavLink to='/04.project-collect-sns/youtube' activeClassName="active">
							<span>#</span> Youtube
						</NavLink>
					</li>
				</ul>
				<Switch>
					<Route exact path='/04.project-collect-sns' component={Instagram} />
					<Route path='/04.project-collect-sns/instagram' component={Instagram} />
					<Route path='/04.project-collect-sns/twitter' component={Twitter} />
					<Route path='/04.project-collect-sns/youtube' component={Youtube} />
					<Route render={() => <div className="projectError">404 NOT FOUND :(</div>} />
				</Switch>
			</div>
		);
	}
}
export default App;
