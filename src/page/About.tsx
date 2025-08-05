import { DoubleSidedImage } from "@/components/DoubleSidedImage"
import { Header } from "@/components/Header"

export const About = () => {
	return (
		<section>
			<Header id="about">обо мне</Header>

			<div class="text-justify [&_>_*]:mb-8">
				<p>Я Гордеев Владислав, мне 23 года.</p>

				<p>Увлекаюсь геймдевом и имею опыт разработки игр на разных движках, преимущественно на Unity.</p>

				<p>В настоящее время изучаю React, реализовал несколько небольших личных проектов и продолжаю активно развиваться в этой области.</p>
			</div>

			<DoubleSidedImage frontSrc="mybestphoto.png" backSrc="drip.jpg" className="max-w-xs mx-auto rounded-md [&_img]:rounded-md" />
		</section>
	)
}
