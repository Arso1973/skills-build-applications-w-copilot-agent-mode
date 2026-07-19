import './App.css'

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h1 className="display-6 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted">
                A modern multi-tier fitness experience with activity tracking, team competition, and personalized coaching.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <span className="badge bg-primary">React 19</span>
                <span className="badge bg-success">Express + TypeScript</span>
                <span className="badge bg-info text-dark">MongoDB + Mongoose</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
