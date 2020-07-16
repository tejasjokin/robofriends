import React from 'react';
import 'tachyons';

const Card = ({name , mail, id}) => {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow shadow-2">
			// <img alt="robot" src = {`https://robohash.org/${id}?10*10`}></img>
				<img alt="robot" src = {`https://lh3.googleusercontent.com/QZK33h2nUDxnuObbYgEzGTPgKyCe50gRerlxcBD-2THQ62RXttJhB2BoT3-VqQQdvkbGdMjRDd9Abbq6oLFxt3fIYPFqW8RnqDZY_qpVL4OIJVuCH9Cgr-2ZWAhCRJFcCytaGHBy3I0f9xPXkHTdv-oHv-8DYqu2l6-sYXg2wKAfgrpPejpHMfqHpG5zeFD65t5Cf0rHQZBEmqCO0Czp5_SzSkoZfMJwsp4uiw0nWSYrbbC4_k5QxcZz0Je9D0avXEAbJQm3HA17V3mUD378-2qsGLLHfRRUqvLhatDBaHoCeVTXk6itM0g_mxJ8B-K0iSLLfHdsKk7cbbaoZj3-T70_ZYIvqha1lXX310BnHnzQgKk4C0y7Yk5c30UoGtGXmGwE3H0OTFdWuEIjPfE4lpxsNCa2dy5wPlzEN4OEWLE8w4u-ijigH7azlgaZfgMB7cSzXKZjXrfR5sONyhvEZbiF-_NugIKKGJzoV6XlUikCdUPfYBRycN9NmwCeUyxzjIGve70bVvFBGw36ujHqKB97Do51KiFS7ijpkcUW7RAarerCsivZXGZO_Y34rPXp666DsV6zFSOAZJ-wIxf9XEpVSBC1q1WrjO9jHzE58ZRtLdqEF9LE5hRXq1O9GIksdfRmiNgmpheLnasZ_N30HfSNMxX6bh79CopydrXKDm-P3gCjtMZdBqieC267GA=s657-no?authuser=0`}>
			<div>
				<h2>{name}</h2>
				<p>{mail}</p>
			</div>
		</div>
	);
}

export default Card;