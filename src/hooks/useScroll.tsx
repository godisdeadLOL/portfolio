import { useEffect, useState } from "preact/hooks"

export const useScroll = () => {
	const [scroll, setScroll] = useState(window.scrollY)

	const updateScroll = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", updateScroll)
		return () => window.removeEventListener("scroll", updateScroll)
	}, [])

	return scroll
}
