import { Button, Stack, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventCard from './EventCard';

const SEAGrad = () => {
    return (
        <EventCard
            statusLabel="PAST EVENT"
            statusBgColor="text.disabled"
            borderColor="divider"
            cardSx={{ opacity: 0.9 }}
            image={{ src: '/seagrad-2024.png', alt: 'Southeast Asian Graduation 2024' }}
        >
            <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                Southeast Asian Graduation (SEAGrad)
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                May 3, 2025 • 5:00 PM - 8:00 PM PDT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                Join us in celebrating the achievements of our graduating Southeast Asian students! SEAGrad is a special ceremony that
                honors the hard work and dedication of our community members as they complete their journey at UC Berkeley.
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
                This intimate celebration brings together families, friends, and community members to recognize both individual
                achievements and the collective strength of our Southeast Asian community.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Location: YWCA Berkeley/Oakland<br />
                2600 Bancroft Way, Berkeley, CA 94704
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                justifyContent="flex-start"
                sx={{ mb: 2 }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    href="https://tinyurl.com/seagradrsvp"
                    target="_blank"
                    size="small"
                >
                    RSVP
                </Button>
                <Button
                    variant="outlined"
                    color="primary"
                    href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Southeast+Asian+Graduation+(SEAGrad)&dates=20240503T000000Z/20240503T030000Z&details=Join+us+in+celebrating+the+achievements+of+our+graduating+Southeast+Asian+students!&location=YWCA+Berkeley/Oakland,+2600+Bancroft+Way,+Berkeley,+CA+94704"
                    target="_blank"
                    size="small"
                    startIcon={<CalendarMonthIcon />}
                >
                    Add to Calendar
                </Button>
            </Stack>
        </EventCard>
    );
};

export default SEAGrad; 