import GenericLink from "../generic/link";
import RichTextBlock from "../generic/rich-text-block";

interface LinkProps {
  text:string,
  url:string,
  variant: "green" | "blue";
}

interface BlockProps {
  heading?:string,
  paragraph?:string,
  link?:LinkProps,
  background_color: "white" | "zinc" | "slate"
}


const CenteredTextBlock = (block : BlockProps) =>{
  const c ="c-centered-text-block";
  return(
    <div className={`${c} container background--${block.background_color}`}>
      <div className={`${c}--container`}>
        <h2 className={`${c}__heading`}>{block.heading}</h2>
        {block.paragraph && <RichTextBlock {...{content: block.paragraph, classes: "c-centered-text-block__paragraph" }}/> }

        {block.link && (
          <div className={`${c}__link-container`}>
            <GenericLink {...block.link} />
          </div>
        )}
      </div>
    </div>
  )
}

export default CenteredTextBlock