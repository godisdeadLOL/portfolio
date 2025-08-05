import type { ComponentProps } from "preact/compat"

type LinkProps = {
	to: string
} & ComponentProps<"a">

export const Link = ({ to, children, ...other }: LinkProps) => {
	return (
		<a href={to} class="text-blue-400 hover:underline" {...other}>
			{children}
		</a>
	)
}
