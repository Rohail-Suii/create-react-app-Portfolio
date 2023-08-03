import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default {
  name : 'Rohail Ahmed',
  title : 'Front-End Developer',
  birthday : '01th July 2002',
  email : 'rohailahmed303@gmail.com',
  address : 'Islamabad, Pakistan',
  phone : '+92 333 492 2629',

  socials : {
    Facebook : {
      link : 'https://www.facebook.com',
      text : 'My Facebook',
      icon : <FacebookIcon />
    },
    Linkedin : {
      link : 'https://www.linkedin.com',
      text : 'My Linkedin',
      icon : <LinkedInIcon />
    },
    Github : {
      link : 'https://www.github.com',
      text : 'My Github',
      icon : <GitHubIcon />
    },
    Twitter : {
      link : 'https://www.twitter.com',
      text : 'My Twitter',
      icon : <TwitterIcon />
    }
  }
}