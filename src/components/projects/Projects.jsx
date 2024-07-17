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
    title: "blabla",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare dui sagittis nulla sagittis, et consectetur est posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum vestibulum pulvinar. Praesent dignissim purus a porttitor volutpat. Aenean fringilla lorem vitae dolor mattis, vitae egestas magna tincidunt. Pellentesque tristique consectetur ante at mollis. Donec ex leo, convallis sit amet tempus a, ornare hendrerit lacus. Vestibulum faucibus malesuada sem id viverra. Donec ut facilisis ligula. Suspendisse posuere ligula at quam suscipit, sed lobortis orci tincidunt. Donec nisi tellus, pulvinar ultrices suscipit et, molestie ac tellus.",
    images: [
      "https://picsum.photos/id/10/200/300",
      "https://picsum.photos/id/10/200/200",
    ],
    technologies: [
      <FaReact size="2rem" />,
      <FaPhp size="2rem" />,
      <FaLaravel size="2rem" />,
      <FaGithub size="2rem" />,
      <FaTrello size="2rem" />,
      <FaFigma size="2rem" />,
      <IoLogoJavascript size="2rem" />,
      <SiMysql size="2rem" />,
    ],
  },
];
