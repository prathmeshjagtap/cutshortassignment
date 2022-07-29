import { BsCheck } from "react-icons/bs";
import "./success.css";

function Success() {
	return (
		<div className="form__Container">
			<div className="success__container">
				<BsCheck className="icon" />
				<h2 className="heading">Congratulations, Eren!</h2>
				<p className="grey__text subheading">
					You have completed onboarding, you can start using Eden!
				</p>
			</div>
			<button>Launch Eden</button>
		</div>
	);
}

export { Success };
