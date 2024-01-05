window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  }

  for (const depedency of ['chrome', 'node', 'electron']) {
    replaceText(`${depedency}-version`, process.versions[depedency])
  }
})