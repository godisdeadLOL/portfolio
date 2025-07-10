import type { Project } from "@/schemas"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"

type ProjectCardProps = {
	projectData: Project
}
export const ProjectCard = ({ projectData }: ProjectCardProps) => {
	return (
		<article class="rounded-xl bg-background-elevate border-border border-1 transition-shadow hover:shadow-md">
			{/* <div>
                <img class="h-[80] w-full object-cover rounded-t-xl" src="img.jpeg" />{" "}
            </div> */}

			<div class="px-6 pt-4 pb-6">
				<div class="flex">
					<h1 class="font-bold text-text-solid">{projectData.title}</h1>
					<div class="ml-auto text-text underline">{projectData.secondary ?? ""}</div>
				</div>
				<div class="mt-6 text-justify">{projectData.description}</div>

				{/* Теги */}
				<div class="flex mt-4 gap-2 flex-wrap">
					{projectData.tags.map((item) => (
						<div class="bg-button-hover p-1 px-2 rounded-full text-xs"> {item} </div>
					))}
				</div>

				<div class="flex mt-6 gap-2 items-center">
					{projectData.github && (
						<a target="_blank" href={projectData.github} class="button-outline rounded-lg py-1 px-2 gap-2 border-1 flex items-center">
							<FaGithub /> <div>github</div>
						</a>
					)}

					{projectData.demo && (
						<a target="_blank" href={projectData.demo} class="button-solid rounded-lg py-1 px-2 gap-2 flex items-center">
							<LuExternalLink /> <div>демо</div>
						</a>
					)}
				</div>
			</div>
		</article>
	)
}
