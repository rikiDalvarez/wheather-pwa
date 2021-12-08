import { fetchWeather } from "./api/fetchWeather";
import "./App.css";
import { useState } from "react";

const App = () => {
	const [query, setQuery] = useState("");
	const [weather, setWeather] = useState({});


	const search = async (e) => {
		if (e.key === "Enter") {
			const data = await fetchWeather(query)
			setWeather(data);
			setQuery("");
		}
	}

	return (
		<div className="main-container">
			<input type="text" className="search" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
			{weather.main && ( console.log(weather),
				<div className="city">
					<h2 className="city-name">
						<span>{weather.name}</span>
						<sup>{weather.sys.country}</sup>
					</h2>
				</div>
			)}
		</div>
	)
}

export default App;