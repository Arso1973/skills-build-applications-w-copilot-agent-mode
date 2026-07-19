import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadLeaderboard = async () => {
      try {
        const response = await fetch(getApiUrl('leaderboard'));
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.leaderboard ?? data.results ?? [];
        setEntries(items);
      } catch (err) {
        setError(err.message || 'Unable to load leaderboard');
      } finally {
        setLoading(false);
      }
    };

    loadLeaderboard();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold mb-3">Leaderboard</h2>
      {loading && <p>Loading leaderboard…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="list-group">
          {entries.map((entry) => (
            <div className="list-group-item d-flex justify-content-between align-items-center" key={entry._id || entry.userId}>
              <span>{entry.name}</span>
              <span className="badge bg-primary rounded-pill">{entry.score}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
