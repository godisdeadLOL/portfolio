import { TopBar } from "@/page/TopBar"
import { SideBar } from "@/page/SideBar"
import { ScrollTopButton } from "@/components/ScrollTopButton"
import { About } from "@/page/About"
import { Skills } from "@/page/Skills"
import { Projects } from "@/page/Projects"
import { Footer } from "@/page/Footer"
import { Intro } from "@/page/Intro"

export function App() {
	return (
		<>
			<SideBar />
			<TopBar />
			<ScrollTopButton />

			<div class="px-8 max-w-xl mx-auto">
				<Intro />

				<div class="border-b-1 border-border-solid my-16"></div>

				<About />
				<Skills />
				<Projects />

				<Footer />
			</div>
		</>
	)
}
