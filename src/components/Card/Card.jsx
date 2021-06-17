import React from "react";
import "./Card.css";
import { useState } from "react";
// import TextField from "@material-ui/core/TextField";
// import Input from "@material-ui/core/Input";
import RoundButton from "../RoundButton/RoundButton";
import Button from "../Button/Button";

const Card = (props) => {
	const { onClick, project, name, RoundButtonClick, active, disabled, timer } =
		props;

	const [saisie, setSaisie] = useState("");

	const buttons = ["fa-times", "fa-play", "fa-pause", "fa-undo"];

	return (
		<div className="card">
			{project ? (
				<>
					<div className="top_container">
						<h1>{name}</h1>
						<RoundButton
							active={active}
							disabled={disabled}
							value={buttons[0]}
							onClick={() => RoundButtonClick(buttons[0])}
						/>
					</div>
					<div className="timer">{timer}</div>
					<div className="bot_container">
						<RoundButton
							value={buttons[1]}
							onClick={() => RoundButtonClick(buttons[1])}
						/>
						<RoundButton
							value={buttons[2]}
							onClick={() => RoundButtonClick(buttons[2])}
						/>
						<RoundButton
							value={buttons[3]}
							onClick={() => RoundButtonClick(buttons[3])}
						/>
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
