
  const modal = document.getElementById('contactModal');
  const contactLink = document.querySelector('#contactLink');
  const closeBtn = document.getElementById('closeModal');

  contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });

