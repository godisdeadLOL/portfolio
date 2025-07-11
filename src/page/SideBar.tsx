import { useScroll } from "@/hooks/useScroll";
import { NavigationButtons } from "@/page/NavigationButtons";


export const SideBar = () => {
	const scroll = useScroll()
	const hidden = scroll < 96

	return (
		<nav class={`hidden md:flex gap-1 fixed left-0 top-0 h-[100dvh] p-2 flex-col justify-center transition-transform duration-500 ${hidden && "-translate-x-[200%]"} `}>
			<NavigationButtons />
		</nav>
	)
}
