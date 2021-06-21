import React from 'react';
import axios from 'axios';

const EventsProvider = ({ children, group }) => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    axios.get(`/events/${group}`).then(({ data }) => setEvents(data.events));
  }, [group]);

  return children(events);
};

export default EventsProvider;
