const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const dropdown = document.querySelector('.nav-dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (navbar && menuToggle) {
	menuToggle.addEventListener('click', () => {
		const isOpen = navbar.classList.toggle('nav-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
		menuToggle.innerHTML = isOpen ? "<i class='bx bx-x'></i>" : "<i class='bx bx-menu'></i>";

		if (!isOpen && dropdown) {
			dropdown.classList.remove('open');
			if (dropdownToggle) {
				dropdownToggle.setAttribute('aria-expanded', 'false');
				dropdownToggle.blur();
			}
		}
	});

	document.querySelectorAll('.nav-links a').forEach((link) => {
		link.addEventListener('click', () => {
			navbar.classList.remove('nav-open');
			menuToggle.setAttribute('aria-expanded', 'false');
			menuToggle.innerHTML = "<i class='bx bx-menu'></i>";
			if (dropdown) {
				dropdown.classList.remove('open');
			}
			if (dropdownToggle) {
				dropdownToggle.setAttribute('aria-expanded', 'false');
				dropdownToggle.blur();
			}
		});
	});

	if (dropdown && dropdownToggle) {
		dropdownToggle.addEventListener('click', (event) => {
			event.preventDefault();
			const isOpen = dropdown.classList.toggle('open');
			dropdownToggle.setAttribute('aria-expanded', String(isOpen));
			if (!isOpen) {
				dropdownToggle.blur();
			}
		});

		document.addEventListener('click', (event) => {
			if (!dropdown.contains(event.target)) {
				dropdown.classList.remove('open');
				dropdownToggle.setAttribute('aria-expanded', 'false');
				dropdownToggle.blur();
			}
		});
	}
}
