document.addEventListener('DOMContentLoaded', function () {
  const modals = [
    { liClass: 'home-li', modalId: 'aboutModal', closeId: 'closeModal' },
    { liClass: 'services-li', modalId: 'servicesModal', closeId: 'closeServicesModal' },
    { liClass: 'projects-li', modalId: 'modal-projects', closeId: 'closeProjectsModal' },
    { liClass: 'blogs-li', modalId: 'modal-blog', closeId: 'closeBlogsModal' },
    { liClass: 'contacts-li', modalId: 'modal-contact', closeId: 'closeContactsModal' },
  ];

  modals.forEach(({ liClass, modalId, closeId }) => {
    const li = document.querySelector(`.${liClass}`);
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    li.addEventListener('click', () => {
      modal.classList.add('active');
      document.body.classList.add('modal-open');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.classList.remove('modal-open');
    });
  });
});
