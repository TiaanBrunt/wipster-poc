import LeftRightBlockImage from "@/components/sections/left-right-block--image";
import CenteredTextBlock from "@/components/sections/centered-text-block";
import IconCardStrip from "@/components/sections/icon-card-strip";
import CardGridLogoText from "@/components/sections/card-grid--logo-text";
import Hero from "@/components/sections/hero";
import Nav from "@/components/layout/nav";

export default function Home() {
  return (
    <main>
      <Nav></Nav>

      <Hero
        heading="Review, approve & share video"
        paragraph={`The world's **easiest, most intuitive** way to collaborate on video and creative content`}
        links={[
          {
            text: "Start free trial",
            url: "/",
            variant: "green"
          },
          {
            text: "Watch the video",
            url: "/",
            variant: "blue"
          }
        ]}
        background_image="https://www.wipster.io/hs-fs/hubfs/Website%20Pages/Home/WIP9001_DESIGN-05.jpg?width=1920&height=1080&name=WIP9001_DESIGN-05.jpg"
      />
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
        ]} />

      <CenteredTextBlock
        heading="The world’s leading brands and creative agencies use Wipster"
        background_color="white"
      />
      <CardGridLogoText
        cards={[
          {
            image_url: "https://www.wipster.io/hs-fs/hubfs/Images/case-studies/lesmills/les-mills-logo.png?width=1000&height=296&name=les-mills-logo.png",
            image_alt: "les-mills logo",
            paragraph: "How Wipster enables Les Mills to produce video content for 120,000 instructors around the globe.",
            link: { text: "Learn more", url: "/" }
          },
          {
            // TODO: Fix this logo
            image_url: "https://www.wipster.io/hubfs/Images/case-studies/lull/Lull_padded-logo.jpg",
            image_alt: "Lull logo",
            paragraph: "How Lull halved the time taken in the creative review process using Wipster.",
            link: { text: "Learn more", url: "/" }
          },
          {
            image_url: "https://www.wipster.io/hs-fs/hubfs/Logo%20Standard%20Landscape%20Reversed%20RGB.png?width=1280&height=434&name=Logo%20Standard%20Landscape%20Reversed%20RGB.png",
            image_alt: "Victoria University Logo",
            paragraph: "How Victoria University of Wellington uses Wipster to connect with 24,000 students & staff.",
            link: { text: "Learn more", url: "/" }
          },
          {
            image_url: "https://www.wipster.io/hs-fs/hubfs/Images/case-studies/leapspark/LeapSpark_Horizontal-Logos_Transparent---No-Padding.png?width=1600&height=190&name=LeapSpark_Horizontal-Logos_Transparent---No-Padding.png",
            image_alt: "LEAP Spark logo",
            paragraph: "How Wipster helps video production agency LEAP Spark reduce headaches and finish projects sooner.",
            link: { text: "Learn more", url: "/" }
          }
        ]}
        background_color="white"
        link={{ text: "See all case studies", url: "/", variant: "green" }}
      />


      <LeftRightBlockImage
        eyebrow_image={{image_url: "https://www.wipster.io/hs-fs/hubfs/Images/Logos/Adobe.png?width=278&name=Adobe.png", image_alt: "Adobe logo"}}
        heading="Bring feedback into your Premiere Pro and After Effects timeline"
        paragraph=
        {`
Share work-in-progress video right from the timeline with the Wipster Extension for Premiere Pro and After Effects.

<span>Available for Adobe Premiere Pro and Adobe After Effects in [Adobe’s Creative Cloud.](https://exchange.adobe.com/creativecloud.details.14841.html)</span>

`}
        image_alignment="right"
        image={{ image_url: 'https://www.wipster.io/hs-fs/hubfs/adobe-panel-sample-mobile.png?width=745&height=593&name=adobe-panel-sample-mobile.png', image_alt: "image_alt" }}
        background_color="zinc"
        bottom_image={{image_url:"https://www.wipster.io/hs-fs/hubfs/Website%20Pages/Integrations/adobe-apps@2x.png?width=208&name=adobe-apps@2x.png", image_alt:"adobe-apps"}}
      />

      <LeftRightBlockImage
        heading="We play nicely with others."
        paragraph="Wipster integrates seamlessly with the tools you use the most."
        links={[{ text: "Explore integrations", url: "/", variant: "blue" }]}
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
          text: "Princing plans",
          url: "/",
          variant: "green"

        }}
      />
    </main>
  );
}

