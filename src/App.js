import { Container, Grid } from '@mui/material';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Portfolio from './pages/portfolio/Portfolio';
import Resume from './pages/resume/Resume';
import Footer from './components/Footer/Footer';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container className='top_60'>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <Router>
            <Header />
            <main>
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} exact>
                </Route>
                <Route path="/" element={<Resume />} exact>
                </Route>
              </Routes>
            </main>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
