// PLUGINS IMPORTS //
import React, { useState } from "react"

// COMPONENTS IMPORTS //
import Card from "./Card/Card"
import { useDerivedValue } from "react-native-reanimated"
import { useSpring } from "react-native-redash"

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {}

const cards = [
  {
    index: 4,
    image: require("~/Assets/Images/slides/1.png"),
  },
  {
    index: 3,
    image: require("~/Assets/Images/slides/2.png"),
  },
  {
    index: 2,
    image: require("~/Assets/Images/slides/3.png"),
  },
  {
    index: 1,
    image: require("~/Assets/Images/slides/4.png"),
  },
  {
    index: 0,
    image: require("~/Assets/Images/slides/4.png"),
  },
]

export const step = 1 / (cards.length - 1)
const CardsList: React.FC<PropsType> = (props) => {
  const [currentIndex, setCurrentIndex] = useState(step)
  const aIndex = useSpring(currentIndex)

  return (
    <>
      {cards.map((i) => {
        const position = useDerivedValue(() => i.index * step - aIndex.value)
        return (
          currentIndex < i.index * step + step && (
            <Card
              key={i.index}
              image={i.image}
              position={position}
              onSwipe={() => setCurrentIndex((prev) => prev + step)}
            />
          )
        )
      })}
    </>
  )
}

export default React.memo(CardsList)
