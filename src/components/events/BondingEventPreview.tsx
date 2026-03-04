import { Button, Stack, Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EventCard from './EventCard';

const BondingEventPreview = () => {
    return (
        <EventCard
            statusLabel="PAST EVENT"
            statusBgColor="text.disabled"
            borderColor="divider"
            image={{ src: '/seasgivinggroup.jpg', alt: 'SASC Community Bonding' }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                SASCommunity Bonding Night
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                February 21, 2026 • Location TBA
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                We cooked up a cozy evening of games, storytelling, and cross-branch connection to recharge before midterms hit. Officers and
                members expected chill vibes, light bites, and space to dream up collaborations for the rest of the semester.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The full schedule, RSVP link, and accessibility notes were released soon. Let us know if you have activity ideas or dietary
                needs we should factor in.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Button
                    variant="outlined"
                    disabled
                    startIcon={<Diversity3Icon />}
                >
                    Event Ended
                </Button>
            </Stack>
        </EventCard>
    );
};

export default BondingEventPreview;
