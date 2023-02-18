import { Container, Paper, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import guarantee from '../assets/guarantee.png'
import sign from '../assets/sign.png'

const Guarantee = () => {
    const paraStyle = { fontSize: '16px', lineHeight: '24px', fontWeight: '400' }
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '80px' }} maxWidth={false}>
            <Toolbar>
                <Paper elevation={6} sx={{ display: 'flex', columnGap: '30px', borderRadius: '15px', paddingY: '40px', paddingX: '40px' }}>
                    <img width={100} height={100} src={guarantee} alt="guarantee" />
                    <Box>
                        <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '600', color: '#4B5563' }}>MY 100% NO-RISK DOUBLE-GUARANTEE</Typography><br />
                        <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: '700' }}>If you don’t like BoloForms over the next 30 days, I will happily refund 100% of your purchase. No questions asked.</Typography><br />
                        <Typography sx={paraStyle}>Here's why I'm offering this -</Typography><br />
                        <Typography sx={paraStyle}>I have seen the power of automating your business workflows. Take some time out of your busy schedule today and see what all things can be automated in your workflows.</Typography><br />
                        <Typography sx={paraStyle}>You will find that most of your time is going in doing things that could be done better by automating. You just have to give it a shot!</Typography><br />
                        <Typography sx={paraStyle}>Start with automating small workflow and then gradually you will love it!!</Typography><br />
                        <Typography sx={paraStyle}>Thank you, and I hope we'll get the opportunity to be a part of your growth journey soon!</Typography><br />
                        <img src={sign} width={140} height={50} alt="sign" />
                        <Typography sx={{ fontSize: '18px', lineHeight: '27px', fontWeight: '600' }}>Paresh Deshmukh</Typography>
                        <Typography sx={{ fontSize: '12px', lineHeight: '16px', fontWeight: '700' }}>Co-Founder BoloForms</Typography>
                    </Box>
                </Paper>
            </Toolbar>
        </Container>
    )
}

export default Guarantee