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
import pakposting1 from '../assets/Pak Post/hero section.PNG'
import pakposting2 from '../assets/Pak Post/tracking.PNG'
import pakposting3 from '../assets/Pak Post/tariff.PNG'
import pakposting4 from '../assets/Pak Post/hero section old web.PNG'
import pakposting5 from '../assets/Pak Post/tracking old.PNG'
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
      tag: 'React + Express + MySQL',
      images: [pakposting1, pakposting2, pakposting3, pakposting4, pakposting5],
      title: 'Pakistan Post Official Website',
      caption: ' Our website leverages the robust MERN stack technology. Collaborating with a skilled team, I gained valuable experience in SRS, UI/UX, user manuals, and coding.',
      description: ' Two websites mentioned (https://www.pakpost.gov.pk/index.php and https://ep.gov.pk/) are on the verge of being replaced by the website we developed during our internship at the IT department of Pakistan Posts headquarters. Following the successful completion of all stages and a commendation from DG Pak Post, Hafiz Shakil Ahmed Qureshi, Chairman/Director General, we are gearing up for the big launch. We harnessed the power of the MERN stack technology for this project. Working with a talented team, I had the privilege of gaining hands-on experience across a wide spectrum of areas, including SRS, UI/UX, user manuals, and coding.',
      links: [
        { link: 'http://www.pakpost.gov.pk/testppo', icon: <LanguageIcon /> },
      ]
    },
    {
      tag: 'React + Tailwindcss',
      images: [bikeimg1, bikeimg2, bikeimg3],
      title: 'Bike Rental App',
      caption: ' Easily rent bikes hassle-free with our user-friendly app, powered by efficient state management.',
      description: 'Discover the thrill of exploring new horizons with our adventure bike rental app. Utilizing advanced state management, the app offers a user-friendly experience, enabling adventurers to effortlessly browse, book, and manage their dream bike rentals, ensuring an unforgettable journey every time.',
      links: [
        { link: 'https://github.com/Rohail-Suii/bike_rental', icon: <GitHubIcon /> },
        { link: 'https://bikerental1.netlify.app/', icon: <LanguageIcon /> },
      ]
    },
    {
      tag: 'React + Material UI',
      images: [portfolioimg1, portfolioimg2],
      title: 'Portfolio Website',
      caption: 'Showcasing my talents and achievements built on React and Material-UI, responsive user experience.',
      description: 'Showcasing my talents and achievements in style with our captivating portfolio website built using React and Material UI. With its modern design and smooth user experience, this website will leave a lasting impression on visitors and help you stand out in the digital world..',
      links: [
        { link: 'https://github.com/Rohail-Suii/create-react-app-Portfolio', icon: <GitHubIcon /> },
      ]
    },
    {
      tag: 'React + Tailwindcss',
      images: [bankimg1, bankimg2],
      title: 'Bank App',
      caption: 'Experience seamless and intuitive banking on-the-go with our modern, responsive UI/UX bank app',
      description: 'Our modern bank app boasts a cutting-edge frontend UI/UX design, meticulously crafted to ensure a seamless and user-friendly experience. With a focus on responsiveness, the app adapts effortlessly to various devices, be it smartphones, tablets, or desktops. Enjoy intuitive navigation, and a visually engaging interface that empowers you to manage your finances with ease. Embrace the future of banking convenience and sophistication with our innovative bank app.',
      links: [
        { link: 'https://github.com/Rohail-Suii/bank-app', icon: <GitHubIcon /> },
        { link: 'https://polite-chebakia-aaad5b.netlify.app/', icon: <LanguageIcon /> },
      ]
    },
    {
      tag: 'Java',
      images: [javaimg1, javaimg2, javaimg3, javaimg4],
      title: 'Shop Management System',
      caption: 'Streamline your business operations with our Java OOP-based Shop Management System for efficient and organized management.',
      description: 'Streamline your business operations with our efficient Shop Management System, developed using Object-Oriented Programming (OOP) principles of Java. This comprehensive software empowers you to effortlessly handle inventory, sales, customer data, and financial records, enhancing productivity and providing a seamless shopping experience for both you and your customers..',
      links: [
        { link: 'https://github.com/Rohail-Suii/OOP-project', icon: <GitHubIcon /> },
        
      ]
    },
  ],

}