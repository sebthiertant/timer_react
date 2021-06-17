import React from "react";
import "./CreateCard.css";

const CreateCard = (props) => {
	const { onClick } = props;

	return (
		<div className="createTimer">
			<span className="empty" onClick={onClick}>
				+
			</span>
		</div>
	);
};

export default CreateCard;
