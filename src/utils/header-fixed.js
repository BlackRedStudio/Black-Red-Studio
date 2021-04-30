const checkScrollPosition = (body, header) => {
  if (body.scrollTop > 150) header[0].classList.add('scrolled');
  else header[0].classList.remove('scrolled');
};
const handleHeaderFixed = () => {
  document.querySelector('header').classList.remove('scrolled');
  const body = document.querySelector('.tl-wrapper');
  const header = document.getElementsByTagName('header');
  checkScrollPosition(body, header);
  body.addEventListener(
    'scroll',
    () => {
      checkScrollPosition(body, header);
    },
    { passive: true }
  );
};

export default handleHeaderFixed;
