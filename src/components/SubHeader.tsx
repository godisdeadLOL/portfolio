export const SubHeader = ({ children }: any) => (
	<div class="my-8 flex items-center">
		<div class="mr-4 w-12 h-[1px] border-b-1 border-border-solid" />
		<h3 class="text-md text-text-solid">{children}</h3>
		<div class="ml-4 grow h-[1px] border-b-1 border-border-solid" />
	</div>
)
