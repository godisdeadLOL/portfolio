import { Header } from "@/components/Header"
import { SubHeader } from "@/components/SubHeader"
import { CSharpIcon, PythonIcon, TypeScriptIcon, ReactIcon, SqlIcon, UnityIcon, BlenderIcon } from "@/icons"

const Skill = ({ label, icon = null }: any) => {
	// const colors = ["text-purple-800", "text-yellow-800", "text-blue-800"]

	return (
		<div class="w-24 flex flex-col items-center gap-2">
			<div class={`w-12 text-button-dark transition-transform active:scale-90`}>{icon}</div>
			<div class="text-xs">{label}</div>
		</div>
	)
}

export const Skills = () => {
	return (
		<section>
			<Header id="skills">навыки</Header>

			<SubHeader>разработка</SubHeader>
			<div class="flex gap-x-2 gap-y-8 justify-center flex-wrap">
				<Skill label="c#" icon={<CSharpIcon />} />
				<Skill label="python" icon={<PythonIcon />} />
				<Skill label="typescript" icon={<TypeScriptIcon />} />
				<Skill label="react" icon={<ReactIcon />} />
				<Skill label="sql" icon={<SqlIcon />} />
			</div>

			<SubHeader>программы</SubHeader>
			<div class="flex gap-2 justify-center flex-wrap">
				<Skill label="unity" icon={<UnityIcon />} />
				<Skill label="blender" icon={<BlenderIcon />} />
			</div>
		</section>
	)
}
