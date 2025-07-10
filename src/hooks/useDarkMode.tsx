import { useEffect, useState } from "preact/hooks"

export const useDarkMode = () => {
	const isDarkMode = () => localStorage.getItem("mode") === "dark"
	const [darkMode, setDarkMode] = useState<boolean>(isDarkMode)

	useEffect(() => {
		toogleDarkMode(isDarkMode())

		const handleStrorageChange = () => {
			setDarkMode(localStorage.getItem("mode") === "dark")
		}

		window.addEventListener("modeChange", handleStrorageChange)
		return () => window.removeEventListener("modeChange", handleStrorageChange)
	}, [])

	const toogleDarkMode = (value: boolean) => {
		document.body.className = value ? "dark" : ""

		localStorage.setItem("mode", value ? "dark" : "bright")
		window.dispatchEvent(new Event("modeChange"))
	}

	return { darkMode, setDarkMode: toogleDarkMode }
}
