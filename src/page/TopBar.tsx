import { useDarkMode } from "@/hooks/useDarkMode";
import { NavigationButtons } from "@/page/NavigationButtons";
import { LuSun } from "react-icons/lu";


export const TopBar = () => {
	const { darkMode, setDarkMode } = useDarkMode()

	return (
		//
		<nav class="w-fit mx-auto px-2 sm:px-4 py-2 flex gap-1 sm:gap-2 text-sm sm:text-base items-center my-8 border border-border rounded-full bg-background-elevate">
			<NavigationButtons />

			<div class="ml-1 sm:ml-0 w-1 h-8 border-l-1 border-border" />

			<button class="button-nav p-2 text-base" onClick={() => setDarkMode(!darkMode)}>
				<LuSun />
			</button>
		</nav>
	)
}
