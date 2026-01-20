import { createContext, useContext, useState, useEffect } from 'react';
import eventsData from '../data/events.json';

const EventContext = createContext();

export const useEvents = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
};

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [favoriteEvents, setFavoriteEvents] = useState([]);
  const [toast, setToast] = useState(null);
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    date: '',
    search: ''
  });

  useEffect(() => {
    setEvents(eventsData.events);
    setFilteredEvents(eventsData.events);
  }, []);

  useEffect(() => {
    filterEvents();
  }, [filters, events]);

  const filterEvents = () => {
    let filtered = [...events];

    if (filters.search) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        event.host.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(event => event.type === filters.type);
    }

    if (filters.location) {
      filtered = filtered.filter(event => event.location === filters.location);
    }

    if (filters.date) {
      filtered = filtered.filter(event => event.date === filters.date);
    }

    setFilteredEvents(filtered);
  };

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      location: '',
      date: '',
      search: ''
    });
  };

  const registerForEvent = (eventId) => {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => [...prev, eventId]);
      showToast('Successfully registered for event!', 'success');
      return true;
    }
    return false;
  };

  const addNewEvent = (newEvent) => {
    const event = {
      ...newEvent,
      id: events.length + 1
    };
    setEvents(prev => [...prev, event]);
    setFilteredEvents(prev => [...prev, event]);
    showToast('Event created successfully!', 'success');
  };

  const getEventById = (id) => {
    return events.find(event => event.id === parseInt(id));
  };

  const isRegistered = (eventId) => {
    return registeredEvents.includes(eventId);
  };

  const toggleFavorite = (eventId) => {
    setFavoriteEvents(prev => {
      if (prev.includes(eventId)) {
        showToast('Removed from favorites', 'success');
        return prev.filter(id => id !== eventId);
      } else {
        showToast('Added to favorites!', 'success');
        return [...prev, eventId];
      }
    });
  };

  const isFavorite = (eventId) => {
    return favoriteEvents.includes(eventId);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const value = {
    events,
    filteredEvents,
    filters,
    updateFilters,
    clearFilters,
    registerForEvent,
    addNewEvent,
    getEventById,
    isRegistered,
    registeredEvents,
    toggleFavorite,
    isFavorite,
    favoriteEvents,
    toast,
    showToast,
    hideToast
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};
