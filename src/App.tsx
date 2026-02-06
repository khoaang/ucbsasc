import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import HeadshotCheckin from './pages/HeadshotCheckin';
import AdminGuard from './components/AdminGuard';

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
              <Route
                path="/checkin"
                element={
                  <AdminGuard>
                    <HeadshotCheckin />
                  </AdminGuard>
                }
              />
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
