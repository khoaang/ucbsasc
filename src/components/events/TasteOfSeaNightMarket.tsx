import { Button, Stack, Typography, Box, Chip } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventCard from './EventCard';

const TasteOfSeaNightMarket = () => {
    return (
        <EventCard
            statusLabel="UPCOMING"
            statusBgColor="primary.main"
            borderColor="primary.light"
            minMediaHeight={500}
            maxMediaHeight={600}
            image={{ 
                src: '/nightmarketflyer.png', 
                alt: 'Taste of Sea Night Market', 
                sx: { objectPosition: 'bottom center' } 
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                <Box>
                    <Typography variant="h3" component="h2" sx={{ mb: 2, fontWeight: 800, letterSpacing: '-0.02em' }}>
                        Taste of Sea Night Market
                    </Typography>
                    
                    <Stack direction="row" spacing={1} sx={{ mb: 3 }} flexWrap="wrap" useFlexGap>
                        <Chip 
                            icon={<AccessTimeIcon />} 
                            label="April 6, 2026 • 6:00 PM - 9:00 PM" 
                            color="primary" 
                            variant="outlined" 
                            sx={{ mb: 1 }}
                        />
                        <Chip 
                            icon={<LocationOnIcon />} 
                            label="Lower Sproul Plaza" 
                            color="primary" 
                            variant="outlined"
                            sx={{ mb: 1 }}
                        />
                    </Stack>

                    <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem', lineHeight: 1.6 }}>
                        Join us for our annual Taste of Sea Night Market! Experience a vibrant evening filled with Southeast Asian culture,
                        delicious food, and amazing performances.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                        We're bringing together the whole Southeast Asian community to showcase how diverse and proud our community is.
                    </Typography>

                    <Box sx={{ bgcolor: 'action.hover', p: 2, borderRadius: 2, mb: 3, borderLeft: 4, borderColor: 'primary.main' }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1, color: 'primary.dark' }}>
                            Call for Vendors & Performers
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1 }}>
                            We specifically invite all Southeast Asian RSOs to join us as vendors to sell food/merch or as performers to showcase their talent. 
                            You can also prepare an activity (budget reimbursed).
                        </Typography>
                        <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                            For vendors, $1 of every $1 ticket sold goes back to your RSO.
                        </Typography>
                    </Box>
                </Box>
                
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large"
                        href="https://forms.gle/MC9eXS3sjcNjuC956"
                        target="_blank"
                        startIcon={<StorefrontIcon />}
                        sx={{ flexGrow: 1 }}
                    >
                        Vendor Sign-up
                    </Button>
                    <Button 
                        variant="outlined" 
                        color="primary" 
                        size="large"
                        href="https://forms.gle/2czvbL7TZwjk2Mmp8"
                        target="_blank"
                        startIcon={<TheaterComedyIcon />}
                        sx={{ flexGrow: 1 }}
                    >
                        Performer Sign-up
                    </Button>
                    <Button
                        variant="text"
                        color="primary"
                        href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Taste%20of%20SEA%20Night%20Market&dates=20260407T010000Z/20260407T040000Z&details=Join%20us%20for%20an%20evening%20of%20Southeast%20Asian%20culture%2C%20cuisine%2C%20and%20performances!&location=Lower%20Sproul%20Plaza%2C%20UC%20Berkeley"
                        target="_blank"
                        startIcon={<CalendarMonthIcon />}
                    >
                        Add to Calendar
                    </Button>
                </Stack>
            </Box>
        </EventCard>
    );
};

export default TasteOfSeaNightMarket;
