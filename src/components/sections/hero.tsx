'use client'

import GenericLink from "../generic/link";
import RichTextBlock from "../generic/rich-text-block";
import { useEffect, useState } from 'react';

interface LinkProps{
  text:string,
  url:string,
  variant: "green" | "blue";

}

interface BlockProps{
  heading:string,
  paragraph:string,
  links: LinkProps[]
  background_image:string
}

const Hero = (block:BlockProps) => {
  const c = "c-hero";
  const [offset, setOffset] = useState(0);

  function setScrollPosition(scrollPos:number){
    if(scrollPos > 0){
      return (scrollPos / 5) * -1
    }
    else{
      return 0 
    }
  }
  useEffect(() => {
    const onScroll = () => setOffset(setScrollPosition(window.scrollY));
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}, []);
  
  return(
    <div className={`${c} container`}>
      <div className={`${c}__content-container`}>
        <h1 className={`${c}__content-container__heading`}>{block.heading}</h1>
        <RichTextBlock {...{content: block.paragraph, classes: "c-hero__content-container__paragraph"}} />
        {block.links && (
          <div className={`${c}__content-container__links`}>
            {block.links.map((link, i) =>{
              return <GenericLink {...link} key={i} />
            })}
          </div>
        )}

      </div>

      <div className={`${c}__overlay`}></div>

      <div className={`${c}__background-container`}>
        <img src={block.background_image} alt="background image" style={{transform: `translate3d(0px, ${offset}px, 0px) scale(1.5)`}}/>
      </div>


    </div>
  )
}

export default Hero;