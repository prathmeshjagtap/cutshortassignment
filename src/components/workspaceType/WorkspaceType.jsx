import { RiTeamFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";
import { useUserDetails } from "../../context";
import { userDetailsConstants } from "../../constants";
import "./workspaceType.css";

function WorkspaceType() {
	const { userState, userDispatch } = useUserDetails();

	return (
		<div className="form__Container">
			<div>
				<h2>How are you planning to use Eden?</h2>
				<p className="grey-text">
					We'll streamline your setup experience accordingly.
				</p>
			</div>
			<form>
				<section className="workspace__option">
					<label
						for="workType"
						className="input__workspace"
						onClick={(e) =>
							userDispatch({
								type: userDetailsConstants.WORKSPACE_TYPE,
								payload: e.target.value,
							})
						}
						value={userState.workspaceFor}
					>
						<input
							type="radio"
							className="radio__input"
							for="workType"
							name="workType"
						/>

						<BsFillPersonFill className="icon__option" />
						<p>
							<b>For myself</b>
						</p>
						<p className="grey__text">
							Write better. Think more clearly. Stay organized.
						</p>
					</label>
					<label
						for="workType2"
						onClick={(e) =>
							userDispatch({
								type: userDetailsConstants.WORKSPACE_TYPE,
								payload: e.target.value,
							})
						}
						value={userState.workspaceType}
						className="input__workspace"
					>
						<input
							type="radio"
							className="radio__input"
							for="workType2"
							name="workType"
						/>

						<RiTeamFill className="icon__option" />
						<p>
							<b>With my team</b>
						</p>
						<p className="grey__text">
							Wikis, docs and projects, all in one place.
						</p>
					</label>
				</section>
				<button
					onClick={(e) => {
						e.preventDefault();
						userDispatch({
							type: userDetailsConstants.STEP,
						});
					}}
				>
					Create Workspace
				</button>
			</form>
		</div>
	);
}

export { WorkspaceType };
