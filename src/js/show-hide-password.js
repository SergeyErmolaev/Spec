const showHidePassword = (function() {
	if(!document.querySelector("#passwordControl")) {
    return;
  }

	const target = document.getElementById('passwordControl');
	const targetRepeat = document.getElementById('passwordControlRepeat');

	target.addEventListener('click', show_hide_password);
	targetRepeat.addEventListener('click', show_hide_password_repeat)

	function show_hide_password() {
		const input = document.getElementById('password-input');
		if (input.getAttribute('type') == 'password') {
			this.classList.add('view');
			input.setAttribute('type', 'text');
		} else {
			this.classList.remove('view');
			input.setAttribute('type', 'password');
		}
		return false;
	}

	function show_hide_password_repeat() {
		const input = document.getElementById('password-input-repeat');
		if (input.getAttribute('type') == 'password') {
			this.classList.add('view');
			input.setAttribute('type', 'text');
		} else {
			this.classList.remove('view');
			input.setAttribute('type', 'password');
		}
		return false;
	}
})();



// console.log("show-hide-password");