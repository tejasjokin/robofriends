import React from 'react';
import 'tachyons';

const Card = ({name , mail, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-2">
			<img alt="robot" src = {`https://robohash.org/${id}?10*10`}></img>
			<div>
				<h2>{name}</h2>
				<p>{mail}</p>
			</div>
		</div>
	);
}

export default Card;