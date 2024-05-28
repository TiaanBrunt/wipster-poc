
interface BlockProps {
    text:string,
    url:string,
    variant: "green" | "blue";
}

const GenericLink = (block : BlockProps) => {
    const c = "c-generic-link";
    return (
        <a href={block.url} className={`${c} ${c}--${block.variant}`}>
            {block.text}
        </a>
    );
}

export default GenericLink;