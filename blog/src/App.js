import React from 'react';
import './App.css';

import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import NavbarBlog from './components/NavbarBlog';

export default class App extends React.Component {
	render() {
		return (
			<NavbarBlog />
		);
	}
}
