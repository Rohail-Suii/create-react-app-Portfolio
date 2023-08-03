import React from 'react'
import './Profile.css'
import { Typography } from '@mui/material'
import profile_img from '../../assets/images/profile_img1.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'
import ResumeData from '../../utils/ResumeData'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineContent from '@mui/lab/TimelineContent';
import CustomButton from '../Button/Button'
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className='timeline_content'>
      {link ? (
        <Typography className='timelineItem_text'>
          <span>{title}:</span> <a href={link} target='_blank'>{text}</a>
        </Typography>
      ) : (
        <Typography className='timelineItem_text'>
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
)

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{ResumeData.name}</Typography>
        <Typography className='title'>{ResumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={profile_img} alt='' />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>

          <CustomTimelineItem title='Name' text={ResumeData.name} />
          <CustomTimelineItem title='Title' text={ResumeData.title} />
          <CustomTimelineItem title='Email' text={ResumeData.email} />
          <CustomTimelineItem title='Phone' text={ResumeData.phone} />
          {Object.keys(ResumeData.socials).map((key) => (
            <CustomTimelineItem title={key} text={ResumeData.socials[key].text} link={ResumeData.socials[key].link} />
          ))}

        </CustomTimeline>
        <div className='button_container'>
          <CustomButton text="Download Cv" icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  )
}

export default Profile