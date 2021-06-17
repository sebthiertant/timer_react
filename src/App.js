import React from "react";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import CreateCard from "./components/CreateCard/CreateCard";

function App() {
	const [createTimer, setcreateTimer] = useState([]);
	const [timerContent, setTimerContent] = useState([]);
	const [seconds, setSeconds] = useState([0]);

	const startTimer = () => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
	};

	const active = false;

	const createCard = () => {
		setcreateTimer([...createTimer, createTimer.length]);
	};

	const validationTimer = (saisie, event) => {
		event.preventDefault();
		setTimerContent([...timerContent, saisie]);
		setSeconds([...seconds, seconds]);
	};

	const RoundButtonClick = (button) => {
		switch (button) {
			case "fa-times":
				console.log("supprimer");
				break;
			case "fa-play":
				console.log("lecture");
				break;
			case "fa-pause":
				console.log("pause");
				break;
			case "fa-undo":
				console.log("réinitialiser");
				break;
			default:
				return;
		}
	};

	return (
		<div className="App">
			{createTimer.map((index) => {
				return (
					<Card
						active={active}
						// disabled={}
						timer={seconds[index]}
						project={timerContent[index] !== undefined}
						key={index}
						onClick={validationTimer}
						RoundButtonClick={RoundButtonClick}
						name={timerContent[index]}
					/>
				);
			})}
			<CreateCard onClick={(e) => createCard(e)} />
		</div>
	);
}

export default App;
