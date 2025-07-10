import { Header } from "@/components/Header"

const Age = () => {
	return <span>23</span>
}

export const About = () => {
	return (
		<section>
			<Header id="about">обо мне</Header>

			<div class="text-justify">
				тут будет текст
			</div>
		</section>
	)
}
