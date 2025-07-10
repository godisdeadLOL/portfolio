import { useEffect, useState } from "preact/hooks"

export const useCurrentSection = () => {
	const sections = ["about", "skills", "projects"]
	const [section, setSection] = useState(sections[0])

	const offset = 64

	const updateSection = () => {
		const scroll = window.scrollY

		let target = sections[0]
		for (let i = 1; i < sections.length; i++) {
			const elem = document.getElementById(sections[i])!
			if (scroll > elem.offsetTop - offset) target = sections[i]
		}

		setSection(target)
	}

	useEffect(() => {
		window.addEventListener("scroll", updateSection)
		return () => window.removeEventListener("scroll", updateSection)
	}, [])

	return section
}
