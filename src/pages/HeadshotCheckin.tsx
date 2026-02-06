import { useState, useEffect } from 'react';
import { 
  Box, Container, Typography, TextField, Button, Card, CardContent, 
  Grid, Chip, Dialog, IconButton, Stack, CircularProgress, Alert
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { getEventRsvps, addEventRsvp, checkInRsvp, EventRsvp } from '../firebase/rsvps';
import { auth } from '../firebase/config';
import { signInAnonymously } from 'firebase/auth';

const EVENT_KEY = 'professional-headshots-2026-02-06';

const HeadshotCheckin = () => {
  const [rsvps, setRsvps] = useState<EventRsvp[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  // Slate Modal State
  const [slateOpen, setSlateOpen] = useState(false);
  const [currentSubject, setCurrentSubject] = useState<EventRsvp | null>(null);

  // Walk-in State
  const [walkInOpen, setWalkInOpen] = useState(false);
  const [walkInName, setWalkInName] = useState('');
  const [walkInEmail, setWalkInEmail] = useState('');
  const [submittingWalkIn, setSubmittingWalkIn] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!auth.currentUser) {
        await signInAnonymously(auth);
      }
      const data = await getEventRsvps(EVENT_KEY);
      // Sort: Checked in first (desc seq number), then by name
      data.sort((a, b) => {
        if (a.checkedIn && !b.checkedIn) return -1;
        if (!a.checkedIn && b.checkedIn) return 1;
        if (a.checkedIn && b.checkedIn) return (b.sequenceNumber || 0) - (a.sequenceNumber || 0);
        return a.name.localeCompare(b.name);
      });
      setRsvps(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load RSVPs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckIn = async (rsvp: EventRsvp) => {
    if (rsvp.checkedIn) {
      setCurrentSubject(rsvp);
      setSlateOpen(true);
      return;
    }

    try {
      // Calculate next sequence number
      const maxSeq = rsvps.reduce((max, r) => Math.max(max, r.sequenceNumber || 0), 0);
      const nextSeq = maxSeq + 1;

      await checkInRsvp(rsvp.id!, nextSeq);
      
      // Optimistic update
      const updatedRsvp = { ...rsvp, checkedIn: true, sequenceNumber: nextSeq };
      setRsvps(prev => prev.map(r => r.id === rsvp.id ? updatedRsvp : r));
      
      setCurrentSubject(updatedRsvp);
      setSlateOpen(true);
    } catch (err) {
      console.error(err);
      alert('Failed to check in. See console.');
    }
  };

  const handleWalkInSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!walkInName.trim() || !walkInEmail.trim()) return;

    setSubmittingWalkIn(true);
    try {
      const newRsvp = await addEventRsvp(EVENT_KEY, walkInName, walkInEmail);
      // Immediately check them in
      const maxSeq = rsvps.reduce((max, r) => Math.max(max, r.sequenceNumber || 0), 0);
      const nextSeq = maxSeq + 1;
      await checkInRsvp(newRsvp.id!, nextSeq);
      
      const fullRsvp = { ...newRsvp, checkedIn: true, sequenceNumber: nextSeq };
      
      setRsvps(prev => [fullRsvp, ...prev]);
      setCurrentSubject(fullRsvp);
      setSlateOpen(true);
      setWalkInOpen(false);
      setWalkInName('');
      setWalkInEmail('');
    } catch (err) {
      console.error(err);
      alert('Failed to add walk-in.');
    } finally {
      setSubmittingWalkIn(false);
    }
  };

  const filteredRsvps = rsvps.filter(r => 
    r.name.toLowerCase().includes(filter.toLowerCase()) || 
    r.email.toLowerCase().includes(filter.toLowerCase())
  );

  const checkedInCount = rsvps.filter(r => r.checkedIn).length;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={4}>
        <Box>
          <Typography variant="h4" component="h1" fontWeight="bold">
            Headshot Check-in
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Total Checked In: <strong>{checkedInCount}</strong>
          </Typography>
        </Box>
        <Stack direction="row" spacing={1}>
          <IconButton onClick={fetchData} disabled={loading}>
            <RefreshIcon />
          </IconButton>
          <Button 
            variant="contained" 
            startIcon={<PersonAddIcon />}
            onClick={() => setWalkInOpen(true)}
          >
            Walk-in
          </Button>
        </Stack>
      </Stack>

      <TextField 
        fullWidth 
        placeholder="Search by name or email..." 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{ mb: 3 }}
      />

      {loading ? (
        <Box display="flex" justifyContent="center" py={8}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error}</Alert>
      ) : (
        <Grid container spacing={2}>
          {filteredRsvps.map((rsvp) => (
            <Grid item xs={12} key={rsvp.id}>
              <Card variant="outlined" sx={{ 
                borderColor: rsvp.checkedIn ? 'success.main' : 'divider',
                bgcolor: rsvp.checkedIn ? 'success.light' : 'background.paper',
                transition: 'all 0.2s'
              }}>
                <CardContent sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  py: 2, '&:last-child': { pb: 2 }
                }}>
                  <Box>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                      {rsvp.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {rsvp.email}
                    </Typography>
                    {rsvp.checkedIn && (
                      <Chip 
                        label={`#${rsvp.sequenceNumber?.toString().padStart(3, '0')}`} 
                        size="small" 
                        color="success" 
                        sx={{ mt: 1, fontWeight: 'bold' }} 
                      />
                    )}
                  </Box>
                  <Button
                    variant={rsvp.checkedIn ? "outlined" : "contained"}
                    color={rsvp.checkedIn ? "success" : "primary"}
                    onClick={() => handleCheckIn(rsvp)}
                    startIcon={rsvp.checkedIn ? <CheckCircleIcon /> : <CameraAltIcon />}
                  >
                    {rsvp.checkedIn ? 'View Slate' : 'Check In'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {filteredRsvps.length === 0 && (
            <Box width="100%" textAlign="center" py={4}>
              <Typography color="text.secondary">No RSVPs found.</Typography>
            </Box>
          )}
        </Grid>
      )}

      {/* Walk-in Dialog */}
      <Dialog open={walkInOpen} onClose={() => setWalkInOpen(false)} maxWidth="xs" fullWidth>
        <Box component="form" onSubmit={handleWalkInSubmit} p={3}>
          <Typography variant="h6" mb={2}>Add Walk-in</Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            value={walkInName}
            onChange={(e) => setWalkInName(e.target.value)}
            autoFocus
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={walkInEmail}
            onChange={(e) => setWalkInEmail(e.target.value)}
          />
          <Button 
            type="submit" 
            variant="contained" 
            fullWidth 
            size="large" 
            sx={{ mt: 3 }}
            disabled={submittingWalkIn}
          >
            Check In Now
          </Button>
        </Box>
      </Dialog>

      {/* SLATE Modal - Full Screen for Photo */}
      <Dialog 
        open={slateOpen} 
        onClose={() => setSlateOpen(false)} 
        fullScreen
      >
        <Box 
          sx={{ 
            height: '100vh', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            bgcolor: 'black',
            color: 'white',
            textAlign: 'center',
            p: 4
          }}
          onClick={() => setSlateOpen(false)}
        >
          <IconButton 
            sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}
            onClick={() => setSlateOpen(false)}
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          
          <Typography variant="h1" sx={{ fontSize: '12rem', fontWeight: 'bold', lineHeight: 1, mb: 4 }}>
            #{currentSubject?.sequenceNumber?.toString().padStart(3, '0')}
          </Typography>
          
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            {currentSubject?.name}
          </Typography>
          
          <Typography variant="h4" sx={{ opacity: 0.8 }}>
            {currentSubject?.email}
          </Typography>

          {currentSubject?.id && (
            <Box sx={{ mt: 4, bgcolor: 'white', p: 2, borderRadius: 2 }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentSubject.id)}`}
                alt="ID QR Code"
                style={{ display: 'block' }}
              />
            </Box>
          )}
          <Typography variant="caption" sx={{ mt: 1, opacity: 0.5, fontFamily: 'monospace' }}>
            ID: {currentSubject?.id}
          </Typography>

          <Typography variant="body1" sx={{ position: 'absolute', bottom: 32, opacity: 0.5 }}>
            Tap anywhere to close
          </Typography>
        </Box>
      </Dialog>
    </Container>
  );
};

export default HeadshotCheckin;
