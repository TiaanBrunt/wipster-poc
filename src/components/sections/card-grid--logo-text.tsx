import GenericLink from "../generic/link";
import CardHorizontalLogoText from "../simple/card--horizontal-logo-text";

interface CardLinkProps{
  text:string,
  url:string
}

interface CardProps{
  image_url: string,
  image_alt: string,
  paragraph: string,
  link: CardLinkProps,
}

interface LinkProps{
  text: string,
  url: string,
  variant: "green" | "blue"
}
interface BlockProps{
  cards: CardProps[],
  link: LinkProps,
  background_color: "white" | "zinc" | "slate"
}




const CardGridLogoText = (block:BlockProps) => {
  const c = "c-card-grid--logo-text";
  return (
    <div className={`${c} container ${block.background_color && `background--${block.background_color}`}`}>
      <div className={`${c}__card-container`}>

        {block.cards?.map((card, i) =>{
          return(
            <CardHorizontalLogoText {...card} />
          )
        })}

      </div>

      <div className={`${c}__link-container`}>
      {block.link && <GenericLink {...block.link}></GenericLink> }
      </div>

    </div>
  )

}

export default CardGridLogoText;
