import React from 'react';
import "./App.css";

const Home = (props) =>
{
	console.log("props",props);
	//const x=
	props.callingParent();
	//x(); 	
	return 
		(
		<div style={{display:"flex" , justifyContent:"center"}}>
			{" "}
		<h1 className="heading" id="heading">
	       {props.title}
	     </h1>
	     <h1 className="heading" id="heading">
	       {props.description}
	     </h1>
	   
	 );   
};

export default Home;