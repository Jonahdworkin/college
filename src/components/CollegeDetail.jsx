import { predictDate } from '../utils/predict';

const TYPE_COLORS = {
  ed: { bg: '#e8f4fd', border: '#2196f3', accent: '#1565c0', badge: '#bbdefb' },
  ea: { bg: '#f3e5f5', border: '#9c27b0', accent: '#6a1b9a', badge: '#e1bee7' },
  rd: { bg: '#e8f5e9', border: '#4caf50', accent: '#2e7d32', badge: '#c8e6c9' },
};

const LABEL_SHORT = { ed: 'ED', ea: 'EA / REA', rd: 'RD' };

export default function CollegeDetail({ college, onBack }) {
  const decisionEntries = Object.entries(college.decisions);
  const rateColor =
    college.admissionRate <= 10 ? '#c62828' :
    college.admissionRate <= 20 ? '#e65100' :
    college.admissionRate <= 40 ? '#f57f17' : '#2e7d32';

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>← Back to Search</button>

      <div className="detail-header">
        <h1>{college.name}</h1>
        <div className="detail-meta">
          <span className="meta-location">📍 {college.location}</span>
          <span className="meta-type">{college.type}</span>
        </div>
        <div className="admission-hero" style={{ borderColor: rateColor }}>
          <div className="admission-rate-num" style={{ color: rateColor }}>
            {college.admissionRate}%
          </div>
          <div className="admission-rate-label">Admission Rate</div>
        </div>
      </div>

      <h2 className="decisions-heading">Decision Release Dates</h2>

      <div className="decisions-grid">
        {decisionEntries.map(([key, decision]) => {
          const colors = TYPE_COLORS[key] || TYPE_COLORS.rd;
          const predicted = predictDate(decision.history, decision.predictedYear);
          return (
            <div
              key={key}
              className="decision-card"
              style={{ background: colors.bg, borderColor: colors.border }}
            >
              <div className="decision-card-header" style={{ background: colors.border }}>
                <span className="decision-badge">{LABEL_SHORT[key]}</span>
                <span className="decision-label">{decision.label}</span>
              </div>
              <div className="decision-deadline">
                Application Deadline: <strong>{decision.deadline}</strong>
              </div>
              <table className="dates-table">
                <thead>
                  <tr>
                    <th>Year</th>
                    <th>Release Date</th>
                  </tr>
                </thead>
                <tbody>
                  {decision.history.map((h) => (
                    <tr key={h.year}>
                      <td>{h.year}–{String(h.year + 1).slice(-2)}</td>
                      <td>{new Date(h.year, h.month - 1, h.day).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                    </tr>
                  ))}
                  <tr className="predicted-row" style={{ background: colors.badge, color: colors.accent }}>
                    <td><strong>📅 Predicted {decision.predictedYear}</strong></td>
                    <td><strong>{predicted}</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}
