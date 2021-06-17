import React from "react";
import "./RoundButton.css";

const RoundButton = (props) => {
	const { value, active, disabled, onClick } = props;
	return (
		<button
			className={`roundbutton ${active ? "active" : ""}`}
			onClick={onClick}
			disabled={disabled}
		>
			<i className={`fas ${value}`}></i>
		</button>
	);
};

export default RoundButton;
