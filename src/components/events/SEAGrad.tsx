import { Typography } from '@mui/material';
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
                SEAGrad celebrated the achievements of graduating Southeast Asian students and honored the hard work and dedication of
                community members completing their journey at UC Berkeley.
                            </Typography>
                            <Typography variant="body2" sx={{ mb: 1 }}>
                This intimate celebration brings together families, friends, and community members to recognize both individual
                achievements and the collective strength of our Southeast Asian community.
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 2 }}>
                                Location: YWCA Berkeley/Oakland<br />
                                2600 Bancroft Way, Berkeley, CA 94704
                            </Typography>
        </EventCard>
    );
};

export default SEAGrad; 