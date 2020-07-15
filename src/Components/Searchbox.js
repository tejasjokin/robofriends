import React from 'react';

const Searchbox = ({ onSearchchange }) =>{
	return(
		<div className="pa2">
		<input 
		className = "tc b br3 pa3 ba b--green bg-washed-red" 
		type="search" 
		placeholder="Search robot"
		onChange = { onSearchchange } 
		/>
		</div>
		);
}

export default Searchbox;