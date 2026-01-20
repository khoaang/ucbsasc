import { Button, Stack, Typography } from '@mui/material';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EventCard from './EventCard';

const BondingEventPreview = () => {
    return (
        <EventCard
            statusLabel="UPCOMING"
            statusBgColor="secondary.main"
            borderColor="secondary.light"
            image={{ src: '/seasgivinggroup.jpg', alt: 'SASC Community Bonding' }}
        >
            <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                SASCommunity Bonding Night
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
                Late February • Location TBA
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                We’re cooking up a cozy evening of games, storytelling, and cross-branch connection to recharge before midterms hit. Officers and
                members can expect chill vibes, light bites, and space to dream up collaborations for the rest of the semester.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                The full schedule, RSVP link, and accessibility notes will be released soon. Let us know if you have activity ideas or dietary
                needs we should factor in.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Button
                    variant="contained"
                    color="secondary"
                    disabled
                    startIcon={<Diversity3Icon />}
                >
                    Details Coming Soon
                </Button>
                <Button variant="outlined" color="secondary" href="mailto:ucb.sasc@gmail.com?subject=Bonding%20Night%20Ideas">
                    Share an Idea
                </Button>
            </Stack>
        </EventCard>
    );
};

export default BondingEventPreview;
