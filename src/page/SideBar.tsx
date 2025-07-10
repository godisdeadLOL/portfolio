import { useScroll } from "@/hooks/useScroll";
import { NavigateButton } from "@/components/NavigateButton";
import { LuUser, LuLightbulb, LuBook } from "react-icons/lu";


export const SideBar = () => {
	const scroll = useScroll()
	const hidden = scroll < 96

	return (
		<nav class={`hidden md:flex gap-1 fixed left-0 top-0 h-[100dvh] p-2 flex-col justify-center transition-transform duration-500 ${hidden && "-translate-x-[200%]"} `}>
			<NavigateButton target="about" label="обо мне" icon={<LuUser />} />
			<NavigateButton target="skills" label="навыки" icon={<LuLightbulb />} />
			<NavigateButton target="projects" label="проекты" icon={<LuBook />} />
			{/* <NavigateButton label="тема" icon={<LuSun />} /> */}
		</nav>
	)
}
