import { useState } from "preact/hooks"
import { LuChevronDown, LuChevronUp } from "react-icons/lu"

type CollapsibleProps = {
    title: string,
    className: string,
    children: any
}

export const Collapsible = ({ title, className, children }: CollapsibleProps) => {
    const [expanded, setExpanded] = useState(false)

    return <div className={className}>
        <div class="mt-4 mb-2 px-2 py-1 bg-button-hover active:bg-button-active rounded-md flex justify-between items-center select-none cursor-pointer" onClick={() => setExpanded(value => !value)}>
            {title}
            {expanded ? <LuChevronUp /> : <LuChevronDown />}
        </div>
        {expanded && <div class="mb-6 px-2 py-1 bg-background rounded-md flex flex-col items-start gap-2">
            {children}
        </div>}
    </div>
}