const target = document.getElementById('target');

const dateOpts = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const data = {
  browserInfo: window.navigator.userAgent,
  osName: window.navigator.oscpu,
  screenDimensions: `${window.screen.width}x${window.screen.height}`,
  browserAvailableSpace: `${window.screen.availWidth}x${window.screen.availHeight}`,
  browserTime: new Date(window.Date()).toLocaleTimeString('fi-FI', dateOpts)
};

document.addEventListener('DOMContentLoaded', e => {
  for (const i in data) {
    const el = document.createElement('p');
    el.textContent = data[i];
    target.appendChild(el);
  }
});
