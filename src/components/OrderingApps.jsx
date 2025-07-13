import React from 'react';
import './OrderingApps.css';

const apps = [
  { logo: '/uber.png' },
  { logo: '/gr.png' },
  { logo: '/pos.png' },
  { logo: '/doo.png' },
  { logo: '/foo.png' },
  { logo: '/del.png' },
  { logo: '/ins.png' },
  { logo: '/jus.png' },
  { logo: '/did.png' },
];

const OrderingApps = () => (
  <section className="ordering-apps-section">
    <div className="ordering-apps-container">
      <div className="ordering-apps-text">
        <h2 className="ordering-apps-title">
          You can order<br />through apps
        </h2>
        <p className="ordering-apps-desc">
          Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.
        </p>
      </div>
      <div className="apps-grid">
        {apps.map(app => (
          <div key={app.name} className="app-item">
            <img
              src={app.logo}
              alt={`${app.name} logo`}
              className="app-logo"
            />
            <p className="app-name">{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OrderingApps;
