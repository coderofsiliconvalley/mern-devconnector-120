import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

// Layout Components
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Landing from "./components/Layout/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import Register from "./components/Auth/Register";

// Boostrap App-Wide Style sheet
import "./App.css";

class App extends Component {
	componentWillMount() {
		// To Maintain Login Persistence: Check for Auth Token
		this.props.onCheckAuthentication();
	}

	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Landing} />
					<div className="container">
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/logout" component={Logout} />
						<Route exact path="/dashboard" component={Dashboard} />
					</div>
					<Footer />
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onCheckAuthentication: () => dispatch(actions.checkAuthentication())
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);