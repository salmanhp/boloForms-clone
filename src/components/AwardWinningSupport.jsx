import { Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material'
import awstars from '../assets/awstars.png'
import whchat from '../assets/whchat.png'
import Supportemail from '../assets/support-email.png'
import helpCenter from '../assets/helpcenter.png'
import bookTime from '../assets/book-time.png'

const AwardWinningSupport = () => {
    const awardSupport = [
        {
            id: 1,
            name: "? Whatsapp chat",
            desc: "Ask a question right now.",
            btnName: "Start a chat",
            img: whchat
        },
        {
            id: 2,
            name: "? Email",
            desc: "Get in touch by email.",
            btnName: "Send an email",
            img: Supportemail
        },
        {
            id: 3,
            name: "? Help center",
            desc: "In Depth Guides.",
            btnName: "Read articles",
            img: helpCenter
        },
        {
            id: 4,
            name: "? Google Meet",
            desc: "Guided support and Q&A.",
            btnName: "Book a time",
            img: bookTime
        }
    ]
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '100px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', rowGap: '15px' }}>
                <img src={awstars} width={250} alt="awstars" />
                <Typography sx={{ fontSize: '48px', lineHeight: '48px', fontWeight: '700' }}>Award-winning support<span style={{ color: '#8f58fc' }}>.</span></Typography>
                <Typography sx={{ fontSize: '20px', lineHeight: '28px', fontWeight: '400' }}>Best-in-class support. We’re always here to help – here’s how to connect.</Typography>
                <Grid container spacing={2} mt={2}>
                    {awardSupport.map((item, index) => (
                        <Grid key={index} item xs={3}>
                            <Paper elevation={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: '20px', paddingY: '30px', paddingX: '30px', borderRadius: '15px' }}>
                                <img src={item.img} width={250} height={250} alt={item.name} />
                                <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: '700' }}>{item.name}</Typography>
                                <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }}>{item.desc}</Typography>
                                <Button sx={{ border: '2px solid #915BFF', color: 'black', fontSize: '14px', lineHeight: '20px', fontWeight: '500', textTransform: 'none', ":hover": { backgroundColor: '#8f58fc', color: 'white', border: '2px solid #915BFF' } }} variant='outlined' fullWidth>{item.btnName}</Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </Container>
    )
}

export default AwardWinningSupport

