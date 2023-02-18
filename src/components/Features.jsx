import { Box, Container, Grid, Toolbar, Typography } from "@mui/material"
import fimg1 from '../assets/fimg1.svg';
import fimg2 from '../assets/fimg2.svg';
import fimg3 from '../assets/fimg3.svg';
import fimg4 from '../assets/fimg4.svg';
import fimg5 from '../assets/fimg5.svg';
import fimg6 from '../assets/fimg6.svg';
import fimg7 from '../assets/fimg7.svg';
import fimg8 from '../assets/fimg8.svg';
import fimg9 from '../assets/fimg9.svg';

const Features = () => {
    const features = [
        {
            id: 1,
            title: "Get started in less than 5 minutes.",
            desc: "Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.",
            img: fimg1
        },
        {
            id: 2,
            title: "Multi-level workflows",
            desc: "To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.",
            img: fimg2
        },
        {
            id: 3,
            title: "Dynamic Reciepients",
            desc: "Approvers can be selected based on the answers to a form response or entered manually by the requestor.",
            img: fimg3
        },
        {
            id: 4,
            title: "Role Based Workflows",
            desc: "Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only.",
            img: fimg4
        },
        {
            id: 5,
            title: "Conditional Logic",
            desc: "To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.",
            img: fimg5
        },
        {
            id: 6,
            title: "One-click Approvals",
            desc: "Notification emails are sent to users and can be approved with a single click.",
            img: fimg6
        },
        {
            id: 7,
            title: "Responsive design",
            desc: "It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.",
            img: fimg7
        },
        {
            id: 8,
            title: "Enterprise grade security",
            desc: "Majority of data stored in your spreadsheet. This ensures you have the complete control of your data with end to end encryption.",
            img: fimg8
        },
        {
            id: 9,
            title: "Custom Dashboard",
            desc: "Track approvals of various forms from a single place! See the approval process for each request in real-time",
            img: fimg9
        }
    ]

    return (
        <Container sx={{ maxWidth: '90%', marginTop: '80px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
                    <Typography sx={{ fontSize: '30px', lineHeight: '36px', fontWeight: '700' }} variant="h5">Features</Typography>
                    <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '400' }} variant="inherit">Everything that your organisation will love, & more.</Typography>
                </Box>
                <Grid container spacing={10}>
                    {features.map((item, index) => (
                        <Grid key={index} item xs={4}>
                            <img src={item.img} alt={item.title} />
                            <Typography sx={{ fontSize: '24px', lineHeight: '32px', fontWeight: '600' }}>
                                {item.title}
                            </Typography>
                            <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }}>
                                {item.desc}
                            </Typography>
                        </Grid>
                    ))}

                </Grid>
            </Toolbar>
        </Container>
    )
}

export default Features


