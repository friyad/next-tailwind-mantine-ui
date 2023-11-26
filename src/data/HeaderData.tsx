import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsFillHandbagFill } from "react-icons/bs";

export const links = [
  {
    link: "/",
    label: "Home",
    icon: <AiFillHome className="mr-2 w-[18px] h-[18px]" />,
  },
  {
    link: "/about",
    label: "About",
    icon: <FaUser className="mr-2 w-4 h-4" />,
  },
  {
    link: "/portfolio",
    label: "Portfolio",
    icon: <BsFillHandbagFill className="mr-2 w-4 h-4" />,
  },
  {
    link: "/contact",
    label: "Contact",
    icon: <AiFillMessage className="mr-1.5 w-5 h-5" />,
  },
];
