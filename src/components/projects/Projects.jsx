import {
  FaReact,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaTrello,
  FaFigma,
  FaSymfony,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";

export const PROJECTS = [
  {
    title: "It previs",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ornare dui sagittis nulla sagittis, et consectetur est posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum vestibulum pulvinar. Praesent dignissim purus a porttitor volutpat. Aenean fringilla lorem vitae dolor mattis, vitae egestas magna tincidunt. Pellentesque tristique consectetur ante at mollis. Donec ex leo, convallis sit amet tempus a, ornare hendrerit lacus. Vestibulum faucibus malesuada sem id viverra. Donec ut facilisis ligula. Suspendisse posuere ligula at quam suscipit, sed lobortis orci tincidunt. Donec nisi tellus, pulvinar ultrices suscipit et, molestie ac tellus.",
    images: [
      {
        path: "/images/itprevis/itprevis-home.png",
        label: "Home",
      },
      {
        path: "/images/itprevis/itprevis-dashboard.png",
        label: "Dashboard",
      },
      // "/images/itprevis/itprevis-home.png",
      // "/images/itprevis/itprevis-dashboard.png",
    ],
    technologies: [
      <FaReact alt="React" size="1.5rem" />,
      <FaPhp size="1.5rem" />,
      <FaLaravel size="1.5rem" />,
      <FaGithub size="1.5rem" />,
      <FaTrello size="1.5rem" />,
      <FaFigma size="1.5rem" />,
      <IoLogoJavascript size="1.5rem" />,
      <SiMysql size="1.5rem" />,
    ],
    github_back: "https://github.com/Monnetkevin/api-itprevis",
    github_front: "https://github.com/Monnetkevin/front-itprevis",
    github: "https://github.com/Monnetkevin/front-itprevis",
    // lien: "https://exemple.fr",
  },
  {
    title: "Ticket Helper",
    content: "BLABLABLABLA",
    images: [
      {
        path: "/images/ticket helper/ticketHelper.png",
        label: "Home",
      },
      {
        path: "https://picsum.photos/id/10/200/200",
        label: "Dashboard",
      },
    ],
    technologies: [
      <FaPhp size="1.5rem" />,
      <FaSymfony size="1.5rem" />,
      <FaGithub size="1.5rem" />,
      <FaTrello size="1.5rem" />,
      <FaFigma size="1.5rem" />,
      <IoLogoJavascript size="1.5rem" />,
      <SiMysql size="1.5rem" />,
    ],

    github: "https://github.com/Monnetkevin/project_Tickets",
    // lien: "https://exemple.fr",
  },
];
