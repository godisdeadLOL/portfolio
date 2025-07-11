import { NavigateButton } from "@/components/NavigateButton"
import { LuUser, LuLightbulb, LuStar, LuBook } from "react-icons/lu"

export const NavigationButtons = () => {
    return <>
        <NavigateButton target="about" label="обо мне" icon={<LuUser />} />
        <NavigateButton target="skills" label="навыки" icon={<LuLightbulb />} />
        <NavigateButton target="experience" label="опыт" icon={<LuStar />} />
        <NavigateButton target="projects" label="проекты" icon={<LuBook />} />
    </>
}