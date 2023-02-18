import { Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import { Twitter, YouTube, Facebook, Chat, Mail, MenuBook, CalendarMonth } from '@mui/icons-material';


const containerStyle = {
    marginTop: '100px',
    backgroundColor: '#FAFAFA',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50.6vw',
    marginRight: '-50.6vw',
    paddingY: '70px'
}
const firstGridStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '15px',
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '32px',
    cursor: 'pointer'
}

const headerText = {
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '20px',
}

const textStyle = {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '20px',
    cursor: 'pointer'
}

const Footer = () => {

    return (
        <Box sx={containerStyle}>
            <Container sx={{ maxWidth: '90%' }} maxWidth={false}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                            <Typography sx={firstGridStyle}>
                                <Chat />
                                Live Chat
                            </Typography>
                            <Typography sx={firstGridStyle}>
                                <Mail />
                                Support Email
                            </Typography>
                            <Typography sx={firstGridStyle}>
                                <MenuBook />
                                Help Center
                            </Typography>
                            <Typography sx={firstGridStyle}>
                                <CalendarMonth />
                                Video Call
                            </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                            <Typography sx={headerText}>Pages</Typography>
                            <Typography sx={textStyle}>Home</Typography>
                            <Typography sx={textStyle}>Pricing</Typography>
                            <Typography sx={textStyle}>Blogs</Typography>
                            <Typography sx={textStyle}>About us</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                            <Typography sx={headerText}>Products</Typography>
                            <Typography sx={textStyle}>Forms Approval</Typography>
                            <Typography sx={textStyle}>Signature</Typography>
                            <Typography sx={textStyle}>Sheetgod</Typography>
                            <Typography sx={textStyle}>Google Form UI Enhancer</Typography>
                            <Typography sx={textStyle}>BoloForms Document Generator</Typography>
                            <Typography sx={textStyle}>Timer + Proctor</Typography>
                            <Typography sx={textStyle}>Google Meet Attendence Tracker</Typography>
                        </Grid>
                        <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                            <Typography sx={headerText}>Legal</Typography>
                            <Typography sx={textStyle}>Terms of Service</Typography>
                            <Typography sx={textStyle}>Privacy Policy</Typography>
                            <Typography sx={textStyle}>Refund Policy</Typography>
                            <Typography sx={textStyle}>Data Security & Policy</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '20px', justifyContent: 'space-between', width: '100%' }}>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px' }}>Made with 🔥 + <span style={{ color: 'red' }}>❤</span> in India</Typography>
                        <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px' }}>Select Language</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: '40px', flexDirection: 'row', justifyContent: 'center', columnGap: '30px', width: '100%' }}>
                        <Twitter fontSize="large" sx={{ cursor: 'pointer' }} />
                        <YouTube fontSize="large" sx={{ cursor: 'pointer' }} />
                        <Facebook fontSize="large" sx={{ cursor: 'pointer' }} />
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default Footer



