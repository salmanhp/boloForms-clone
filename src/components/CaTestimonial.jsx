import { Box, Container, Toolbar, Typography } from "@mui/material"
import star from '../assets/stars.svg'
import patrick from '../assets/patrick.jpeg'

const containerStyle = {
    marginTop: '100px',
    backgroundColor: '#9A6AFD',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50.6vw',
    marginRight: '-50.6vw',
    paddingY: '70px'
}

const CaTestimonial = () => {
    return (
        <Box sx={containerStyle}>
            <Container sx={{ maxWidth: '90%' }} maxWidth={false}>
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', color: 'white', rowGap: '30px' }}>
                    <Typography sx={{ fontSize: '18px', fontWeight: '700', lineHeight: '27px' }}>
                        " Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software!"
                    </Typography>
                    <img src={star} width={130} alt="Star" />
                    <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '30px', columnGap: '20px', alignItems: 'center' }}>
                        <img style={{ borderRadius: '50%', width: '80px', height: '80px', border: '2px solid white' }} src={patrick} alt="patrick" />
                        <Box>
                            <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '28px' }}>Patrick Nyama,</Typography>
                            <Typography sx={{ fontSize: '14px', fontWeight: '400', lineHeight: '20px' }}>Edmonton CA</Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    )
}

export default CaTestimonial