const registration = (function () {
  if(!document.getElementById('registrationLink')) {
    return;
  }

  const registrationLink = document.getElementById('registrationLink');
  const forgotPass = document.getElementById('forgotPass');
  const passRBlock = document.getElementById('passRepeatBlock');

  registrationLink.addEventListener('click', hideLinks);

  function hideLinks(evt) {
    evt.preventDefault();
    registrationLink.classList.add('display-none');
    forgotPass.classList.add('display-none');
    passRBlock.classList.remove('display-none');
  }
})()