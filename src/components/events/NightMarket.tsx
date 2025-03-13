import { Box, Button, Card, CardContent, CardMedia, Grid, Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const NightMarket = () => {
    return (
        <Card sx={{ mb: 4 }}>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box sx={{ position: 'relative', height: '100%', minHeight: '200px' }}>
                        <CardMedia
                            component="img"
                            image="/night-market-2023.jpg"
                            alt="Taste of Sea Night Market 2023"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <CardContent>
                        <Box>
                            <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                                Taste of Sea Night Market
                            </Typography>
                            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                                March 14, 2025 • 7:00 PM - 10:00 PM
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Join us for an evening of Southeast Asian culture, cuisine, and performances! The annual Taste of Sea Night Market brings together Southeast Asian organizations from across Berkeley to share their culinary traditions and cultural performances.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                Experience authentic street food, watch traditional and modern performances, and connect with Berkeley's vibrant Southeast Asian community.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Location: Upper Sproul Plaza
                            </Typography>
                        </Box>
                        <Stack
                            direction={{ xs: 'column', sm: 'row' }}
                            spacing={1}
                            justifyContent="flex-start"
                            sx={{ mb: 2 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Taste+of+SEA+Night+Market&dates=20250315T010000Z/20240315T050000Z&details=Join+us+for+an+evening+of+Southeast+Asian+culture,+cuisine,+and+performances!&location=Upper+Sproul+Plaza,+Berkeley,+CA"
                                target="_blank"
                                size="small"
                                startIcon={<CalendarMonthIcon />}
                            >
                                Add to Calendar
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://bit.ly/nightmarketvendor"
                                target="_blank"
                                size="small"
                                disabled
                            >
                                Sign Up as Vendor
                            </Button>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://bit.ly/nightmarketperformer"
                                target="_blank"
                                size="small"
                                disabled
                            >
                                Sign Up to Perform
                            </Button>
                        </Stack>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="vendor-content"
                                id="vendor-header"
                            >
                                <Typography variant="subtitle1" fontWeight="medium">Vendor Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" paragraph>
                                    We welcome vendors to share Southeast Asian cuisine and products at our Night Market! Here's what you need to know:
                                </Typography>
                                <Typography component="div" variant="body2">
                                    <ul>
                                        <li>Vendor fee: $50 for student organizations, $100 for external vendors</li>
                                        <li>Setup time: 5:00 PM - 6:30 PM</li>
                                        <li>Each vendor receives:
                                            <ul>
                                                <li>1 table (6ft)</li>
                                                <li>2 chairs</li>
                                                <li>Access to power outlet (must request in advance)</li>
                                            </ul>
                                        </li>
                                        <li>Vendors must provide their own:
                                            <ul>
                                                <li>Food warmers/coolers</li>
                                                <li>Extension cords</li>
                                                <li>Cash box/payment system</li>
                                                <li>Decorations and signage</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    All food vendors must comply with UC Berkeley and City of Berkeley food safety regulations. Detailed requirements will be sent after registration.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="performer-content"
                                id="performer-header"
                            >
                                <Typography variant="subtitle1" fontWeight="medium">Performer Information</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body2" paragraph>
                                    Share your talents and cultural performances at our Night Market! We welcome both traditional and modern performances.
                                </Typography>
                                <Typography component="div" variant="body2">
                                    <ul>
                                        <li>Performance slots:
                                            <ul>
                                                <li>7:30 PM - 8:00 PM</li>
                                                <li>8:15 PM - 8:45 PM</li>
                                                <li>9:00 PM - 9:30 PM</li>
                                            </ul>
                                        </li>
                                        <li>Each performance slot is 5-15 minutes</li>
                                        <li>We provide:
                                            <ul>
                                                <li>Professional sound system</li>
                                                <li>Basic lighting</li>
                                                <li>Microphones</li>
                                                <li>Small stage area</li>
                                            </ul>
                                        </li>
                                        <li>Performers should:
                                            <ul>
                                                <li>Arrive 30 minutes before their slot</li>
                                                <li>Bring their own instruments/props</li>
                                                <li>Submit music files 48 hours in advance</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Sound check and rehearsal times will be scheduled the day before the event.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    );
};

export default NightMarket; 