import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CreateCard from "./components/CreateCard/CreateCard";

function App() {
	const [createTimer, setcreateTimer] = useState([]);
	const [timerContent, setTimerContent] = useState([]);

	const createCard = () => {
		setcreateTimer([...createTimer, createTimer.length]);
	};

	const validationTimer = (saisie, event) => {
		event.preventDefault();
		setTimerContent([...timerContent, saisie]);
	};

	// buttons functions
	const active = false;

	const deleteCard = () => {
		console.log("supprimer");
	};
	const pauseCard = () => {
		console.log("pause");
	};
	const playCard = () => {
		console.log("lecture");
	};
	const undoCard = () => {
		console.log("réinitialiser");
	};

	return (
		<div className="App">
			{createTimer.map((index) => {
				return (
					<Card
						active={active}
						// disabled={}
						project={timerContent[index] !== undefined}
						key={index}
						index={index}
						onClick={validationTimer}
						deleteCard={deleteCard}
						pauseCard={pauseCard}
						playCard={playCard}
						undoCard={undoCard}
						name={timerContent[index]}
					/>
				);
			})}
			<CreateCard onClick={createCard} />
		</div>
	);
}

export default App;
