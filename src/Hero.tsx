import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left Column: Headline & Action Buttons */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span> INDIE GAME STUDIO
          </div>

          <h1 className="hero-title">
            CRAFTING UNFORGETTABLE <span className="accent">GAME</span> WORLDS
          </h1>

          <p className="hero-subtitle">
            Developing 2D and 2.5D Action-Platformers, RPGs, and strategy games with retro heart and modern tech.
          </p>

          <div className="hero-actions">
            <a href="#games" className="btn btn-primary">
              EXPLORE GAMES
            </a>
            <a href="#tech" className="btn btn-secondary">
              OUR TECH STACK
            </a>
          </div>
        </div>

        {/* Right Column: Arcade Cabinet Frame */}
        <div className="hero-visual">
          <div className="arcade-card">
            <div className="arcade-header">
              <span className="status">60 FPS</span>
              <span className="status-tag">STATUS: PROTOTYPING</span>
            </div>

            <div className="arcade-screen">
              <div className="screen-content">
                <span className="game-badge">LATEST TITLE</span>
                <h3 className="game-title">SALVAGE SCRAPPER</h3>
                <p className="game-desc">2D PIXEL-ART Top-Down Action & Survival</p>
                <div className="press-start">[ PRESS START ]</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;