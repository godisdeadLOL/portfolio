type CategorySelectorProps = {
	categories: { key: string; name: string }[]
	value: any
	setValue: any
	className: string
}

export const CategorySelector = ({ categories, value, setValue, className }: CategorySelectorProps) => {
	return (
		<div class={className}>
			{categories.map((entry, index) => (
				<>
					<button key={entry.key} class={`hover:underline cursor-pointer ${value == entry.key ? "font-bold text-text-solid" : ""}`} onClick={() => setValue(entry.key)}>
						{entry.name}
					</button>
					{index != categories.length - 1 && " / "}
				</>
			))}
		</div>
	)
}
