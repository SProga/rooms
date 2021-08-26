import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";

function App() {
	return (
		<div className="App">
			<Header />
			<Main>
				<About />
			</Main>
		</div>
	);
}

export default App;
