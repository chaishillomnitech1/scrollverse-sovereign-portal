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

interface RouteConfig {
  path: string;
  label: string;
  description: string;
  icon: string;
}

const SCROLLVERSE_ROUTES: RouteConfig[] = [
  { path: '/uap', label: 'Universal Access Portal', description: 'Gateway to all sovereign systems', icon: '🌍' },
  { path: '/mr-walkshit', label: 'Sovereign Identity', description: 'Your digital sovereign identity', icon: '👑' },
  { path: '/cieds', label: 'Citizen Economic Data', description: 'Integrated economic intelligence', icon: '📊' },
  { path: '/wealth', label: 'Wealth Distribution', description: '7.77% Zakat auto-distribution engine', icon: '💰' },
  { path: '/exchange/heatmap', label: 'Market Heatmap', description: 'Real-time market visualization', icon: '🔥' },
  { path: '/exchange/portfolio', label: 'Portfolio Dashboard', description: 'Sovereign asset management', icon: '💎' },
  { path: '/exchange/defi', label: 'DeFi Integration', description: 'Decentralized finance protocols', icon: '⚡' }
];

const GITHUB_REPOS = [
  { name: 'scrollverse-trinity', url: 'https://github.com/chaishillomnitech1/scrollverse-trinity', desc: 'Master ecosystem repository' },
  { name: 'scrollverse-sovereign-portal', url: 'https://github.com/chaishillomnitech1/scrollverse-sovereign-portal', desc: 'Web portal & frontend' },
  { name: 'scrollverse-smart-contracts', url: 'https://github.com/chaishillomnitech1/scrollverse-smart-contracts', desc: 'Blockchain contracts' }
];

