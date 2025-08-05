import type { ComponentProps, JSX } from "preact/compat"

type DoubleSidedImageProps = {
	frontSrc: string
	backSrc: string

	className?: string
} & ComponentProps<"div">

export function DoubleSidedImage({ frontSrc, backSrc, className, ...other }: DoubleSidedImageProps) {
	const imgClass = "block transition-transform duration-500 backface-hidden pointer-events-none select-none"

	return (
		<div tabIndex={1} className={`group relative perspective-distant bg-background-elevate ${className ?? ""}`} {...other}>
			<img src={frontSrc} className={`${imgClass} rotate-y-[0deg] group-focus:rotate-y-[180deg] w-full `} />
			<img src={backSrc} className={`${imgClass} rotate-y-[180deg] group-focus:rotate-y-[360deg] absolute left-0 top-0 w-full h-full`} />
		</div>
	)
}
