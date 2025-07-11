type TagsProps = {
    tags: string[]
}

export const Tags = ({ tags }: TagsProps) => {
    return <>
        {tags.map((item) => (
            <div class="bg-button-hover p-1 px-2 rounded-full text-xs"> {item} </div>
        ))}
    </>
}