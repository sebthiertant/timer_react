import React from "react";
import "./Card.css";
import { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";
import RoundButton from "../RoundButton/RoundButton";
import Button from "../Button/Button";

const Card = (props) => {
	const {
		index,
		onClick,
		project,
		name,
		active,
		disabled,
		deleteCard,
		pauseCard,
		playCard,
		undoCard,
	} = props;

	const [saisie, setSaisie] = useState("");
	const [seconds, setSeconds] = useState([]);

	const startTimer = () => {
		const interval = setInterval(() => {
			setSeconds((seconds) => seconds + 1);
		}, 1000);
	};

	// setSeconds([...seconds, 0]);

	// for icons
	const buttons = ["fa-times", "fa-play", "fa-pause", "fa-undo"];

	return (
		<div className="card">
			{project ? (
				<>
					<div className="top_container">
						<h1>{name}</h1>
						<RoundButton
							value={buttons[0]}
							active={active}
							disabled={disabled}
							onClick={deleteCard}
						/>
					</div>
					<div className="timer">{seconds[index]}</div>
					<div className="bot_container">
						<RoundButton value={buttons[1]} onClick={playCard} />
						<RoundButton value={buttons[2]} onClick={pauseCard} />
						<RoundButton value={buttons[3]} onClick={undoCard} />
					</div>
				</>
			) : (
				<div className="creationCard">
					<h2>New project</h2>
					<form onSubmit={(e) => onClick(saisie, e)}>
						<input
							type="text"
							placeholder="project name"
							value={saisie}
							onChange={(e) => setSaisie(e.target.value.toUpperCase())}
						/>
						<Button
							value={"create new project"}
							onClick={(e) => onClick(saisie, e)}
							disabled={false}
							active={false}
						/>
					</form>
				</div>
			)}
		</div>
	);
};

export default Card;
