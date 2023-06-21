import { useState } from "react";
import SearchBar from "./data/SearchBar";
import { classes } from "./data/data";

function App() {
	const [room, setRoom] = useState(classes[0]);
	console.log(room);
	return (
		<section className="h-screen w-screen bg-gray-900 flex justify-center items-center flex-col">
			<SearchBar setClass={setRoom} />
			<iframe
				src={`https://calendar.google.com/calendar/embed?src=${room.src}&ctz=Africa%2FAlgiers&showPrint=0&mode=WEEK`}
				className="bg-white border-0 rounded-xl overflow-hidden pt-3 mt-8 w-[90vw] h-[70vh] md:w-[800px] md:h-[500px]"
			></iframe>
		</section>
	);
}

export default App;
