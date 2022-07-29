import { userDetailsConstants } from "../constants";

const userDetails__reducers = (state, action) => {
	switch (action.type) {
		case userDetailsConstants.STEP:
			return { ...state, step: state.step + 1 };
		case userDetailsConstants.FULLNAME:
			return { ...state, fullName: action.payload };
		case userDetailsConstants.DISPLAY_NAME:
			return { ...state, displayName: action.payload };
		case userDetailsConstants.WORKSPACE_NAME:
			return { ...state, workspaceName: action.payload };
		case userDetailsConstants.WORKSPACE_URL:
			return { ...state, workspaceUrl: action.payload };
		case userDetailsConstants.WORKSPACE_TYPE:
			return { ...state, workspaceType: action.payload };
		default:
			return state;
	}
};

export { userDetails__reducers };
