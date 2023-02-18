import { Box, Container, Toolbar, Typography } from '@mui/material';
import comp1 from '../assets/comp1.svg';
import comp2 from '../assets/comp2.svg';
import comp3 from '../assets/comp3.svg';
import comp4 from '../assets/comp4.svg';

const UsedBy = () => {
    const compLogo = [
        {
            id: 1,
            img: comp1
        },
        {
            id: 2,
            img: comp2
        },
        {
            id: 3,
            img: comp3
        },
        {
            id: 4,
            img: comp4
        },
    ]
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '160px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='h4' sx={{ fontWeight: '600' }}>BoloForms Is Used By</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px', marginTop: '60px' }}>
                    {compLogo.map((item, index) => (
                        <Box key={index} sx={{ width: '260px', height: '260px', border: '1px solid #E5E7EB', borderRadius: '15px' }}>
                            <img src={item.img} width="100%" alt="compLogo" />
                        </Box>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    )
}

export default UsedBy


