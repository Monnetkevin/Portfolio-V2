import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaTrello,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";

export const PROJECTS = [
  {
    title: "It previs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare dui sagittis nulla sagittis, et consectetur est posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum vestibulum pulvinar. Praesent dignissim purus a porttitor volutpat. Aenean fringilla lorem vitae dolor mattis, vitae egestas magna tincidunt. Pellentesque tristique consectetur ante at mollis. Donec ex leo, convallis sit amet tempus a, ornare hendrerit lacus. Vestibulum faucibus malesuada sem id viverra. Donec ut facilisis ligula. Suspendisse posuere ligula at quam suscipit, sed lobortis orci tincidunt. Donec nisi tellus, pulvinar ultrices suscipit et, molestie ac tellus.",
    images: [
      "/images/Capture d'écran 2024-07-09 184454.png",
      "https://picsum.photos/id/10/200/200",
    ],
    technologies: [
      <FaReact size="1.5rem" />,
      <FaPhp size="1.5rem" />,
      <FaLaravel size="1.5rem" />,
      <FaGithub size="1.5rem" />,
      <FaTrello size="1.5rem" />,
      <FaFigma size="1.5rem" />,
      <IoLogoJavascript size="1.5rem" />,
      <SiMysql size="1.5rem" />,
    ],
    github: "https://github.com/Monnetkevin/api-itprevis",
  },
];
