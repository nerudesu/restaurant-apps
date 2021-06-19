const showToast = (message) => {
  const snackbar = document.getElementById('snackbar');

  snackbar.className = 'show';
  snackbar.innerHTML = message;

  setTimeout(() => {
    snackbar.className = snackbar.className.replace('show', '');
  }, 3000);
};

export default showToast;
