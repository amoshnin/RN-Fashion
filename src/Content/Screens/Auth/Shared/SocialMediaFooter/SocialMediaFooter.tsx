// PLUGINS IMPORTS //
import React from "react"

// COMPONENTS IMPORTS //
import IconsSection from "./IconsSection/IconsSection"
import FooterSection from "./FooterSection/FooterSection"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  content: {
    text: string
    buttonText: string
    onPress: () => void
  }
}

const SocialMediaFooter: React.FC<PropsType> = (props) => {
  return (
    <>
      <IconsSection />
      <FooterSection content={props.content} />
    </>
  )
}

export default React.memo(SocialMediaFooter)
