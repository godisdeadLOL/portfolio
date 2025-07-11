import { Card } from "@/components/Card"
import { Tags } from "@/components/Tags"
import type { Project } from "@/schemas"
import { FaGithub } from "react-icons/fa"
import { LuExternalLink } from "react-icons/lu"

type ProjectCardProps = {
	projectData: Project
}
export const ProjectCard = ({ projectData }: ProjectCardProps) => {
	return (
		<Card>
			<div class="flex">
				<h1 class="font-bold text-text-solid">{projectData.title}</h1>
				<div class="ml-auto text-text underline">{projectData.secondary ?? ""}</div>
			</div>

			<div class="mt-6 text-justify">{projectData.description}</div>

			<div class="flex mt-4 gap-2 flex-wrap">
				<Tags tags={projectData.tags} />
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
		</Card >
	)
}
