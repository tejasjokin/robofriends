import React,{ Component } from 'react';
import Cardlist from '../Components/Cardlist.js';
import Searchbox from '../Components/Searchbox.js';
import Scroll from '../Components/Scroll.js'
import ErrorBoundary from '../Components/ErrorBoundary.js';
import './App.css';

class App extends Component
{
	constructor()
	{
		super()
		this.state = 
		{
			robots : [],
			searchfield : ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>  response.json())
		.then(users => {this.setState({ robots : users})})
	}

	onSearchchange = (event) =>
	{
		this.setState({ searchfield : event.target.value})
	}
	render()
	{
		const { robots, searchfield } = this.state
		const filterrobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		if(!robots.length)
		{
			return(
				<h1>LOADING</h1>
			);
		}
		else{
			return(
			<div className="tc">
				<nav className="tc">
				<h1>ROBOFRIENDS</h1>
				<Searchbox onSearchchange = {this.onSearchchange}/>
				</nav>
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots = { filterrobots } />
					</ErrorBoundary>
				</Scroll>
			</div>
			);
		}
	}
}

export default App;