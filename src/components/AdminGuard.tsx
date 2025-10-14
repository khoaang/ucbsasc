import { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';

interface AdminGuardProps {
  children: React.ReactNode;
}

const STORAGE_KEY = 'admin_authed_v1';

const AdminGuard = ({ children }: AdminGuardProps) => {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === '1') setAuthed(true);
    } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_PASS?.toString() || '';
    if (expected && input === expected) {
      try { localStorage.setItem(STORAGE_KEY, '1'); } catch {}
      setAuthed(true);
    } else {
      setError('Invalid passcode.');
    }
  };

  if (authed) return <>{children}</>;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', p: 2 }}>
      <Card sx={{ maxWidth: 420, width: '100%' }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Admin Access
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Enter the admin passcode to continue.
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Passcode"
              type="password"
              fullWidth
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(''); }}
              error={!!error}
              helperText={error || ' '}
            />
            <Button variant="contained" type="submit" fullWidth>
              Continue
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminGuard;




