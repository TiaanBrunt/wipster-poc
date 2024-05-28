import LeftRightBlockImage from "@/components/sections/left-right-block--image";
import CenteredTextBlock from "@/components/sections/centered-text-block";
import IconCardStrip from "@/components/sections/icon-card-strip";

export default function Home() {
  return (
    <main>





      <LeftRightBlockImage
        heading="Fast, easy & accurate collaboration"
        paragraph={
`
*   Upload creative assets and distribute for review
*   Collect stakeholder feedback, and create tasks to track progress
*   Verify the changes by comparing versions side-by-side
*   Get approval with clear audit trail
*   Distribute the final, approved version
`}
        image_alignment="right"
        image={{ image_url: 'https://www.wipster.io/hubfs/Website%20Pages/Home/WipsterReview-DarkMode_sm.jpg', image_alt: "image_alt" }}
        background_color="white"
      />
<IconCardStrip 
  background_color="zinc"
  cards={[
    {
      image_url: "/icons/media.svg",
      image_alt: "icon",
      heading: "All media types",
      paragraph: "Video, PDFs, audio & images"
    },
    {
      image_url: "/icons/review.svg",
      image_alt: "icon",
      heading: "Free for reviewers",
      paragraph: "No cost, unlimited stakeholders"
    },    
    {
      image_url: "/icons/mobile.svg",
      image_alt: "icon",
      heading: "Mobile friendly",
      paragraph: "Keep projects moving while on the go"
    },    
    {
      image_url: "/icons/secure.svg",
      image_alt: "icon",
      heading: "Secure",
      paragraph: "SOC 2 Type 2 certified"
    }         
    ]}/>      

<CenteredTextBlock 
        heading="The world’s leading brands and creative agencies use Wipster"
        background_color="white"
      />

      <LeftRightBlockImage
        heading="Bring feedback into your Premiere Pro and After Effects timeline"
        paragraph=
{`
Share work-in-progress video right from the timeline with the Wipster Extension for Premiere Pro and After Effects.

Available for Adobe Premiere Pro and Adobe After Effects in [Adobe’s Creative Cloud.](https://exchange.adobe.com/creativecloud.details.14841.html)

`}
        image_alignment="right"
        image={{ image_url: 'https://www.wipster.io/hs-fs/hubfs/adobe-panel-sample-mobile.png?width=745&height=593&name=adobe-panel-sample-mobile.png', image_alt: "image_alt" }}
        background_color="zinc"
      />

      <LeftRightBlockImage
        heading="We play nicely with others."
        paragraph="Wipster integrates seamlessly with the tools you use the most."
        links={[{text: "Explore integrations", url: "/", variant: "blue"}]}
        image_alignment="left"
        image={{ image_url: 'https://www.wipster.io/hs-fs/hubfs/int-s.png?width=519&height=318&name=int-s.png', image_alt: "image_alt" }}
        background_color="slate"
      />

      <CenteredTextBlock 
        heading="Priced to meet your needs"
        paragraph=
{`From Freelance Video Editor to Enterprise Organization, we have a solution for you.

With plans ranging from completely free to full-service, Wipster is flexible to fit how you do business.

`}
        background_color="white"
        link={{
          text:"Princing plans",
          url:"/",
          variant: "green"
        
        }}
      />      
    </main>
  );
}

