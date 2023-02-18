import { Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { RocketLaunch } from '@mui/icons-material';

const Hero = () => {
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '160px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Box sx={{ width: '45%', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
                    <Typography sx={{ fontWeight: '600', fontSize: '36px', lineHeight: '55px' }} variant="h5">Transform Google Forms Into Interactive Workflows</Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '18px', lineHeight: '30px' }} variant="body1">
                        BoloForms is a Google Forms add on that allows you to add conditional logic to your forms. With BoloForms, you can create interactive workflows, approval flows & automate processes.
                    </Typography>
                    <Button variant="contained" sx={{ paddingY: '12px', fontWeight: '600', fontSize: '20px', lineHeight: '28px', backgroundColor: '#8f58fc', textTransform: 'none', width: '40%', "&:hover": { backgroundColor: "#a072fc" } }}>
                        <RocketLaunch style={{ marginRight: '10px' }} />
                        Install For Free
                    </Button>
                </Box>
                <Box sx={{ width: '45%' }}>
                    <iframe style={{ borderRadius: '15px', border: '4px solid #915BFF' }} width="560" height="315" src="https://www.youtube.com/embed/riiUkCRpIio" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Box>
            </Toolbar>
        </Container>
    )
}

export default Hero;

