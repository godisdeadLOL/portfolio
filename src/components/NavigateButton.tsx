import { useCurrentSection } from "@/hooks/useCurrentSection"

type NavigateButtonProps = {
	target: string
	icon: any
	label: any
}

export const NavigateButton = ({ target, icon, label }: NavigateButtonProps) => {
	const section = useCurrentSection()
	const highlight = section === target

	return (
		<a href={`#${target}`} draggable={false} class={`button-nav px-4 py-2 flex items-center gap-2 ${highlight && "highlight"} text-center`}>
			<div class="hidden sm:block">{icon}</div>
			{label}
		</a>
	)
}
