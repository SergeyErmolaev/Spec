const showHideForm = (function(){
  if(!document.getElementById('closeForm')) {
        return;
    }

  const close = document.getElementById('closeForm');
  const formWrap = document.querySelector('.wrap-entrance-form');
  const openFormBtn = document.getElementById('entranceLink');
  const entranceForm = document.getElementById('entranceForm');
  const registrationLink = document.getElementById('registrationLink');
  const forgotPass = document.getElementById('forgotPass');
  const passRBlock = document.getElementById('passRepeatBlock');

  close.addEventListener('click', closeForm);
  openFormBtn.addEventListener('click', openForm);

  function closeForm() {
    formWrap.classList.add('display-none');
    if(registrationLink.classList.contains('display-none')&&forgotPass.classList.contains('display-none')&&!passRBlock.classList.contains('display-none')) {
      registrationLink.classList.remove('display-none');
      forgotPass.classList.remove('display-none');
      passRBlock.classList.add('display-none');
    }
    entranceForm.reset();
  }

  function openForm(evt) {
    evt.preventDefault()
    formWrap.classList.remove('display-none');
  }
})();