// Cursor follow
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Back-to-top button
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  if(window.scrollY > 400) backTop.style.display = 'block';
  else backTop.style.display = 'none';
});

// Dynamic loader
async function loadPage(page) {
  const res = await fetch(page);
  const html = await res.text();
  document.getElementById('content').innerHTML = html;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
