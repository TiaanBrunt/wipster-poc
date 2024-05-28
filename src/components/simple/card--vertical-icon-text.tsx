interface BlockProps{
  image_url:string,
  image_alt:string,
  heading:string,
  paragraph:string
}

const CardVerticalIconText = (block:BlockProps) =>{
  const c = "c-card--vertical-image-text";
  return(
    <div className={c}>
      <div className={`${c}__icon-container`}>
        <img src={block.image_url} alt={block.image_alt || 'icon'} className={`${c}__icon-container__icon`}/>
      </div>
      <div className={`${c}__content-container`}>
        <h4 className={`${c}__content-container__heading`}>{block.heading}</h4>
        <p className={`${c}__content-container__paragraph`}>{block.paragraph}</p>
      </div>
    </div>
  )
}

export default CardVerticalIconText;