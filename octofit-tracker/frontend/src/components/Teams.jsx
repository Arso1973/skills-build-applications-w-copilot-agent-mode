import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTeams = async () => {
      try {
        const response = await fetch(getApiUrl('teams'));
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.teams ?? data.results ?? [];
        setTeams(items);
      } catch (err) {
        setError(err.message || 'Unable to load teams');
      } finally {
        setLoading(false);
      }
    };

    loadTeams();
  }, []);

  return (
    <section>
      <h2 className="h4 fw-semibold mb-3">Teams</h2>
      {loading && <p>Loading teams…</p>}
      {error && <p className="text-danger">{error}</p>}
      {!loading && !error && (
        <div className="row g-3">
          {teams.map((team) => (
            <div className="col-md-6" key={team._id || team.name}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="h6 fw-bold">{team.name}</h3>
                  <p className="mb-1 text-muted">{team.sport}</p>
                  <p className="mb-0">Members: {team.members?.join(', ')}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
