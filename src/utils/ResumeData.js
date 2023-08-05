import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ApiIcon from '@mui/icons-material/Api';
export default {
  name: 'Rohail Ahmed',
  title: 'Front-End Developer',
  birthday: '01th July 2002',
  email: 'rohailahmed303@gmail.com',
  address: 'Islamabad, Pakistan',
  phone: '+92 333 492 2629',

  socials: {
    Facebook: {
      link: 'https://www.facebook.com',
      text: 'My Facebook',
      icon: <FacebookIcon />
    },
    Linkedin: {
      link: 'https://www.linkedin.com',
      text: 'My Linkedin',
      icon: <LinkedInIcon />
    },
    Github: {
      link: 'https://www.github.com',
      text: 'My Github',
      icon: <GitHubIcon />
    },
    Twitter: {
      link: 'https://www.twitter.com',
      text: 'My Twitter',
      icon: <TwitterIcon />
    }
  },

  about: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n Ut enim ad minim veniam, quis nostrud exercitation",
  experiences: [
    {
      title: 'Work 1',
      date: '2018 - 2019',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Work 2',
      date: '2019 - 2020',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Work 3',
      date: '2020 - Present',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ],
  education: [
    {
      title: 'Education 1',
      date: '2018 - 2019',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Education 2',
      date: '2019 - 2020',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      title: 'Education 3',
      date: '2020 - Present',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  ],
  services: [
    {
      title: 'Web Development',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: <DeveloperModeIcon />
    },
    {
      title: 'SEO',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: <CodeIcon />
    },
    {
      title: 'API Integration',
      description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: <ApiIcon />
    },
  ],
  skills: [
    {
      title: 'Front-End',
      description: [
        'ReactJS',
        'JavaScript',
        'Material UI',
        'Bootstrap',
        'HTML',
        'CSS'
      ]
    },
    {
      title: 'Version Control',
      description:['Git','Github']
    }
  ] 

}