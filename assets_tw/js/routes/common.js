export default {
	init() {
        if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
            new ThemeSwitcher()
        }
	}
}


class ThemeSwitcher {
    constructor() { // define some state variables
        this.hasLocalStorage = typeof Storage !== 'undefined'
        this.activeTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';

        document.documentElement.classList.add(this.activeTheme)

        var btn = document.getElementById('themeswitcher');
        btn.addEventListener('click', (event) => this.setTheme());
    }

    setTheme() {
        event.preventDefault();
		document.documentElement.classList.remove(this.activeTheme)
        this.activeTheme = (this.activeTheme === 'light') ? 'dark' : 'light';
        // set the theme id on the <html> element...
        document.documentElement.classList.add(this.activeTheme)

        // and save the selection in localStorage for later
        if (this.hasLocalStorage) {
            localStorage.setItem('theme', this.activeTheme)
        }
    }
}
