export const Header = ({ children, id }: any) => (
	<div class="mt-16 mb-10" id={id}>
		<h1 class="font-bold text-2xl text-text-solid">{children}</h1>
		<div class="mt-1 w-12 border-t-1 border-border-solid" />
	</div>
)
