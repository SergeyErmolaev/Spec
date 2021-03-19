const enterCode = (function() {
  if(!document.getElementById('entranceForm')) {
    return;
  }

  const inputPhonBtn = document.getElementById('inputPhonBtn');
  const closeTel = document.getElementById('closeTel');
  const inputTel = document.getElementById('online_phone');
  const codeRestoreBlock = document.getElementById('codeRestoreBlock');

  const restoreHeader = document.getElementById('restoreHeader');
  const entranceHeader = document.getElementById('entranceHeader');
  const inputPassBlock = document.getElementById('inputPassBlock');
  const forgotPass = document.getElementById('forgotPass');
  const entranceBtn = document.getElementById('entranceBtn');
  const registrationLink = document.getElementById('registrationLink');

  const close = document.getElementById('closeForm');
  close.addEventListener('click', closeForm);

  inputPhonBtn.addEventListener('click', removeBtn);

  function removeBtn() {
    inputPhonBtn.classList.add('display-none');
    closeTel.classList.remove('display-none');
    inputTel.classList.remove('entrance-form__input_tel');
    inputTel.setAttribute('readonly', 'readonly');
    codeRestoreBlock.classList.remove('display-none');
  }

  function closeForm () {
    if(inputPhonBtn.classList.contains('display-none') && !closeTel.classList.contains('display-none') && !inputTel.classList.contains('entrance-form__input_tel') && !codeRestoreBlock.classList.remove('display-none')) {
      inputPhonBtn.classList.remove('display-none');
      closeTel.classList.add('display-none');
      inputTel.classList.add('entrance-form__input_tel');
      inputTel.removeAttribute('readonly');
      codeRestoreBlock.classList.add('display-none');

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