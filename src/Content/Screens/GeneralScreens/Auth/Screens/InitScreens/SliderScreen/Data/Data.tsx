import { ImageRequireSource } from "react-native"

export const Slides: Array<SlideItemType> = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    content: {
      title: "Find your outfits",
      description:
        "Confused about your outfit? Don't worry! Find the best outfit here!",
    },
    picture: {
      src: require("~/Assets/Images/slides/1.png"),
      width: 2513,
      height: 3583,
    },
  },
  {
    label: "Playful",
    color: "#BEECC4",
    content: {
      title: "Here it first, wear it first",
      description:
        "Hating the clothes in your wardrobe? Explore hundreds of outfit ideas",
    },
    picture: {
      src: require("~/Assets/Images/slides/2.png"),
      width: 2791,
      height: 3744,
    },
  },
  {
    label: "Excentric",
    color: "#FFE4D9",
    content: {
      title: "Your Style, Your Way",
      description:
        "Create your individual & unique style and look amazing everyday",
    },
    picture: {
      src: require("~/Assets/Images/slides/3.png"),
      width: 2738,
      height: 3244,
    },
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    content: {
      title: "Look Good, Feel Good",
      description:
        "Discover the latest trends in fashion and explore your personality",
    },
    picture: {
      src: require("~/Assets/Images/slides/4.png"),
      width: 1757,
      height: 2551,
    },
  },
]

export type SlideItemType = {
  label: string
  color: string
  content: {
    title: string
    description: string
  }
  picture: {
    src: ImageRequireSource
    width: number
    height: number
  }
}
