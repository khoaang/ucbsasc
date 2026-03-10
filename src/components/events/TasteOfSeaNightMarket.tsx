import { Button, Stack, Typography, Box } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const TasteOfSeaNightMarket = () => {
    return (
        <EventCard
            statusLabel="UPCOMING"
            statusBgColor="primary.main"
            borderColor="primary.light"
            image={{ src: '/nightmarket-14.jpg', alt: 'Taste of Sea Night Market' }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                Taste of Sea Night Market
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                April 6, 2026 • 7:00 PM - 10:00 PM
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Join us for our annual Taste of Sea Night Market! Experience a vibrant evening filled with Southeast Asian culture,
                delicious food, and amazing performances.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Location: Upper Sproul Plaza
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                We specifically invite all Southeast Asian RSOs to join us as vendors to sell food/merch or as performers to showcase their talent. Sign up below!
            </Typography>
            
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} flexWrap="wrap" useFlexGap>
                <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://forms.gle/MC9eXS3sjcNjuC956"
                    target="_blank"
                    startIcon={<StorefrontIcon />}
                >
                    Vendor Sign-up
                </Button>
                <Button 
                    variant="outlined" 
                    color="primary" 
                    href="https://forms.gle/2czvbL7TZwjk2Mmp8"
                    target="_blank"
                    startIcon={<TheaterComedyIcon />}
                >
                    Performer Sign-up
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Taste+of+SEA+Night+Market&dates=20260407T020000Z/20260407T050000Z&details=Join+us+for+an+evening+of+Southeast+Asian+culture,+cuisine,+and+performances!&location=Upper+Sproul+Plaza,+Berkeley,+CA"
                    target="_blank"
                    startIcon={<CalendarMonthIcon />}
                >
                    Add to Calendar
                </Button>
            </Stack>
        </EventCard>
    );
};

export default TasteOfSeaNightMarket;
