import React from "react";
import piggy from "../assets/porco.png";

const Nav = ({ filterHogs, hogBool, nameOrWeight }) => {
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<button onClick={filterHogs}>{hogBool ? "Greased?" : "All Hogs"}</button>
			<select onChange={(e) => {nameOrWeight(e.target.value)}} name="filter">
				<option value="">Filter by category</option>
				<option value="Name">Name</option>
				<option value="Weight">Weight</option>
			</select>
		</div>
	);
};

export default Nav;
