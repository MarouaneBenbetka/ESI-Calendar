import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MiniNavigator from "./components/MiniNavigator";
import { classes } from "./data/data";

function App() {
	const [list, setList] = useState(classes[0]);
	const [type, setType] = useState("class");
	return (
		<section className="h-screen w-screen bg-gray-900 flex justify-center items-center flex-col overflow-y-auto">
			<div className="flex flex-col items-center ">
				<SearchBar setList={setList} type={type} />
				<MiniNavigator type={type} setType={setType} setList={setList} />
				<iframe
					src={`https://calendar.google.com/calendar/embed?showTz=0${(type == "class") ? `&src=${list.src}` : `${list?.src?.map((e) => `&src=${e}`).join("")}&color=%23E67C73&color=%23616161`}&showPrint=0&showCalendars=0&mode=WEEK`}
					className="hidden md:block bg-white border-0 rounded-xl overflow-hidden pt-3 mt-7 w-[90vw] h-[75vh] md:w-[800px] md:h-[540px]"
				></iframe>
				<iframe
					src={`https://calendar.google.com/calendar/embed?showTz=0${(type == "class") ? `&src=${list.src}` : `${list?.src?.map((e) => `&src=${e}`).join("")}&color=%23E67C73&color=%23616161`}&showPrint=0&showTitle=1&showDate=0&showTabs=1&showCalendars=0&mode=AGENDA&dates=20090401/20501231`}
					className="block md:hidden bg-white border-0 rounded-xl overflow-hidden pt-3 mt-7 w-[90vw] h-[70vh] md:w-[800px] md:h-[500px]"
				></iframe>
			</div>
			<a
				className="text-gray-400 mt-2 hover:underline"
				href="https://github.com/MarouaneBenbetka/ESI-Calendar"
				target="_blank"
				rel="noreferrer"
			>
				Link to Github Repo
			</a>
		</section>
	);
}

export default App;
