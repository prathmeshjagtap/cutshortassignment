import React from "react";
import {
	SignUp,
	WorkspaceType,
	WorkSpaceDetails,
	Success,
} from "../../components";
import { useUserDetails } from "../../context";

function Onboarding() {
	const {
		userState: { step },
	} = useUserDetails();

	switch (step) {
		case 1:
			return <SignUp />;
		case 2:
			return <WorkSpaceDetails />;
		case 3:
			return <WorkspaceType />;
		case 4:
			return <Success />;
		default:
	}
}

export { Onboarding };
