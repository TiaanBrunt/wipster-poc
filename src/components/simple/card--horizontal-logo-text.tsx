interface CardLinkProps{
  text:string,
  url:string
}

interface BlockProps{
  image_url: string,
  image_alt: string,
  paragraph: string,
  link: CardLinkProps,
}

const CardHorizontalLogoText = (block:BlockProps) => {
  const c = "card--hortizontal-logo-text";
  return(
    <div className={c}>
      <div className={`${c}__logo-container`}>
        <img src={block.image_url} alt={block.image_alt || "logo"} className={`${c}__logo-container__logo`}/>
      </div>
      <div className={`${c}__content-container`}>
        <p className={`${c}__content-container__paragraph`}>{block.paragraph}</p>
        <a className={`${c}__content-container__link`} href={block.link.url}>{block.link.text}</a>
      </div>
    </div>
  )
}

export default CardHorizontalLogoText;