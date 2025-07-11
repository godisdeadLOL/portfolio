import { Header } from "@/components/Header"

export const About = () => {
	return (
		<section>
			<Header id="about">обо мне</Header>

			<div class="text-justify [&_p]:mb-6">
				<p>
					Я самоучка.
				</p>

				<p>
					Увлекаюсь геймдевом. Делал игры на разных движках, в основном Unity.
				</p>

				<p>
					В последний год сфокусировался на веб-разработке. Осваиваю React и FastAPI. Уже реализовал несколько небольших личных проектов и постоянно учусь новому.
				</p>
			</div>
		</section>
	)
}
