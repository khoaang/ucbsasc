import { Typography, Button, Box, Stack, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { addEventRsvp } from '../../firebase/rsvps';
import EventCard from './EventCard';

const SEAHistoryWorkshop = () => {
  const isPast = true;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const isFirebaseConfigured = Boolean(
    import.meta.env.VITE_FIREBASE_API_KEY &&
    import.meta.env.VITE_FIREBASE_PROJECT_ID
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      await signInAnonymously(auth);
      await addEventRsvp(
        'sea-history-workshop-2025-10-28',
        name.trim(),
        email.trim()
      );
      setSuccess('RSVP received! See you there.');
      setName('');
      setEmail('');
    } catch (err: any) {
      console.error('RSVP submit failed:', err?.code, err?.message, err);
      setError(err?.message || 'Failed to submit RSVP. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const dateLine = "Tuesday, October 28 • 7:00 PM – 8:00 PM";
  const locationLine = "VLSB 2060";

  // Google Calendar link
  const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'SEA History Workshop General Meeting'
  )}&dates=20251028T190000/20251028T200000&details=${encodeURIComponent(
    'Join SASC for our general meeting featuring a slideshow on Southeast Asian American history, refugee timeline, and resources to succeed in higher education.'
  )}&location=${encodeURIComponent('VLSB 2060, UC Berkeley')}`;

  // Google Maps link
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VLSB 2060 UC Berkeley')}`;

  return (
    <EventCard
      statusLabel={isPast ? 'PAST EVENT' : 'UPCOMING'}
      statusBgColor={isPast ? 'grey.700' : 'primary.main'}
      borderColor="primary.main"
      cardSx={{ borderRadius: 2, boxShadow: 3 }}
      mediaContainerSx={{ aspectRatio: '4 / 3' }}
      image={{ src: '/historical3.webp', alt: 'SEA History Workshop' }}
      contentSx={{ pt: { xs: 3, md: 4 } }}
    >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              SEA History Workshop General Meeting
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {dateLine}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              📍 {locationLine}
            </Typography>

            <Typography variant="body2" paragraph>
        Join SASC for our general meeting featuring a fun, interactive deep-dive presentation by our Media team on Southeast Asian
        American history, refugee timelines, and resources to succeed in higher education. Connect with fellow students while learning
        about the stories that shape our community.
            </Typography>

            <Typography variant="body2" fontWeight="bold" sx={{ mt: 2, mb: 0.5 }}>
              What to know:
            </Typography>
            <Box component="ul" sx={{ mt: 0, pl: 2.5, mb: 2 }}>
              <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                Free and open to all students
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                Learn about SEA American history and refugee experiences
              </Typography>
              <Typography component="li" variant="body2" sx={{ mb: 0.5 }}>
                Resources for academic success and community engagement
              </Typography>
              <Typography component="li" variant="body2">
                Snacks provided
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
              {isPast ? (
                <Button variant="outlined" size="small" disabled>
                  Event Ended
                </Button>
              ) : (
                <>
                  <Button
                    variant="outlined"
                    size="small"
                    href={gcalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Add to Calendar
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </Button>
                </>
              )}
            </Stack>

            {!isPast && (
              <>
                <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
                  RSVP:
                </Typography>
                {!isFirebaseConfigured && (
                  <Alert severity="warning" sx={{ mt: 1.5 }}>
                    RSVP temporarily unavailable. Site configuration is incomplete.
                  </Alert>
                )}
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Box sx={{ display: 'grid', gap: 1, gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, minmax(0, 1fr))' } }}>
                      <TextField
                        label="Name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        sx={{
                          '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                          '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                        }}
                      />
                      <TextField
                        label="Email"
                        type="email"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                          '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                          '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                        }}
                      />
              <Button type="submit" variant="contained" color="primary" disabled={submitting || !isFirebaseConfigured}>
                        {submitting ? 'Submitting…' : 'RSVP'}
                      </Button>
            </Box>
                </Box>

                {(success || error) && (
                  <Box sx={{ mt: 1.5 }}>
                    {success && <Alert severity="success">{success}</Alert>}
                    {error && <Alert severity="error">{error}</Alert>}
                  </Box>
                )}
              </>
            )}
    </EventCard>
  );
};

export default SEAHistoryWorkshop;

