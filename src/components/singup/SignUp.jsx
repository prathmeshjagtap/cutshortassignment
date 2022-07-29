import { userDetailsConstants } from "../../constants";
import { useUserDetails } from "../../context";

function SignUp() {
	const { userState, userDispatch } = useUserDetails();

	return (
		<div className="form__Container">
			<div>
				<h2>Welcome! First things first...</h2>
				<p className="grey-text">You can always change them later.</p>
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
					<label>Full Name</label>
					<input
						placeholder="Steve Jobs"
						name="fullName"
						onChange={(e) =>
							userDispatch({
								type: userDetailsConstants.FULLNAME,
								payload: e.target.value,
							})
						}
						value={userState.fullName}
						required
					/>
				</div>
				<div>
					<label>Display Name</label>
					<input
						placeholder="Steve"
						name="displayName"
						onChange={(e) =>
							userDispatch({
								type: userDetailsConstants.DISPLAY_NAME,
								payload: e.target.value,
							})
						}
						value={userState.displayName}
						required
					/>
				</div>
				<button type="onSubmit">Create Workspace</button>
			</form>
		</div>
	);
}

export { SignUp };
