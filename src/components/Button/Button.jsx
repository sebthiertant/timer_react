import React from "react";
import "./Button.css";

const Button = (props) => {
	const { value, disabled, onClick } = props;

	return (
		<button className={`button`} onClick={onClick} disabled={disabled}>
			{value}
		</button>
	);
};

export default Button;
