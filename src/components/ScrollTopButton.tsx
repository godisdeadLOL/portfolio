import { useScroll } from "@/hooks/useScroll";
import { LuArrowUp } from "react-icons/lu";


export const ScrollTopButton = () => {
	const scroll = useScroll()
	const hidden = scroll < 128

	return (
		<button
			onClick={() => window.scrollTo(0, 0)}
			type="button"
			class={`p-4 button-solid !border-0 fixed right-6 bottom-6 rounded-full transition-transform duration-500 ${hidden && "translate-y-[200%]"}`}
		>
			<LuArrowUp />
		</button>
	)
}
