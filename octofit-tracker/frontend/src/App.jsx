import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/users', label: 'Users' },
  { to: '/teams', label: 'Teams' },
  { to: '/activities', label: 'Activities' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/workouts', label: 'Workouts' }
];

function Home() {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-4">
        <h2 className="h4 fw-bold mb-3">OctoFit Tracker</h2>
        <p className="lead text-muted">
          A modern multi-tier fitness experience with activity tracking, team competition, and personalized coaching.
        </p>
        <div className="d-flex gap-2 flex-wrap">
          <span className="badge bg-primary">React 19</span>
          <span className="badge bg-success">Express + TypeScript</span>
          <span className="badge bg-info text-dark">MongoDB + Mongoose</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container py-4">
        <header className="mb-4">
          <h1 className="display-6 fw-bold">OctoFit Tracker</h1>
          <p className="text-muted">Connected experience across presentation, logic, and data tiers.</p>
          <nav className="nav nav-pills flex-wrap mt-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App
