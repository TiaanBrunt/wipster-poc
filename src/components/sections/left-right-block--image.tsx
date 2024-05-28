import GenericLink from "../generic/link";
import RichTextBlock from "../generic/rich-text-block";
import Image from 'next/image'

interface ImageProps {
    image_url: string,
    image_alt: string 
}

interface LinkProps {
    text:string,
    url:string,
    variant: "green" | "blue";
}

// TODO: add variations for background_color
interface BlockProps {
    heading:string,
    paragraph:string,
    links?: LinkProps[], 
    image_alignment: "left" | "right",
    image: ImageProps,
    background_color: "white" | "zinc" | "slate"
}


const LeftRightBlockImage = (block : BlockProps) => {
    const c = "c-left-right-block--image"

    return(
        <div className={`${c} container ${c}--image-${block.image_alignment || 'right'} ${block.background_color && `background--${block.background_color}`}`}>
            <div className={`${c}__content-container`}>
                <h2 className={`${c}__content-container__heading`}>{block.heading}</h2>
                <RichTextBlock {...{content: block.paragraph, classes: "c-left-right-block--image__content-conatiner__paragraph" }}/>
                <div className={`${c}__content-container__links`}>
                {block.links?.map((link, i) =>{
                    return (
                    <GenericLink {...link} key={i}/>
                    )
                })}
                </div>
            </div>

            <div className={`${c}__image-container`}>

                {/* TODO: scrape images convert to webp and then use next img */}
                {/* <Image
                src={block.image.image_url} 
                alt={block.image.image_alt}
                layout='fill'
                objectFit='contain'
                className={`${c}__image-container__image`}
                >

                </Image> */}

                <img className={`${c}__image-container__image`} src={block.image.image_url} alt={block.image.image_alt} />
            </div>

        </div>
    )
}

export default LeftRightBlockImage;
