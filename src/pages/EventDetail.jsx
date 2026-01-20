import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getEventById, registerForEvent, isRegistered } = useEvents();
  
  const event = getEventById(id);
  const registered = isRegistered(parseInt(id));

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-800">
            Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleRSVP = () => {
    const success = registerForEvent(event.id);
    if (success) {
      navigate(`/rsvp-confirmation/${event.id}`);
    }
  };

  const getTypeColor = (type) => {
    const colors = {
      'Fitness': 'bg-green-100 text-green-800 border-green-200',
      'Music': 'bg-purple-100 text-purple-800 border-purple-200',
      'Meetup': 'bg-blue-100 text-blue-800 border-blue-200',
      'Workshop': 'bg-orange-100 text-orange-800 border-orange-200',
      'Sports': 'bg-red-100 text-red-800 border-red-200',
      'Social': 'bg-pink-100 text-pink-800 border-pink-200',
      'Entertainment': 'bg-yellow-100 text-yellow-800 border-yellow-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-6 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Events
        </Link>

        {/* Event Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-12 text-white">
            <div className="flex items-start justify-between mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold border-2 ${getTypeColor(event.type)}`}>
                {event.type}
              </span>
              {registered && (
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-green-500 text-white">
                  ✓ Registered
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <p className="text-indigo-100 text-lg">Hosted by {event.host}</p>
          </div>

          {/* Details */}
          <div className="px-8 py-8">
            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Date</p>
                  <p className="text-gray-900 font-semibold">{formatDate(event.date)}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-gray-900 font-semibold">{event.location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Host</p>
                  <p className="text-gray-900 font-semibold">{event.host}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this event</h2>
              <p className="text-gray-700 text-lg leading-relaxed">{event.description}</p>
            </div>

            {/* What to Expect Section */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Engaging and interactive experience</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Meet like-minded people in your community</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Professional and welcoming environment</span>
                </li>
              </ul>
            </div>

            {/* RSVP Button */}
            {registered ? (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're Registered!</h3>
                <p className="text-gray-600">We look forward to seeing you at the event.</p>
              </div>
            ) : (
              <button
                onClick={handleRSVP}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xl font-bold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Register for this Event
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
