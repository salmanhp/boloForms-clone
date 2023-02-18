import { Box, Container, Paper, Toolbar, Typography } from "@mui/material"
import starts from '../assets/stars.svg'

const Testimonials = ({ testimonials }) => {

    return (
        <Container sx={{ maxWidth: '90%', marginTop: '120px' }} maxWidth={false}>
            <Toolbar>
                <Paper elevation={6} sx={{ display: 'flex', columnGap: '50px', padding: '30px', alignItems: 'center', borderRadius: '15px', width: '100%' }}>
                    <Box sx={{ width: '250px' }}>
                        <img style={{ borderRadius: '50%', width: '130px', height: '130px' }} src={testimonials.img} alt={testimonials.name} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                        <img width={130} src={starts} alt="stars" />
                        <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }}>
                            "{testimonials.desc}"
                        </Typography>
                        <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '600' }} variant="h6">
                            {testimonials.name}
                        </Typography>
                    </Box>
                </Paper>
            </Toolbar>
        </Container>
    )
}

export default Testimonials



