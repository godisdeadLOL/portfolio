import { NavigateButton } from "@/components/NavigateButton";
import { useDarkMode } from "@/hooks/useDarkMode";
import { LuUser, LuLightbulb, LuBook, LuSun } from "react-icons/lu";


export const TopBar = () => {
	const { darkMode, setDarkMode } = useDarkMode()

	return (
		// text-sm sm:text-base
		<nav class="mx-auto px-4 py-2 flex gap-1 sm:gap-2 items-center w-fit my-8 border border-border rounded-full bg-background-elevate">
			<NavigateButton target="about" label="обо мне" icon={<LuUser />} />
			<NavigateButton target="skills" label="навыки" icon={<LuLightbulb />} />
			<NavigateButton target="projects" label="проекты" icon={<LuBook />} />

			<div class="w-1 h-8 border-l-1 border-border" />

			<button class="button-nav p-2" onClick={() => setDarkMode(!darkMode)}>
				<LuSun />
			</button>
		</nav>
	)
}
