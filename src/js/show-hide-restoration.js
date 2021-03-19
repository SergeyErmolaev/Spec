const passRestoration = (function() {
  if(!document.getElementById('online_phone')) {
    return;
  }

  const inputTel = document.getElementById('online_phone');
  const inputPhonBtn = document.getElementById('inputPhonBtn');
  const inputPassBlock = document.getElementById('inputPassBlock');
  const forgotPass = document.getElementById('forgotPass');
  const entranceBtn = document.getElementById('entranceBtn');
  const registrationLink = document.getElementById('registrationLink');
  const restoreHeader = document.getElementById('restoreHeader');
  const entranceHeader = document.getElementById('entranceHeader');

  const close = document.getElementById('closeForm');
  close.addEventListener('click', closeForm);

  forgotPass.addEventListener('click', showRestoration);

  function showRestoration(evt) {
    evt.preventDefault();

    entranceHeader.classList.add('display-none');
    restoreHeader.classList.remove('display-none');
    inputTel.classList.add('entrance-form__input_tel');
    inputPhonBtn.classList.remove('display-none');
    inputPassBlock.classList.add('display-none');
    forgotPass.classList.add('display-none');
    entranceBtn.classList.add('display-none');
    registrationLink.classList.add('display-none');
  }

  function closeForm () {
    if(entranceHeader.classList.contains('display-none') && inputTel.classList.contains('entrance-form__input_tel') && inputPassBlock.classList.contains('display-none') && forgotPass.classList.contains('display-none') && entranceBtn.classList.contains('display-none') && registrationLink.classList.contains('display-none')) {
      entranceHeader.classList.remove('display-none');
      inputTel.classList.remove('entrance-form__input_tel');
      inputPassBlock.classList.remove('display-none');
      forgotPass.classList.remove('display-none');
      entranceBtn.classList.remove('display-none');
      registrationLink.classList.remove('display-none');
      restoreHeader.classList.add('display-none');
      inputPhonBtn.classList.add('display-none');
    }
  }
})();