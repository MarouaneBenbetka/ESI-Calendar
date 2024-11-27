import { classes, groups } from "../data/data";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ setList, type }) => {
	const [inputValue, setInputValue] = useState("");
	const dropdownRef = useRef();
	const blurInput = () => {
		dropdownRef.current.blur();
	};
	const selectedList = (type == "class") ? classes : groups;

	useEffect(() => {
		setInputValue("");
	}, [type]);

	return (
		<div className="relative dropdown ">
			<div className="w-[90vw] md:w-[65vw] lg:w-[40vw] relative">
				<input
					className="text-sm md:text-lg btn bg-white hover:bg-white hover:border-orange w-full text-dark px-4 py-3 border-2 border-orange focus:outline-none rounded-2xl"
					type="text"
					placeholder={`type name of the ${type}`}
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<BsSearch className="text-orange absolute right-3 top-4 md:top-3 text-[20px] md:text-[28px]" />
			</div>
			<ul
				tabIndex={0}
				className="p-2 z-[10] dropdown-content menu bg-base-100 rounded-box w-full text-dark  border border-gray-400 mt-3 max-h-[200px] overflow-y-scroll"
				ref={dropdownRef}
			>
				{selectedList.filter(item =>
					item.title.toLowerCase().includes(inputValue.toLowerCase())
				).length === 0 ? (
						<p className="text-center inline py-2 text-lg">No results found!</p>
				) : (
					selectedList.map((item) => {
						if (
							item.title
								.toLowerCase()
								.includes(inputValue.toLowerCase())
						)
							return (
								<li
									key={item.title}
									className="border rounded-lg border-gray-200"
									onClick={() => {
										setInputValue(item.title);
										blurInput();
										setList(item);
									}}
								>
									<p className="text-center inline">{item.title}</p>
								</li>
							);
					})
				)}
			</ul>
		</div>
	);
};

export default SearchBar;
