import { useState } from 'react';
import { colleges } from './data/colleges';
import CollegeDetail from './components/CollegeDetail';
import './App.css';

const TYPE_BADGE_COLOR = {
  'Private Research University': '#e3f2fd',
  'Public Research University': '#e8f5e9',
  'Liberal Arts College': '#fce4ec',
  'Public Liberal Arts University': '#f3e5f5',
  'Private University': '#fff8e1',
};

export default function App() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <CollegeDetail college={selected} onBack={() => setSelected(null)} />;
  }

  const filtered = colleges.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app">
      <header className="site-header">
        <h1 className="site-title">🎓 College Decision Tracker</h1>
        <p className="site-subtitle">
          Search any college to see its admission rate and predicted decision release dates
        </p>
      </header>

      <main className="main-content">
        <div className="search-bar-wrap">
          <input
            className="search-bar"
            type="text"
            placeholder="Search colleges…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
        </div>

        <p className="result-count">
          {filtered.length === colleges.length
            ? `${colleges.length} colleges in database`
            : `${filtered.length} of ${colleges.length} colleges`}
        </p>

        <div className="card-grid">
          {filtered.map((c) => (
            <button
              key={c.id}
              className="college-card"
              onClick={() => setSelected(c)}
            >
              <div className="card-name">{c.name}</div>
              <div className="card-location">📍 {c.location}</div>
              <div className="card-footer">
                <span
                  className="card-type-badge"
                  style={{ background: TYPE_BADGE_COLOR[c.type] || '#f5f5f5' }}
                >
                  {c.type}
                </span>
                <span
                  className="card-rate"
                  style={{
                    color: c.admissionRate <= 10 ? '#c62828' :
                           c.admissionRate <= 20 ? '#e65100' :
                           c.admissionRate <= 40 ? '#f57f17' : '#2e7d32',
                  }}
                >
                  {c.admissionRate}% admit
                </span>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-results">No colleges match "{query}"</p>
        )}
      </main>
    </div>
  );
}
