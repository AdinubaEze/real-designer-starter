import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFiverr, SiExpress, SiTypescript } from "react-icons/si";
import {
  MdOutlineAlternateEmail,
  MdOutlineDesignServices,
} from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiCode, FiSmartphone } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  project1,
  project2,
  project3,
  project4,
} from "./assets";

export const navigation = [
  { name: "Home", id: "header" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
export const techStack = [
  { name: "ReachJs", icon: <FaReact /> },
  { name: "ExpressJs", icon: <SiExpress /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
];

export const services = [
  {
    icon: <FiSmartphone />,
    name: "Responsive Web Design",
    description: `
          Crafting visually appealing and fully responsive websites that adapt seamlessly to any device, ensuring an excellent user experience on desktops, tablets, and smartphones.`,
  },
  {
    icon: <FiCode />,
    name: "Custom Web Development",
    description: `
          Building dynamic, interactive web applications tailored to your specific needs, using modern frontend technologies to create scalable and maintainable solutions.`,
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "UI/UX Optimization",
    description: `
          Enhancing user engagement with intuitive and aesthetically pleasing interfaces, prioritizing performance, accessibility, and smooth navigation for optimal user satisfaction.`,
  },
];

export const projects = [
  {
    name: "Create the Ultimate Animated Portfolio",
    description: `Showcase your skills and creativity with a standout animated portfolio on YouTube. Capture attention, highlight your work, and leave a lasting impression with engaging visuals and dynamic storytelling!`,
    image: project1,
    url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
  {
    name: "Designer portfolio with nextjs",
    description: `A sleek and modern designer portfolio built with Next.js, showcasing responsive design, fast performance, and seamless navigation. Perfect for creative professionals looking to display their work in style`,
    image: project2,
    url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
  {
    name: "Build Modern Animated Video Conferencing Web App With ReactJs And ZegoCloud",
    description: `Create a cutting-edge, animated video conferencing web app using ReactJS and ZegoCloud. This project combines real-time communication with sleek design, delivering a smooth, interactive user experience for virtual meetings.`,
    image: project3,
    url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
  {
    name: "Modern solar website",
    description: `Develop a modern solar energy website designed for clean, sustainable solutions. Featuring a sleek interface, responsive design, and user-friendly navigation, this site highlights the power and efficiency of solar technology.`,
    image: project4,
    url: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const testimonies = [
  {
    profile: client1,
    name: "Jessica Harper",
    position: "Product Manager",
    company: "echNova Solutions",
    content: `Emmanuel transformed our website’s user experience! His attention to detail and ability to translate our vision into a seamless interface was exceptional. We saw an immediate improvement in user engagement.`,
  },
  {
    profile: client2,
    name: "Mark Thompson",
    position: "CEO",
    company: "Dynamic Designs",
    content: `Working with Emmanuel was a breeze! He’s fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever.`,
  },
  {
    profile: client3,
    name: "Clara Mensah",
    position: "Marketing Director",
    company: "BrightPath Agency",
    content: `Emmanuel’s frontend skills took our branding to the next level. He was able to bring our design concepts to life with stunning accuracy and creativity. I highly recommend him!`,
  },
  {
    profile: client4,
    name: "Samuel Okwuosa",
    position: "CTO",
    company: "Greenline Tech",
    content: `Emmanuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across all devices.`,
  },
  {
    profile: client5,
    name: "Linda Ruiz",
    position: "Co-Founder",
    company: "PixelSpark Creative Studio",
    content: `Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his dedication to excellence and innovation."`,
  },
  {
    profile: client6,
    name: "Tunde Adebayo",
    position: "Lead Developer",
    company: "CodeWave",
    content: `Emmanuel is a top-notch frontend developer! His work always exceeds expectations, and he’s a pleasure to collaborate with. Our site is now faster and more user-friendly than ever.`,
  },
];

export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "mradinuba@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+2347039681695",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Gwarinpa, Abuja, Nigeria",
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const footer = [
  {
    group: "Hot Links",
    routes: [
      { name: "Home", id: "header" },
      { name: "About", id: "about" },
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    group: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
