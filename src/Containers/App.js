import React,{ Component } from 'react';
import Cardlist from '../Components/Cardlist.js';
import Searchbox from '../Components/Searchbox.js';
import Scroll from '../Components/Scroll.js'
import ErrorBoundary from '../Components/ErrorBoundary.js';
import { connect } from 'react-redux';
import './App.css';
import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = dispatch => {
	return{
		onSearchchange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots()),
	}
}

class App extends Component
{
	componentDidMount(){
		this.props.onRequestRobots();
	}	

	render()
	{
		const { searchField, onSearchchange, robots, isPending } = this.props
		const filterrobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchField.toLowerCase())
		})
		if(isPending)
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
				<Searchbox onSearchchange = {onSearchchange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);