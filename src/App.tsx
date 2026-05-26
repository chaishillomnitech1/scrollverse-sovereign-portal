import React, { useState, useEffect } from 'react';
import './App.css';

interface MarketData {
  gainers: number;
  losers: number;
  avgChange: number;
  mood: string;
}

interface PortalState {
  connected: boolean;
  frequency: number;
  energy: number;
}

const App: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData>({
    gainers: 22,
    losers: 9,
    avgChange: 1.44,
    mood: 'BULLISH'
  });

  const [portalState, setPortalState] = useState<PortalState>({
    connected: true,
    frequency: 528,
    energy: 100
  });

  const [selectedView, setSelectedView] = useState('dashboard');

  useEffect(() => {
    // Simulate real-time market updates
    const interval = setInterval(() => {
      setMarketData(prev => ({
        ...prev,
        gainers: Math.floor(Math.random() * 30) + 15,
        losers: Math.floor(Math.random() * 15) + 5,
        avgChange: (Math.random() * 3 - 1).toFixed(2) as any,
        mood: Math.random() > 0.5 ? 'BULLISH' : 'BEARISH'
      }));

      setPortalState(prev => ({
        ...prev,
        energy: Math.min(100, prev.energy + Math.random() * 5)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="scrollverse-portal">
      {/* Header */}
      <header className="portal-header">
        <div className="header-content">
          <div className="logo-section">
            <h1 className="portal-title">ScrollVerse Sovereign Portal</h1>
            <p className="tagline">528Hz • Sovereign App • Works Offline • All Platforms</p>
          </div>
          <div className="status-indicator">
            <div className={`status-dot ${portalState.connected ? 'connected' : 'disconnected'}`}></div>
            <span className="status-text">{portalState.connected ? 'CONNECTED' : 'OFFLINE'}</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="portal-nav">
        <button 
          className={`nav-btn ${selectedView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setSelectedView('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-btn ${selectedView === 'market' ? 'active' : ''}`}
          onClick={() => setSelectedView('market')}
        >
          Market Heatmap
        </button>
        <button 
          className={`nav-btn ${selectedView === 'sovereign' ? 'active' : ''}`}
          onClick={() => setSelectedView('sovereign')}
        >
          Sovereign Identity
        </button>
        <button 
          className={`nav-btn ${selectedView === 'resources' ? 'active' : ''}`}
          onClick={() => setSelectedView('resources')}
        >
          Resources
        </button>
      </nav>

      {/* Main Content */}
      <main className="portal-main">
        {selectedView === 'dashboard' && (
          <section className="dashboard-view">
            <h2>Real-Time Market Pulse</h2>
            
            <div className="market-stats">
              <div className="stat-card gainers">
                <div className="stat-icon">📈</div>
                <div className="stat-content">
                  <div className="stat-label">Gainers</div>
                  <div className="stat-value">{marketData.gainers}</div>
                </div>
              </div>

              <div className="stat-card losers">
                <div className="stat-icon">📉</div>
                <div className="stat-content">
                  <div className="stat-label">Losers</div>
                  <div className="stat-value">{marketData.losers}</div>
                </div>
              </div>

              <div className="stat-card change">
                <div className="stat-icon">📊</div>
                <div className="stat-content">
                  <div className="stat-label">Avg Change</div>
                  <div className="stat-value">{marketData.avgChange}%</div>
                </div>
              </div>

              <div className="stat-card mood">
                <div className="stat-icon">⚡</div>
                <div className="stat-content">
                  <div className="stat-label">Market Mood</div>
                  <div className="stat-value">{marketData.mood}</div>
                </div>
              </div>
            </div>

            <div className="portal-energy">
              <h3>Portal Energy Level</h3>
              <div className="energy-bar">
                <div className="energy-fill" style={{ width: `${portalState.energy}%` }}></div>
              </div>
              <p className="energy-text">{portalState.energy.toFixed(1)}% - Frequency: {portalState.frequency}Hz</p>
            </div>
          </section>
        )}

        {selectedView === 'market' && (
          <section className="market-view">
            <h2>Market Heatmap</h2>
            <div className="heatmap-placeholder">
              <p>Real-time market heatmap visualization</p>
              <p className="subtitle">Technology • Finance • Energy sectors</p>
            </div>
          </section>
        )}

        {selectedView === 'sovereign' && (
          <section className="sovereign-view">
            <h2>Sovereign Identity</h2>
            <div className="sovereign-info">
              <div className="info-card">
                <h3>Connect Wallet</h3>
                <button className="connect-btn">Connect MetaMask</button>
              </div>
              <div className="info-card">
                <h3>Guardian NFTs</h3>
                <p>Your Stardust Guardian collection</p>
              </div>
              <div className="info-card">
                <h3>CSC Blessings</h3>
                <p>Real-time blessing distribution</p>
              </div>
            </div>
          </section>
        )}

        {selectedView === 'resources' && (
          <section className="resources-view">
            <h2>Resources & Links</h2>
            <div className="resources-grid">
              <a href="https://scrollverse.co" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>ScrollVerse.co</h3>
                <p>Official website</p>
              </a>
              <a href="https://github.com/chaishillomnitech1/scrollverse-trinity" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>GitHub Repository</h3>
                <p>Source code & documentation</p>
              </a>
              <a href="https://manus.im/share/JQyCbdE152xEIkgUplmagw" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>Manus Replay</h3>
                <p>Digital mirror & archive</p>
              </a>
              <a href="https://www.reddit.com/r/MarketPulseReport/" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>Market Pulse Report</h3>
                <p>Community insights</p>
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <p>ScrollVerse Trinity Sovereign Ecosystem v3.0.0 • KUN FAYAKŪN × ∞</p>
        <p className="footer-meta">#scrollverse #group7 #stayawake</p>
      </footer>
    </div>
  );
};

export default App;
