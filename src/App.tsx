import { ThemeProvider, Box, CssBaseline, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import AdminGuard from './components/AdminGuard';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Events = lazy(() => import('./pages/Events'));
const Contact = lazy(() => import('./pages/Contact'));
const Resources = lazy(() => import('./pages/Resources'));
const Lead = lazy(() => import('./pages/Lead'));
const QRGenerator = lazy(() => import('./pages/QRGenerator'));
const StudentSlate = lazy(() => import('./pages/StudentSlate'));
const MemberManagement = lazy(() => import('./pages/MemberManagement'));

function PageFallback() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '40vh',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Loading…
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/lead" element={<Lead />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/qr" element={<QRGenerator />} />
                <Route path="/checkin" element={<StudentSlate />} />
                <Route path="/seagrad26" element={<Navigate to="/events" replace />} />
                <Route path="/seagrad2026" element={<Navigate to="/events" replace />} />
                <Route path="/tos-vendor" element={<Navigate to="/events" replace />} />
                <Route path="/tos-performer" element={<Navigate to="/events" replace />} />
                <Route
                  path="/admin/members"
                  element={
                    <AdminGuard>
                      <MemberManagement />
                    </AdminGuard>
                  }
                />
              </Routes>
            </Suspense>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
