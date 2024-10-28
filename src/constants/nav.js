import { CiHome } from "react-icons/ci";
import { PiTelevision } from "react-icons/pi";
import { RiMovie2Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
export const navigation = [
  {
    label: "TV",
    href: "tv",
    icon: <PiTelevision />,
  },
  {
    label: "Movies",
    href: "movies",
    icon: <RiMovie2Line />,
  },
];
export const mobileNav = [
  {
    label: "Home",
    href: "/",
    icon: <CiHome />,
  },
  {
    label: "Search",
    href: "/search",
    icon: <CiSearch />,
  },
  ...navigation,
  
];