const SOCIAL_LINKS = [
  { platform: 'Twitter/X', handle: '@highlightChais', url: 'https://x.com/highlightChais', icon: '𝕏' },
  { platform: 'GitHub', handle: 'chaishillomnitech1', url: 'https://github.com/chaishillomnitech1', icon: '🐙' },
  { platform: 'Manus', handle: 'Replay Archive', url: 'https://manus.im/share/JQyCbdE152xEIkgUplmagw', icon: '🤖' }
];

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
  const [currentDomain] = useState('scrollverse.co');

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
            <p className="domain-badge">🌐 {currentDomain}</p>
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
          className={`nav-btn ${selectedView === 'routes' ? 'active' : ''}`}
          onClick={() => setSelectedView('routes')}
        >
          Domain Routes
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
          className={`nav-btn ${selectedView === 'ecosystem' ? 'active' : ''}`}
          onClick={() => setSelectedView('ecosystem')}
        >
          Ecosystem
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

            <div className="quick-links">
              <h3>Quick Access</h3>
              <div className="quick-links-grid">
                {SCROLLVERSE_ROUTES.slice(0, 4).map((route, idx) => (
                  <a key={idx} href={`https://${currentDomain}${route.path}`} className="quick-link-card" target="_blank" rel="noopener noreferrer">
                    <span className="icon">{route.icon}</span>
                    <span className="label">{route.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {selectedView === 'routes' && (
          <section className="routes-view">
            <h2>ScrollVerse.co Domain Routes</h2>
            <p className="section-description">Complete ecosystem of sovereign systems accessible via scrollverse.co</p>
            
            <div className="routes-grid">
              {SCROLLVERSE_ROUTES.map((route, idx) => (
                <div key={idx} className="route-card">
                  <div className="route-icon">{route.icon}</div>
                  <div className="route-content">
                    <h3>{route.label}</h3>
                    <p>{route.description}</p>
                    <code className="route-path">{route.path}</code>
                  </div>
                  <a href={`https://${currentDomain}${route.path}`} className="route-link" target="_blank" rel="noopener noreferrer">
                    Visit →
                  </a>
                </div>
              ))}
            </div>

            <div className="domain-info">
              <h3>Domain Information</h3>
              <div className="info-box">
                <p><strong>Primary Domain:</strong> scrollverse.co</p>
                <p><strong>Status:</strong> ✅ Active & Deployed</p>
                <p><strong>SSL/TLS:</strong> ✅ Secured</p>
                <p><strong>Uptime:</strong> 99.99%</p>
                <p><strong>Entity:</strong> SCROLL VERSE LLC (EIN 42-2509570)</p>
              </div>
            </div>
          </section>
        )}

        {selectedView === 'market' && (
          <section className="market-view">
            <h2>Market Heatmap</h2>
            <div className="heatmap-placeholder">
              <p>Real-time market heatmap visualization</p>
              <p className="subtitle">Technology • Finance • Energy sectors</p>
              <p className="route-info">📍 Access via: scrollverse.co/exchange/heatmap</p>
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
                <p className="card-desc">Secure your sovereign identity on Polygon</p>
              </div>
              <div className="info-card">
                <h3>Guardian NFTs</h3>
                <p>Your Stardust Guardian collection</p>
                <p className="card-desc">Tier-based consciousness tokens</p>
              </div>
              <div className="info-card">
                <h3>CSC Blessings</h3>
                <p>Real-time blessing distribution</p>
                <p className="card-desc">7.77% Zakat auto-distribution</p>
              </div>
            </div>
            <p className="route-info">📍 Access via: scrollverse.co/mr-walkshit</p>
          </section>
        )}

        {selectedView === 'ecosystem' && (
          <section className="ecosystem-view">
            <h2>ScrollVerse Ecosystem</h2>
            
            <div className="ecosystem-section">
              <h3>GitHub Repositories</h3>
              <div className="ecosystem-grid">
                {GITHUB_REPOS.map((repo, idx) => (
                  <a key={idx} href={repo.url} className="ecosystem-card" target="_blank" rel="noopener noreferrer">
                    <div className="card-icon">🐙</div>
                    <h4>{repo.name}</h4>
                    <p>{repo.desc}</p>
                    <span className="card-link">View on GitHub →</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="ecosystem-section">
              <h3>Social Integration</h3>
              <div className="social-grid">
                {SOCIAL_LINKS.map((social, idx) => (
                  <a key={idx} href={social.url} className="social-card" target="_blank" rel="noopener noreferrer">
                    <div className="social-icon">{social.icon}</div>
                    <h4>{social.platform}</h4>
                    <p>{social.handle}</p>
                    <span className="card-link">Follow →</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="cross-promo">
              <h3>Cross-Promotion Strategy</h3>
              <div className="promo-box">
                <p>✅ Website → GitHub: All repos linked in Resources</p>
                <p>✅ GitHub → Website: Deployment automated via Vercel</p>
                <p>✅ Social → Website: Twitter/X broadcasts drive traffic</p>
                <p>✅ Website → Social: Share buttons on all pages</p>
                <p>✅ Hashtags: #scrollverse #scrollverse.co #group7 #stayawake</p>
              </div>
            </div>
          </section>
        )}

        {selectedView === 'resources' && (
          <section className="resources-view">
            <h2>Resources & Links</h2>
            <div className="resources-grid">
              <a href="https://scrollverse.co" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>🌐 ScrollVerse.co</h3>
                <p>Official website & master hub</p>
              </a>
              <a href="https://github.com/chaishillomnitech1" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>🐙 GitHub Profile</h3>
                <p>All repositories & source code</p>
              </a>
              <a href="https://x.com/highlightChais" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>𝕏 Twitter/X</h3>
                <p>Latest updates & announcements</p>
              </a>
              <a href="https://manus.im/share/JQyCbdE152xEIkgUplmagw" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>🤖 Manus Replay</h3>
                <p>Digital mirror & archive</p>
              </a>
              <a href="https://polygon.technology" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>⚡ Polygon Network</h3>
                <p>Blockchain infrastructure</p>
              </a>
              <a href="https://www.reddit.com/r/MarketPulseReport/" className="resource-card" target="_blank" rel="noopener noreferrer">
                <h3>📊 Market Pulse Report</h3>
                <p>Community insights & analysis</p>
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="portal-footer">
        <p>ScrollVerse Trinity Sovereign Ecosystem v3.0.0 • KUN FAYAKŪN × ∞</p>
        <p className="footer-meta">#scrollverse #scrollverse.co #group7 #stayawake</p>
        <p className="footer-legal">SCROLL VERSE LLC (EIN 42-2509570) • 721 Embassy Terrace, Vineland, NJ 08360</p>
      </footer>
    </div>
  );
};

export default App;
