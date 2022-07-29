import { createContext, useContext, useReducer } from "react";
import { userDetails__reducers } from "../reducers";

const userDetails = createContext();

const UserDetailsProvider = ({ children }) => {
	const [userState, userDispatch] = useReducer(userDetails__reducers, {
		step: 1,
		fullName: "",
		displayName: "",
		workspaceName: "",
		workspaceUrl: "",
		workspaceType: "",
	});

	return (
		<userDetails.Provider value={{ userState, userDispatch }}>
			{children}
		</userDetails.Provider>
	);
};

const useUserDetails = () => useContext(userDetails);

export { UserDetailsProvider, useUserDetails };
