import { Box, Container, Toolbar, Typography } from '@mui/material';
import workflow1 from '../assets/workflow1.svg';
import workflow2 from '../assets/workflow2.svg';
import workflow3 from '../assets/workflow3.svg';


const HowToUsed = () => {
    const compLogo = [
        {
            id: 1,
            desc: "Choose a template or add questions to create your Google Form.",
            img: workflow1
        },
        {
            id: 2,
            desc: "Choose a template or add questions to create your Google Form.",
            img: workflow2
        },
        {
            id: 3,
            desc: "Choose a template or add questions to create your Google Form.",
            img: workflow3
        }
    ]
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '160px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}>How does BoloForms work?</Typography>
                <Typography variant='caption' sx={{ fontWeight: '400', lineHeight: '20px', fontSize: '14px' }}>Set up your first workflow in just 3 easy steps.</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px', marginTop: '60px' }}>
                    {compLogo.map((item, index) => (
                        <Box key={index} sx={{ width: '400px' }}>
                            <img src={item.img} width="100%" alt="compLogo" />
                            <Typography align='center' variant='h4' sx={{ fontWeight: '600' }}>Step {item.id}:</Typography>
                            <Typography sx={{ fontWeight: '400', lineHeight: '24px', fontSize: '16px', textAlign: 'center' }}>
                                {item.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    )
}

export default HowToUsed


