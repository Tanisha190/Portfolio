import { type Project} from "../types/Project";
import portfolio from "../../public/assets/portfolio.png";
import nest from "../../public/assets/nest.png";
import webrtc from "../../public/assets/webrtc.png";


export const projects: Project[] = [
  {
    title: "Portfolio",
    github: "https://github.com/Tanisha190/Portfolio",
    image: portfolio,
  },
  {
    title: "Nest.js Boilerplate",
    github: "https://github.com/Tanisha190/Nest.js-Boilerplate",
    image: nest,
  },
   {
    title: "WebRTC Video Chat App",
    github: "https://github.com/Tanisha190/webrtc-video-meet",
    image: webrtc,
  },
  
];