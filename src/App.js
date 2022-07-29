import "./App.css";
import { Navbar, ProgressSlider } from "./components/index";
import { Onboarding } from "./screens";

function App() {
	return (
		<div className="App">
			<Navbar />
			<ProgressSlider />
			<Onboarding />
		</div>
	);
}

export default App;
