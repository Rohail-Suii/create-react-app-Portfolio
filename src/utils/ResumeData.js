import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ApiIcon from '@mui/icons-material/Api';
import javaimg1 from '../assets/java imgs/manager login.png';
import javaimg2 from '../assets/java imgs/s portal.png';
import javaimg3 from '../assets/java imgs/sell product.png';
import javaimg4 from '../assets/java imgs/All products.png';
import bikeimg1 from '../assets/bike imgs/img1.png';
import bikeimg2 from '../assets/bike imgs/img2.png';
import bikeimg3 from '../assets/bike imgs/img3.png';
import bankimg1 from '../assets/bank imgs/img1.png';
import bankimg2 from '../assets/bank imgs/img2.png';
import portfolioimg1 from '../assets/portfolio/img1.png';
import portfolioimg2 from '../assets/portfolio/img2.png';
export default {
  name: 'Rohail Ahmed',
  title: 'Front-End Developer',
  birthday: '01th July 2002',
  email: 'rohailahmed303@gmail.com',
  address: 'Islamabad, Pakistan',
  phone: '+92 333 492 2629',
  

  socials: {
    Linkedin: {
      link: 'https://www.linkedin.com/in/rohail-ahmed-51b3a6250/',
      text: 'My Linkedin',
      icon: <LinkedInIcon />
    },
    Github: {
      link: 'https://github.com/Rohail-Suii',
      text: 'My Github',
      icon: <GitHubIcon />
    },
  },

  about: "Hello there! I'm a Meta certified ReactJS developer and computer science student with over 2 years of experience as a modern front end web developer. I possess the ability to handle a wide range of tasks, from simple static websites to complex web projects, all while providing top-notch solutions. I excel in supporting, maintaining, and clear communication throughout the entire development process.",
  experiences: [
    {
      title: 'Wordpress Developer',
      date: '2020 - 2021',
      description: 'Freelancing at fiverr.',
    },
    {
      title: 'React Developer',
      date: '2023 - Present',
      description: 'Freelancing at upwork.',
    },
    {
      title: 'Software Engineer',
      date: 'Aug 2023 - Present',
      description: 'Internship at Pakistan Post.',
    }
  ],
  education: [
    {
      title: 'BS Computer Science',
      date: '2021 - 2024',
      description: 'Comsats University,Islamabad',
    },
    {
      title: 'React Basics',
      date: 'July 2023',
      description: 'From Coursera by Meta',
    },
    {
      title: 'React Advanced',
      date: 'July 2023',
      description: 'From Coursera by Meta',
    }
  ],
  services: [
    {
      title: 'Web Development',
      description: 'Crafting dynamic and interactive websites to meet your business needs.',
      icon: <DeveloperModeIcon />
    },
    {
      title: 'SEO',
      description: ' Implementing on-page optimization techniques to improve website ranking and increase organic traffic for better online visibility and engagement.',
      icon: <CodeIcon />
    },
    {
      title: 'API Integration',
      description: 'Seamlessly incorporating external data and functionalities into web applications to enhance user experiences and extend functionality.',
      icon: <ApiIcon />
    },
  ],
  skills: [
    {
      title: 'Front-End',
      description: [
        'ReactJS',
        'HTML',
        'CSS',
        'JavaScript',
        'Material UI',
        'Tailwindcss',
        
      ]
    },
    {
      title: 'Version Control',
      description: ['Git', 'Github']
    },
    {
      title: 'Software Engineer',
      description: ['C++', 'Java', 'OOP', 'Data Structure']
    }
  ],
  projects: [
    {
      tag: 'React + Tailwindcss',
      images: [bikeimg1, bikeimg2, bikeimg3],
      title: 'Bike Rental App',
      caption: 'A short description',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      links: [
        { link: 'https://github.com/Rohail-Suii/bike_rental', icon: <GitHubIcon /> },
        { link: 'https://bikerental1.netlify.app/', icon: <LanguageIcon /> },
      ]
    },
    {
      tag: 'React + Material UI',
      images: [portfolioimg1, portfolioimg2],
      title: 'Portfolio Website',
      caption: 'A short description',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      links: [
        { link: 'https://github.com/Rohail-Suii/create-react-app-Portfolio', icon: <GitHubIcon /> },
      ]
    },
    {
      tag: 'React + Tailwindcss',
      images: [bankimg1, bankimg2],
      title: 'Bank App',
      caption: 'A short description',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      links: [
        { link: 'https://github.com/Rohail-Suii/bank-app', icon: <GitHubIcon /> },
        { link: 'https://polite-chebakia-aaad5b.netlify.app/', icon: <LanguageIcon /> },
      ]
    },
    {
      tag: 'Java',
      images: [javaimg1, javaimg2, javaimg3, javaimg4],
      title: 'Shop Management System',
      caption: 'A short description',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      links: [
        { link: 'https://github.com/Rohail-Suii/OOP-project', icon: <GitHubIcon /> },
        
      ]
    },
  ],

}