import React from "react";
import { useUserDetails } from "../../context";
import "./progressSlider.css";

function ProgressSlider() {
	const {
		userState: { step },
	} = useUserDetails();

	const giveClassName = (item) => {
		if (step >= item) {
			return "backgroundColor";
		}
		return "";
	};
	return (
		<div className="progressSlider__container">
			{[1, 2, 3, 4].map((item, index, arr) => {
				if (index === 0) {
					return (
						<>
							<div className={`progressSlider__circle ${giveClassName(item)}`}>
								{item}
							</div>
							<div
								className={`progressSlider__line ${giveClassName(item)}`}
							></div>
						</>
					);
				} else if (index === arr.length - 1) {
					return (
						<>
							<div
								className={`progressSlider__line ${giveClassName(item)}`}
							></div>
							<div className={`progressSlider__circle ${giveClassName(item)}`}>
								{item}
							</div>
						</>
					);
				}
				return (
					<>
						<div
							className={`progressSlider__line ${giveClassName(item)}`}
						></div>
						<div className={`progressSlider__circle ${giveClassName(item)}`}>
							{item}
						</div>
						<div
							className={`progressSlider__line ${giveClassName(item)}`}
						></div>
					</>
				);
			})}
		</div>
	);
}

export { ProgressSlider };
