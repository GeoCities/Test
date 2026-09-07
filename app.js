const views = document.querySelectorAll('.view');
const navigation = document.querySelectorAll('[data-view]');
const toast = document.querySelector('.toast');
let toastTimer;

function showView(name) {
  views.forEach((view) => view.classList.toggle('active', view.id === name));
  navigation.forEach((button) => button.classList.toggle('active', button.dataset.view === name));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navigation.forEach((button) => button.addEventListener('click', () => showView(button.dataset.view)));
document.querySelectorAll('[data-view-link]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.viewLink)));
document.querySelectorAll('.inbox-tab').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.inbox-tab, .inbox-list').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.inbox).classList.add('active');
}));

const modal = document.getElementById('compose-modal');
document.querySelectorAll('[data-compose]').forEach((button) => button.addEventListener('click', () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}));
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}));
modal.addEventListener('click', (event) => {
  if (event.target === modal) event.currentTarget.classList.remove('open');
});

function notify(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
document.querySelectorAll('[data-toast]').forEach((button) => button.addEventListener('click', () => notify(button.dataset.toast)));
document.querySelectorAll('[data-follow]').forEach((button) => button.addEventListener('click', () => {
  button.classList.toggle('following');
  button.textContent = button.classList.contains('following') ? '✓ Following' : '+ Follow';
}));
