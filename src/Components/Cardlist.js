import React from 'react';
import Card from './Card.js';
import 'tachyons';

const Cardlist = ({ robots }) =>{
	return(
		<>
			{
				robots.map((user,i) =>{
					return(
						<Card key = {user.id} name = {user.name} mail = {user.email} id = {user.id}/>
					);
				})
			}
		</>
	);
}

export default Cardlist;