const select = (function() {
    const selectHeader = document.querySelectorAll('#select__header');
    const selectItem = document.querySelectorAll('#select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('#select'),
            currentText = select.querySelector('#select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
        currentText.classList.add('item-selected');
    }
})();

// console.log("does it work?");