import { CategorySelector } from "@/components/CategorySelector"
import { Header } from "@/components/Header"
import { ProjectCard } from "@/components/ProjectCard"
import { type Project } from "@/schemas"
import { useEffect, useState } from "preact/hooks"

export const Projects = () => {
	const [projects, setProjects] = useState<Project[]>([])
	useEffect(() => {
		fetch("data/projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
		// todo: ошибка
	}, [])

	const categories = [
		{ key: "all", name: "всё" },
		{ key: "web", name: "веб" },
		{ key: "gamedev", name: "геймдев" },
	]
	const [category, setCategory] = useState(categories[1].key)

	const filteredProjects = category === categories[0].key ? projects : projects.filter((entry) => entry.categories.indexOf(category) !== -1)

	return (
		<section>
			<Header id="projects">проекты</Header>

			<CategorySelector categories={categories} value={category} setValue={setCategory} className="mb-8 select-none " />

			<div class="space-y-4">
				{filteredProjects.map((project, index) => (
					<ProjectCard key={index} projectData={project} />
				))}
			</div>
		</section>
	)
}
