import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList.js"
import HogDetails from "./HogDetails"
import Modal from "./Modal"

import hogs from "../porkers_data";

function App() {
	const [modalState, setModalState] = useState(true)
	const [currentHog, setCurrentHog] = useState(hogs[0])

	function toggleModal(idx) {
		setModalState(!modalState)
		setCurrentHog(hogs[idx])
	}
	
	function closeModal() {
		setModalState(true);
	}

	return (
		<div className="App">
			<Nav />
			<HogList hogs={hogs} toggleModal={toggleModal}/>
			<Modal closeModal={closeModal} currentHog={currentHog} modalState={modalState}/>
			<HogDetails />
		</div>
	);
}

export default App;