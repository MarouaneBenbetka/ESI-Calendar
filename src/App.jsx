import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { classes } from "./data/data";

function App() {
	const [room, setRoom] = useState(classes[0]);
	return (
		<section className="h-screen w-screen bg-gray-900 flex justify-center items-center flex-col overflow-y-auto">
			<div className="flex flex-col items-center">
				<SearchBar setClass={setRoom} />
				<iframe
					src={`https://calendar.google.com/calendar/embed?src=${room.src}&showPrint=0&showCalendars=0&mode=WEEK`}
					className="hidden md:block bg-white border-0 rounded-xl overflow-hidden pt-3 mt-8 w-[90vw] h-[75vh] md:w-[800px] md:h-[500px]"
				></iframe>
				<iframe
					src={`https://calendar.google.com/calendar/embed?src=${room.src}&showPrint=0&showTitle=1&showDate=0&showTabs=0&showCalendars=0&mode=DAY`}
					className="block md:hidden bg-white border-0 rounded-xl overflow-hidden pt-3 mt-8 w-[90vw] h-[75vh] md:w-[800px] md:h-[500px]"
				></iframe>
			</div>
			<a
				className="text-gray-400 mt-2"
				href="https://github.com/MarouaneBenbetka/ESI-Calendar"
				target="_blank"
			>
				Link to Github Repo
			</a>
		</section>
	);
}

export default App;
