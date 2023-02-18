import * as React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Button,
  Typography,
  Toolbar,
  ListItemText,
  ListItemButton,
  ListItem,
  List,
  Box,
  IconButton,
  Drawer,
  Divider,
  CssBaseline,
  Stack,
  Container
} from '@mui/material';

import { Menu, KeyboardArrowDown } from '@mui/icons-material';
import logo from '../src/assets/bolo-forms-logo.svg';
import Hero from './components/Hero';
import UsedBy from './components/UsedBy';
import HowToUsed from './components/HowToUsed';
import Testimonials from './components/Testimonials';
import { InstallAndPremium } from './components/InstallAndPremium';
import Features from './components/Features';

import testm1 from './assets/repa.jpeg'
import testm2 from './assets/alaa.jpeg'
import testm3 from './assets/deepak.jpeg'
import testm4 from './assets/raman.jpeg'
import testm5 from './assets/john.jpeg'
import CaTestimonial from './components/CaTestimonial';
import Guarantee from './components/Guarantee';
import AwardWinningSupport from './components/AwardWinningSupport';
import FrequentlyQuestionAsked from './components/FrequentlyQuestionAsked';
import CustomersTestimonials from './components/CustomersTestimonials';
import Footer from './components/Footer';
const drawerWidth = 240;

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const testimonials = [
    {
      id: 1,
      img: testm1,
      name: "Repa Mandala",
      desc: "Boloforms has been an absolute lifesaver for me. It makes workflow tasks much easier and helps to ensure that everything runs smoothly. I love how it automates tasks and eliminates manual processes, saving me time and effort. It's a great Google Workflow software and is well worth the money!"
    },
    {
      id: 2,
      img: testm2,
      name: "Alaa Khaled",
      desc: "Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"
    },
    {
      id: 3,
      img: testm3,
      name: "Deepak S (Solero Corporation)",
      desc: "Easy to use interface and timely support...looking for more features"
    },
    {
      id: 4,
      img: testm4,
      name: "Raman R",
      desc: "I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"
    },
    {
      id: 5,
      img: testm5,
      name: "John M.",
      desc: "Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."
    }
  ]

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='Install Now' />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary='BoloForms Premium' />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: '#FAFAFA', color: 'black', boxShadow: 'none' }} component="nav">
        <Container sx={{ maxWidth: '90%' }} maxWidth={false}>
          <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu />
            </IconButton>

            <Box sx={{ display: { xs: 'block', sm: 'none' }, cursor: 'pointer' }}>
              <img src={logo} alt="logo" width={150} height={75} />
            </Box>
            <Stack spacing={2} sx={{ fontWeight: '600', fontSize: '14px' }} display={{ xs: 'none', sm: 'flex' }} direction={{ sm: 'row' }}>

              <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', height: '80px' }}>
                <img src={logo} alt="logo" width="150" height="" />
              </Box>

              <ListItem sx={{ cursor: 'pointer' }}>
                Products
                <KeyboardArrowDown />
              </ListItem>
              <ListItem sx={{ cursor: 'pointer' }}>Pricing</ListItem>
              <ListItem sx={{ cursor: 'pointer' }}>Guides</ListItem>
              <ListItem sx={{ cursor: 'pointer' }}>Templates</ListItem>
            </Stack>
            <Box sx={{ direction: { sm: 'row' }, columnGap: '10px', display: { xs: 'none', sm: 'flex' } }}>
              <Button variant='outlined' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px', textTransform: 'none', outlineColor: '#915BFF', borderRadius: '8px', color: '#915BFF', "&:hover": { backgroundColor: "#a072fc", color: '#fff' } }} >
                Install Now
              </Button>
              <Button variant='contained' sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '24px', textTransform: 'none', backgroundColor: '#915BFF', "&:hover": { backgroundColor: "#a072fc" } }}>
                BoloForms Premium
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Hero />
        <UsedBy />
        <HowToUsed />
        <Testimonials testimonials={testimonials[0]} />
        <InstallAndPremium />
        <Features />
        <Testimonials testimonials={testimonials[1]} />
        <InstallAndPremium />
        <Testimonials testimonials={testimonials[2]} />
        <CaTestimonial />
        <Testimonials testimonials={testimonials[3]} />
        <InstallAndPremium />
        <Testimonials testimonials={testimonials[4]} />
        <Guarantee />
        <AwardWinningSupport />
        <FrequentlyQuestionAsked />
        <CustomersTestimonials />
        <Footer />
      </Box>
    </Box>
  );
}

App.propTypes = {
  window: PropTypes.func,
};

export default App;
