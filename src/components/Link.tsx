type LinkProps = {
    to: string,
    children: any
}
export const Link = ({ to, children }: LinkProps) => {
    return <a href={to} class="text-blue-400 hover:underline">
        {children}
    </a>
}