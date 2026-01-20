import { Link, useLocation } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

const Navbar = () => {
  const location = useLocation();
  const { registeredEvents, favoriteEvents } = useEvents();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-white text-xl font-bold">Local Events</span>
          </Link>

          <div className="flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              Explore Events
            </Link>
            <Link
              to="/create"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/create') 
                  ? 'bg-indigo-700 text-white' 
                  : 'text-indigo-100 hover:bg-indigo-500 hover:text-white'
              }`}
            >
              Create Event
            </Link>
            <div className="flex items-center space-x-2 ml-2">
              <div className="px-4 py-2 bg-indigo-700 rounded-md">
                <span className="text-white text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  {registeredEvents.length}
                </span>
              </div>
              <div className="px-4 py-2 bg-red-500 rounded-md">
                <span className="text-white text-sm font-medium flex items-center">
                  <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  {favoriteEvents.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
