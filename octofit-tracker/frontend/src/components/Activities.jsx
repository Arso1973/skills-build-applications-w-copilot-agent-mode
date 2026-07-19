import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadActivities = async () => {
      try {
        const response = await fetch(getApiUrl('activities'));
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.activities ?? data.results ?? [];
        setActivities(items);
      } catch (err) {
        setError(err.message || 'Unable to load activities');
      } finally {
        setLoading(false);
      }
    };

    loadActivities();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold mb-3">Activities</h2>
      {loading && <p>Loading activities…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {activities.map((activity) => (
            <div className="col-md-6" key={activity._id || activity.date}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 fw-bold">{activity.type}</h3>
                  <p className="mb-1">Duration: {activity.durationMinutes} min</p>
                  <p className="mb-0 text-muted">Calories: {activity.caloriesBurned}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
