import { classes, groups } from "../data/data";

const MiniNavigator = ({ type, setType, setList }) => {
	return (
		<div className="relative mt-3">
			<div className="w-[90vw] flex items-center justify-center md:w-[65vw] lg:w-[40vw] gap-2 relative">
				<input className={`text-sm md:text-lg btn w-[49.5%] px-4 pb-3 pt-3 md:pt-2 border-2 border-orange focus:outline-none rounded-2xl ${(type == 'class') ? 'bg-black hover:bg-black text-white' : 'bg-white hover:bg-white text-dark'}`} onClick={() => { setType("class"); setList(classes[0]); }} value="Classes" type="button" />
				<input className={`text-sm md:text-lg btn w-[49.5%] px-4 pb-3 pt-3 md:pt-2 border-2 border-orange focus:outline-none rounded-2xl ${(type == 'group') ? 'bg-black hover:bg-black text-white' : 'bg-white hover:bg-white text-dark'}`} onClick={() => { setType("group"); setList(groups[0]); }} value="Groups" type="button" />
			</div>
		</div>
	);
};

export default MiniNavigator;
