import CardVerticalIconText from "../simple/card--vertical-icon-text";

interface CardProp{
  image_url:string,
  image_alt:string,
  heading:string,
  paragraph:string
}

interface BlockProps{
  background_color?: "white" | "zinc" | "slate",
  cards: CardProp[]
}

const IconCardStrip = (block:BlockProps) => {
  const c = "c-icon-card-strip";
  return(
    <div className={`${c} container ${block.background_color && `background--${block.background_color}`}`}>
      <div className={`${c}__card-container`}>
        {block.cards?.map((card, i) =>{
          return(
            <div className={`${c}__card-container__card`} key={i}>
              <CardVerticalIconText {...card} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default IconCardStrip;