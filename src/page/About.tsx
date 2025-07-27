import { Header } from "@/components/Header"

export const About = () => {
	return (
		<section>
			<Header id="about">обо мне</Header>

			<div class="text-justify [&_>_*]:mb-8">
				<p>Увлекаюсь геймдевом. Делал игры на разных движках, в основном unity.</p>

				<p>В последний год сфокусировался на веб-разработке. Осваиваю React и FastAPI. Уже реализовал несколько небольших личных проектов и постоянно учусь новому.</p>
			</div>

			<img src="funny.jpg" className="w-xs mx-auto rounded-md" />
		</section>
	)
}
