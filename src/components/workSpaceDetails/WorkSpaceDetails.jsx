import { userDetailsConstants } from "../../constants";
import { useUserDetails } from "../../context";

function WorkSpaceDetails() {
	const { userState, userDispatch } = useUserDetails();
	return (
		<div className="form__Container">
			<div>
				<h2>Let's set up a home for all your work</h2>
				<p className="grey__text">
					You can always create another workspace later.
				</p>
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					userDispatch({
						type: userDetailsConstants.STEP,
					});
				}}
			>
				<div>
					<label>Workspace Name</label>
					<input
						placeholder="Eden"
						name="workspaceName"
						onChange={(e) =>
							userDispatch({
								type: userDetailsConstants.WORKSPACE_NAME,
								payload: e.target.value,
							})
						}
						value={userState.workspaceName}
						required
					/>
				</div>
				<div>
					<label>
						Workspace URL <span className="grey__text">(optional)</span>
					</label>
					<input
						placeholder="www.eden.com/"
						name="workspaceUrl"
						onChange={(e) =>
							userDispatch({
								type: userDetailsConstants.WORKSPACE_URL,
								payload: e.target.value,
							})
						}
						value={userState.workspaceUrl}
					/>
				</div>

				<button>Create Workspace</button>
			</form>
		</div>
	);
}
export { WorkSpaceDetails };
