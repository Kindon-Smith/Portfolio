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
    redrampage2,
    linkedin
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
    {
      title: "Developer Support Engineer",
      company_name: "Accenture",
      icon: firebase,
      iconBg: "#383E56",
      date: "Oct 2022 - Present",
      points: [
        "Oversee app developer issues with a focus on Firebase Cloud Messaging (FCM) and Google Analytics (GA) for Firebase.",
        "Build developer trust by resolving problems with FCM delivery through SDK and Rest API calls.",
        "Educate developers on GA implementation, data collection, and interpretation.",
        "Currently hold certifications as a Subject Matter Expert in FCM and GA for Firebase",
      ],
    },
    {
      title: "Cloud Support Engineer",
      company_name: "Accenture",
      icon: stadia,
      iconBg: "#E6DEDD",
      date: "Oct 2019 - Nov 2022",
      points: [
        "Upheld every facet of the Stadia service, acting as a mediary between engineers and game developers.",
        "Shielded engineers from technical concerns raised by clients about our API and SDK escalations, with an average deflection rate of 85%",
        "Established Stadia supports high reputation, maintaining a personal average Customer Satisfaction(CSAT) rating of 4.94/5 and a team average of 4.86/5 over three years.",
        "Managed an evolving case queue by optimizing task assignments and prioritizing tickets for timely and effectivem resolution.",
      ],
    },
    {
      title: "UX Engineer",
      company_name: "Beautycon Media",
      icon: beautycon,
      iconBg: "#383E56",
      date: "Jun 2019 - August 2019",
      points: [
        "Built a mobile application interface for iOS and Android platforms on a 6-week timeline.",
        "Designed a front-end application with Javascript and HTML/CSS",
        "Implemented live conversion from a Wordpress web-app to the application framework.",
        "Application was downloaded by over 2000 event attendees.",
      ],
    },
    {
      title: "Game Systems Engineer",
      company_name: "Savor Saber",
      icon: savorsaber,
      iconBg: "#E6DEDD",
      date: "September 2018 - June 2019",
      points: [
        "Built an award-winning 2D adventure JRPG, Savor Saber. Co-designed and implemented Utility based AI, Finite State Machines, and A* pathfinding in Unity with a team of 11.",
        "Savor Saber won multiple awards at the UCSC Games Showcase and received a $5000 scholarship to continue development after graduation.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
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
      image: redrampage2,
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

  const externalLinks = [
    {
      name: "linkedin",
      source_link: "https://www.linkedin.com/in/kindon-smith/",
      source_image: linkedin,
    },
  ];
 
  export { services, technologies, experiences, testimonials, projects, externalLinks };
  