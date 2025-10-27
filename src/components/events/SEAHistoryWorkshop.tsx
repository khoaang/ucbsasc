import { Card, CardContent, Typography, Button, Box, Chip, Grid, Stack, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { signInAnonymously } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { addEventRsvp } from '../../firebase/rsvps';

const SEAHistoryWorkshop = () => {
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
    <Card
      sx={{
        border: '2px solid',
        borderColor: 'primary.main',
        borderRadius: 2,
        boxShadow: 3,
        overflow: 'hidden',
        opacity: 1
      }}
    >
      <Grid container alignItems="stretch">
        <Grid item xs={12} md={5} sx={{ lineHeight: 0, display: 'flex' }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              minHeight: 300,
              overflow: 'hidden',
              aspectRatio: '4/3'
            }}
          >
            <Box
              component="img"
              src="/historical6.jpg"
              alt="SEA History Workshop"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Chip
                label="UPCOMING"
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '0.7rem'
                }}
              />
            </Box>

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
              Join SASC for our general meeting featuring a fun, interactive deep-dive presentation by our Media team on Southeast Asian American history, refugee timeline, and resources to succeed in higher education. This is a great opportunity to learn about our community's rich history and connect with fellow students.
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
            </Stack>

            <Typography variant="body2" fontWeight="bold" sx={{ mb: 1 }}>
              RSVP:
            </Typography>

            {!isFirebaseConfigured && (
              <Alert severity="warning" sx={{ mt: 1.5 }}>
                RSVP temporarily unavailable. Site configuration is incomplete.
              </Alert>
            )}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item xs={12} sm={5} md={4}>
                  <TextField
                    label="Name"
                    size="small"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5} md={4}>
                  <TextField
                    label="Email"
                    type="email"
                    size="small"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      '& .MuiInputBase-input': { py: 0.5, fontSize: '0.9rem' },
                      '& .MuiInputLabel-root': { fontSize: '0.875rem' }
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                  <Button type="submit" variant="contained" color="primary" fullWidth disabled={submitting || !isFirebaseConfigured} sx={{ py: 0.5 }}>
                    {submitting ? 'Submitting…' : 'RSVP'}
                  </Button>
                </Grid>
              </Grid>
            </Box>

            {(success || error) && (
              <Box sx={{ mt: 1.5 }}>
                {success && <Alert severity="success">{success}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
              </Box>
            )}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SEAHistoryWorkshop;

