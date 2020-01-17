import Stats from 'stats.js';
import { useEffect } from 'react';

export const StatsCom = () => {
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);
    stats.dom.style.top = 'auto';
    stats.dom.style.left = '20px';
    stats.dom.style.bottom = '20px';
    const animate = () => {
      stats.begin();

      // monitored code goes here

      stats.end();

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, []);
  return null;
};
