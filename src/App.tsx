import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import theme from './theme/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import MemberManagement from './pages/MemberManagement';
import Lead from './pages/Lead';
import QRGenerator from './pages/QRGenerator';
import StudentSlate from './pages/StudentSlate';
import AdminGuard from './components/AdminGuard';

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.href = to;
  }, [to]);
  return null;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/lead" element={<Lead />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/qr" element={<QRGenerator />} />
              <Route path="/checkin" element={<StudentSlate />} />
              <Route path="/seagrad26" element={<ExternalRedirect to="https://docs.google.com/forms/d/e/1FAIpQLScMxGo6OMtJMKGTfqbgGF9nXf2qUy0lWN0sM-O6CP8v-okGbg/viewform" />} />
              <Route path="/tos-vendor" element={<ExternalRedirect to="https://forms.gle/MC9eXS3sjcNjuC956" />} />
              <Route path="/tos-performer" element={<ExternalRedirect to="https://forms.gle/2czvbL7TZwjk2Mmp8" />} />
              <Route
                path="/admin/members"
                element={
                  <AdminGuard>
                    <MemberManagement />
                  </AdminGuard>
                }
              />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
