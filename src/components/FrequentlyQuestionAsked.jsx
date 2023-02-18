import { Accordion, AccordionDetails, AccordionSummary, Container, Grid, Toolbar, Typography } from "@mui/material"
import { ExpandMore } from '@mui/icons-material';
import { question } from './question.json'

const FrequentlyQuestionAsked = () => {


    return (
        <Container sx={{ maxWidth: '90%', marginTop: '160px' }} maxWidth={false}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
                <Typography sx={{ fontSize: '36px', lineHeight: '40px', fontWeight: '600' }}>Frequently Asked Questions</Typography>
                <Grid container spacing={2}>
                    {question.map((item, index) => (
                        <Grid key={index} item xs={6}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ fontSize: '18px', lineHeight: '28px', fontWeight: '600' }}>{item.summary}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ fontSize: '16px', lineHeight: '24px', fontWeight: '400' }}>
                                        {item.summaryDetails}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </Container>
    )
}

export default FrequentlyQuestionAsked


