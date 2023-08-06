import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import ResumeData from '../../utils/ResumeData';
import { Dialog,DialogTitle,DialogContent, DialogActions, Grow, Typography } from '@mui/material'
import "./Portfolio.css";
import { Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

export default function Portfolio() {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container spacing={1} className="section pb_45 pt_45">
      {/* Title */}
      <Grid item className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      {/* Tabs */}
      <Grid item xs={12}>
        <Tabs value={tabValue} indicatorColor='white' className='custom_tabs' onChange={(event, newValue) => setTabValue(newValue)}>
          <Tab label="All" value="All" className={tabValue === 'All' ? 'customTabs_item active' : 'customTabs_item'} />
          {[...new Set(ResumeData.projects.map(item => item.tag))].map(tag => (
            <Tab label={tag} value={tag} className={tabValue === tag ? 'customTabs_item active' : 'customTabs_item'} />
          ))}
        </Tabs>
      </Grid>
      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {ResumeData.projects.map(project => (
            <>
              {tabValue === project.tag || tabValue === 'All' ? (
                <Grid item xs={12} sm={6} md={4} >
                  <Grow in timeout={1000}>
                    <Card className='customCard' onClick={() => setProjectDialog(project)}>
                      <CardActionArea>
                        <CardMedia className='customCard_image' component="img" image={project.images[0]} title={project.title} />
                        <CardContent>
                          <Typography variant={'body2'} className='customCard_title'>{project.title}</Typography>
                          <Typography variant='caption' className='customCard_caption'>{project.caption}</Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>) : null}
            </>
          ))}
        </Grid>
      </Grid>


      <Dialog open={projectDialog} onClose={() => setProjectDialog(false)} className='projectDialog' maxWidth='lg' fullWidth>
        <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>

        
        <DialogContent style={{height:"80vh"}}>
          {
            projectDialog.images && (
              <ImageGallery images={projectDialog.images}  />
            )

          }
          <Typography className='projectDialog_description'>{projectDialog.description}</Typography>
        </DialogContent>
        <DialogActions className='projectDialog_actions'>
          {projectDialog?.links?.map(link => (
            <a href={link.link} target='_blank' rel='noreferrer' className='projectDialog_icon'>{link.icon}</a>
          ))}
        </DialogActions>
      </Dialog>


    </Grid >
  );
};
