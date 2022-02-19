import React from "react";
import "./Main.css";

interface Props {
	showTarget: boolean;
	handleClickedPic: React.MouseEventHandler<HTMLDivElement>;
}

const dropDown = (
	<div className="drop-down">
		<button>1</button>
		<button>2</button>
		<button>3</button>
	</div>
);

const Main: React.FC<Props> = ({ showTarget, handleClickedPic }) => {
	return (
		<div className="img-container" onClick={handleClickedPic}>
			<img src="/images/cartoonnetwork.jpg" alt="pic" />
			{showTarget ? dropDown : null}
		</div>
	);
};

export default Main;
