import React from 'react';
import 'tachyons';

const Card = ({name , mail, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-2">
			// <img alt="robot" src = {`https://robohash.org/${id}?10*10`}></img>
				<img alt="robot" src = {"Fxt3fIYPFqW8RnqDZY_qpVL4OIJVuCH9Cgr-2ZWAhCRJFcCytaGHBy3I0f9xPXkHTdv-oHv-8DYqu2l6-sYXg2wKAfgrpPejpHMfqHpG5zeFD65t5Cf0rHQZBEmqCO0Czp5_SzSkoZfMJwsp4uiw0nWSYrbbC4_k5QxcZz0Je9D0avXEAbJQm3HA17V3mUD378-2qsGLLHfRRUqvLhatDBaHoCeVTXk6itM0g_mxJ8B-K0iSLLfHdsKk7cbbaoZj3-T70_ZYIvqh.png"}>
			<div>
				<h2>{name}</h2>
				<p>{mail}</p>
			</div>
		</div>
	);
}

export default Card;