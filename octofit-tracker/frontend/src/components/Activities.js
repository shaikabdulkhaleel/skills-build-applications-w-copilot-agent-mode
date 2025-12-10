import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul className="list-group">
        {activities.map((activity, idx) => (
          <li key={activity.id || idx} className="list-group-item">
            {activity.type} - {activity.duration} min - {activity.calories} cal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
