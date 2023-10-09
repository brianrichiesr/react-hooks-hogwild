import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList.js"
import HogDetails from "./HogDetails"
import Modal from "./Modal"

import hogs from "../porkers_data";

function App() {
	const [modalState, setModalState] = useState(true);
	const [currentHog, setCurrentHog] = useState(hogs[0]);
	const [hogsDisplayed, setHogsDisplayed] = useState(hogs);
	const [hogBool, setHogBool] = useState(true);

	const nameOrWeight = (filterBy) => {
		if (filterBy) {
			if (filterBy === "Name") {
				const filteredItems = [...hogsDisplayed].sort((a, b) => {
					return a.name.localeCompare(b.name)
				})
				setHogsDisplayed(filteredItems)
			} else {
				const filteredItems = [...hogsDisplayed].sort((a, b) => {
					return a.weight - b.weight;
				});
				setHogsDisplayed(filteredItems);
			}
		} else {
			setHogsDisplayed(hogs);
		}
	}

	function toggleModal(idx) {
		setModalState(!modalState)
		setCurrentHog(hogsDisplayed[idx])
	}
	
	function closeModal() {
		setModalState(true);
	}

	const filterHogs = () => {
		if (hogBool) {
			const greasedHogs = hogsDisplayed.filter(hog => {
				return hog.greased;
			})
			setHogsDisplayed(greasedHogs);
		} else {
			setHogsDisplayed(hogs);
		}
		let bool = !hogBool;
		setHogBool(bool);
	}

	return (
		<div className="App">
			<Nav nameOrWeight={nameOrWeight} filterHogs={filterHogs} hogBool={hogBool} />
			<HogList hogs={hogsDisplayed} toggleModal={toggleModal}/>
			<Modal closeModal={closeModal} currentHog={currentHog} modalState={modalState}/>
			<HogDetails />
		</div>
	);
}

export default App;