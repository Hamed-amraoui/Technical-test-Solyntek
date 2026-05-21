import { Link } from 'react-router-dom';
import './Welcome.css';

const features = [
  { title: 'Team Visibility', description: 'Track user and activity data from a single place.' },
  { title: 'Fast Onboarding', description: 'Create accounts and start collaborating in minutes.' },
  { title: 'Simple Operations', description: 'Manage your workspace with clear and focused workflows.' },
];

const Welcome = () => {
  return (
    <main className="welcome-page">
      <section className="welcome-hero container">
        <div className="welcome-hero__badge">Solyntek CRM</div>
        <h1 className="welcome-hero__title">Welcome to your smarter workspace</h1>
        <p className="welcome-hero__subtitle">
          Centralize your customer operations, organize your team, and move faster with a clean and focused dashboard.
        </p>
        <div className="welcome-hero__actions">
          <Link to="/login" className="btn btn-primary btn-lg px-4 py-2 rounded-pill">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-light btn-lg px-4 py-2 rounded-pill">
            Create Account
          </Link>
        </div>
      </section>

      <section className="welcome-highlights container">
        <div className="row g-4">
          {features.map((feature) => (
            <div className="col-12 col-md-4" key={feature.title}>
              <article className="welcome-card">
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </article>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Welcome;
