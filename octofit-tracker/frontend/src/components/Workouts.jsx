import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const response = await fetch(getApiUrl('workouts'));
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.workouts ?? data.results ?? [];
        setWorkouts(items);
      } catch (err) {
        setError(err.message || 'Unable to load workouts');
      } finally {
        setLoading(false);
      }
    };

    loadWorkouts();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold mb-3">Workouts</h2>
      {loading && <p>Loading workouts…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {workouts.map((workout) => (
            <div className="col-md-6" key={workout._id || workout.title}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 fw-bold">{workout.title}</h3>
                  <p className="mb-1">{workout.focus}</p>
                  <p className="mb-0 text-muted">{workout.difficulty} • {workout.durationMinutes} min</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
