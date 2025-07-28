import { Header } from "@/components/Header"

export const About = () => {
	return (
		<section>
			<Header id="about">обо мне</Header>

			<div class="text-justify [&_>_*]:mb-8">
				<p>Увлекаюсь геймдевом и имею опыт разработки игр на разных движках, преимущественно на Unity.</p>

				<p>В настоящее время изучаю React, реализовал несколько небольших личных проектов и продолжаю активно развиваться в этой области.</p>
			</div>

			<img src="funny.jpg" className="max-w-xs mx-auto rounded-md" />
		</section>
	)
}
