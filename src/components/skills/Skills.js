import {
  FaHtml5,
  FaReact,
  FaPhp,
  FaLaravel,
  FaSymfony,
  FaGithub,
  FaTrello,
  FaWindows,
  FaFigma,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";

export const LANGAGES_ICONS = [
  { name: "HTML", icon: <FaHtml5 size="2rem" /> },
  { name: "JavaScript", icon: <IoLogoJavascript size="2rem" /> },
  { name: "React", icon: <FaReact size="2rem" /> },
  { name: "PHP", icon: <FaPhp size="2rem" /> },
  { name: "Laravel", icon: <FaLaravel size="2rem" /> },
  { name: "Symfony", icon: <FaSymfony size="2rem" /> },
  { name: "MySQL", icon: <SiMysql size="2rem" /> },
];

export const STACKS_ICONS = [
  { name: "Github", icon: <FaGithub /> },
  { name: "Trello", icon: <FaTrello /> },
  { name: "Window", icon: <FaWindows /> },
  { name: "Figma", icon: <FaFigma /> },
];
