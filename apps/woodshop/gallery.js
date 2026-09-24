const lightbox = document.querySelector('.ws-lightbox');
const closeButton = lightbox.querySelector('button');
for (const link of document.querySelectorAll('.gallery a')) {
  link.addEventListener('click', event => {
    event.preventDefault();
    const image = lightbox.querySelector('img');
    image.src = link.getAttribute('href');
    image.alt = link.querySelector('img').alt;
    lightbox.showModal();
  });
}
closeButton.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
