import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EventProvider, useEvents } from './context/EventContext';
import Navbar from './components/Navbar';
import Toast from './components/Toast';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import RSVPConfirmation from './pages/RSVPConfirmation';
import CreateEvent from './pages/CreateEvent';

function AppContent() {
  const { toast, hideToast } = useEvents();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/rsvp-confirmation/:id" element={<RSVPConfirmation />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={hideToast}
          />
        )}
      </div>
    </Router>
  );
}

function App() {
  return (
    <EventProvider>
      <AppContent />
    </EventProvider>
  );
}

export default App;
