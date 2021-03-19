// const searchToggle = (function() {
//   const search = document.querySelector('#technicsSearch');
//   search.addEventListener('click', showSearch);

//   function showSearch () {
//     this.classList.add('display_none');
//   }
// })();

const searchToggle = (function() {
  const search = document.querySelector('#technicsSearch');
  const techSearchInput = document.querySelector('#techSearchInput');

  techSearchInput.onfocus = inputFocus;
  techSearchInput.onblur = inputBlur;

  function inputFocus () {
    search.classList.add('display_none');
    techSearchInput.style.paddingLeft = '15px';
  }

  function inputBlur () {
    search.classList.remove('display_none');
    techSearchInput.style.paddingLeft = '55px';
  }
})();

console.log("Does it work?")