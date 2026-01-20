import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

const EventCard = ({ event }) => {
  const { isRegistered, toggleFavorite, isFavorite } = useEvents();
  const registered = isRegistered(event.id);
  const favorite = isFavorite(event.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    toggleFavorite(event.id);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getTypeColor = (type) => {
    const colors = {
      'Fitness': 'bg-green-100 text-green-800',
      'Music': 'bg-purple-100 text-purple-800',
      'Meetup': 'bg-blue-100 text-blue-800',
      'Workshop': 'bg-orange-100 text-orange-800',
      'Sports': 'bg-red-100 text-red-800',
      'Social': 'bg-pink-100 text-pink-800',
      'Entertainment': 'bg-yellow-100 text-yellow-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  const getGradient = (type) => {
    const gradients = {
      'Fitness': 'from-green-400 to-emerald-500',
      'Music': 'from-purple-400 to-pink-500',
      'Meetup': 'from-blue-400 to-cyan-500',
      'Workshop': 'from-orange-400 to-amber-500',
      'Sports': 'from-red-400 to-rose-500',
      'Social': 'from-pink-400 to-fuchsia-500',
      'Entertainment': 'from-yellow-400 to-orange-500'
    };
    return gradients[type] || 'from-gray-400 to-gray-500';
  };

  const getIcon = (type) => {
    const icons = {
      'Fitness': '🧘',
      'Music': '🎵',
      'Meetup': '🤝',
      'Workshop': '📚',
      'Sports': '⚽',
      'Social': '👥',
      'Entertainment': '🎭'
    };
    return icons[type] || '📅';
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 animate-fade-in">
      {/* Event Image Placeholder */}
      <div className={`h-48 bg-gradient-to-br ${getGradient(event.type)} relative`}>
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
          <div className="text-white text-6xl opacity-30">
            {getIcon(event.type)}
          </div>
        </div>
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        >
          {favorite ? (
            <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          )}
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(event.type)}`}>
            {event.type}
          </span>
          {registered && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-500 text-white">
              Registered
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(event.date)}
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {event.location}
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            {event.host}
          </div>
        </div>
        
        <Link 
          to={`/event/${event.id}`}
          className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 rounded-md font-semibold transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
