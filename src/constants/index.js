import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    unity,
    cloud,
    unreal,
    stadia,
    beautycon,
    savorsaber,
    firebase,
    python,
    csharp,
    savorsaberbanner,
    redrampage,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Game Systems Engineer",
      icon: unreal,
    },
    {
      title: "Game AI Engineer",
      icon: unity,
    },
    {
      title: "Cloud Engineer",
      icon: cloud,
    },
    
  ];
  
  const technologies = [
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Unreal",
      icon: unreal,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
  ];
  
  const projects = [
    {
      name: "Red Rampage",
      description:
        "Top-down 3rd-person shooter set on Mars. Built in UE 5 using a mixture of UE 5 Blueprints and CPP.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "unreal",
          color: "pink-text-gradient",
        },
      ],
      image: redrampage,
      source_code_link: "https://github.com/Kindon-Smith/Red-Rampage"
    },
    {
      name: "Savor Saber",
      description:
        "JRPG style single-player adventure game designed around food skewer combat. Build in C# using Unity 2D.",
      tags: [
        {
          name: "csharp",
          color: "blue-text-gradient",
        },
        {
          name: "unity",
          color: "green-text-gradient",
        },
      ],
      image: savorsaberbanner,
      source_code_link: "https://github.com/RadicalSkewerAnarchy/SavorSaber",
    },
  ];
 
  export { services, technologies, experiences, testimonials, projects };
  