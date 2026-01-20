import { Typography } from '@mui/material';
import EventCard from './EventCard';

const AnniversaryRecap = () => {
    return (
        <EventCard
            statusLabel="PAST EVENT"
            statusBgColor="text.disabled"
            borderColor="divider"
            cardSx={{ opacity: 0.95 }}
            image={{ src: '/seasgivinggroup.jpg', alt: '25th Anniversary & SEAsgiving' }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                25th Anniversary & SEAsgiving Celebration
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                November 12, 2025 • Clark Kerr Garden Room
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Gather with SASC alumni and current members for a night of gratitude, storytelling, and celebration. We honor 25 years
                of community organizing while sharing a SEAsgiving dinner, raffle, and memories from across the coalition.
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Look forward to alumni panels, a can drive benefiting the SEA Community Center in San Francisco, and reconnecting with
                generations of SASCommunity members. Stay tuned for photo galleries and future anniversary gatherings.
            </Typography>
        </EventCard>
    );
};

export default AnniversaryRecap;
