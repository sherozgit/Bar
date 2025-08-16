import React from 'react';
import { Link } from 'react-router-dom';
import cocktails from '../../data/cocktails/cocktailData';  // Import your data file
import './Home.css';

const Home = () => {
  // Filter cocktails by category
  const classicCocktails = cocktails.filter(c => c.category === 'Classic Cocktails').slice(0, 4);
  const signatureCocktails = cocktails.filter(c => c.category === 'Signature Cocktails').slice(0, 4);

  return (
    <div className="landing-container">

      {/* Classic Cocktails Section */}
      <section className="section-header">
        <h2>
          <Link to="/slideshows/classic-cocktails" className="section-link">Classic Cocktails</Link>
        </h2>
        <div className="card-grid">
          {classicCocktails.map(cocktail => (
            <Link
              key={cocktail.id}
              to={`/classic-cocktails/${cocktail.id}`}
              className="card-link"
            >
              <img 
                src={`/images/${cocktail.image}`} 
                alt={cocktail.name} 
                className="card-img" 
              />
              <span className="card-subtitle">{cocktail.subcategory}</span>
              <span className="card-title">{cocktail.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Signature Cocktails Section */}
      <section className="section-header">
        <h2>
          <Link to="/signature" className="section-link">Signature Cocktails</Link>
        </h2>
        <div className="card-grid">
          {signatureCocktails.map(cocktail => (
            <Link
              key={cocktail.id}
              to={`/signature/${cocktail.id}`}
              className="card-link"
            >
              <img 
                src={`/images/${cocktail.image}`} 
                alt={cocktail.name} 
                className="card-img" 
              />
              <span className="card-subtitle">{cocktail.subcategory}</span>
              <span className="card-title">{cocktail.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <h3>Signature Creations</h3>
          <p>Exclusive and creative recipes crafted by top mixologists.</p>
          <Link to="/signature" className="btn-link">Discover Signatures</Link>
        </div>
        <div className="feature">
          <h3>Bar School</h3>
          <p>Learn bartending basics, tools, and techniques.</p>
          <Link to="/bar-school" className="btn-link">Start Learning</Link>
        </div>
        <div className="feature">
          <h3>Community Favorites</h3>
          <p>Explore trending and top-rated drinks by our users.</p>
          <Link to="/community" className="btn-link">View Favorites</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to shake things up?</h2>
        <p>Whether you're a beginner or a seasoned mixologist, Exclusive.Bar has something for you.</p>
        <Link to="/get-started" className="btn-secondary">Get Started</Link>
      </section>

    </div>
  );
};

export default Home;
