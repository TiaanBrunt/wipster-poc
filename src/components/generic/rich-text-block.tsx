import MarkdownIt from 'markdown-it';

interface BlockProps {
  content: string,
  classes?: string
}

const RichTextBlock = (block: BlockProps) =>{
  const c = `c-rich-text-block ${block.classes}`
  const md = new MarkdownIt({ html: true });

  return(
    <div className={c} dangerouslySetInnerHTML={{ __html: md.render(block.content) }} ></div>
  )
}

export default RichTextBlock;