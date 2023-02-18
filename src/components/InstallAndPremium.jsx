import { Toolbar, Container, Box, Button, Typography } from "@mui/material"
import { RocketLaunch, CloudDownload, Done } from '@mui/icons-material';

export const InstallAndPremium = () => {
    return (
        <Container sx={{ maxWidth: '90%', marginTop: '120px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '20px' }}>
                    <Button variant="contained" sx={{ paddingY: '12px', fontWeight: '600', fontSize: '20px', lineHeight: '28px', backgroundColor: '#8f58fc', textTransform: 'none', "&:hover": { backgroundColor: "#a072fc" } }}>
                        <CloudDownload style={{ marginRight: '10px' }} />
                        Install For FREE
                    </Button>
                    <Button variant="outlined" sx={{ paddingY: '12px', fontWeight: '600', fontSize: '20px', lineHeight: '28px', textTransform: 'none', border: '2px solid #915BFF', borderRadius: '8px', color: '#915BFF', "&:hover": { border: '2px solid #915BFF' } }}>
                        <RocketLaunch style={{ marginRight: '10px' }} />
                        BoloForms Premium
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '15px' }}>
                    <Box sx={{ display: 'flex', columnGap: '10px' }}>
                        <Done color="success" />
                        <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '500' }}>Trusted by 50000+ Businesses</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '10px' }}>
                        <Done color="success" />
                        <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '500' }}>30 Days Money Back Guarantee</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', columnGap: '10px' }}>
                        <Done color="success" />
                        <Typography sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '500' }}>1-1 Zoom & WhatsApp Onboarding</Typography>
                    </Box>
                </Box>
            </Toolbar>
        </Container>
    )
}
