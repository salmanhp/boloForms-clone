import { Container, Toolbar, Typography } from "@mui/material"
import customerstestimonials from '../assets/customerstestimonials.svg'

const CustomersTestimonials = () => {
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '100px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '36px', lineHeight: '40px' }}>Customers Who Are Trusting Us!<span style={{ color: 'red', marginLeft: '10px' }}>❤</span></Typography>
                <Typography sx={{ fontWeight: '400', fontSize: '18px', lineHeight: '28px' }}>Customers’ Testimonials</Typography>
                <img src={customerstestimonials} style={{ width: '100%' }} alt="customerstestimonials" />
            </Toolbar>
        </Container>
    )
}

export default CustomersTestimonials


