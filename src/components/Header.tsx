type HeaderProps = {
	children: any
	id: string
}

export const Header = ({ children, id }: HeaderProps) => (
	<div class="mt-16 mb-10" id={id}>
		<h2 class="font-bold text-2xl text-text-solid">{children}</h2>
		<div class="mt-1 w-12 border-t-1 border-border-solid" />
	</div>
)
