export default {
	init() {
        if (window.CSS && CSS.supports('color', 'var(--fake-var)')) {
            new ThemeSwitcher()
        }

		let open_nav = document.getElementById( 'open-navigation' );
		let close_nav = document.getElementById( 'close-navigation' );

		let nav = document.getElementById( 'owl-navigation' );

		open_nav.addEventListener( 'click', (event) => {
			event.preventDefault();
			document.body.classList.add( 'overflow-hidden' );
			nav.classList.add( 'top-0' );
			nav.classList.remove( '-top-full' );
		} );

		close_nav.addEventListener( 'click', (event) => {
			event.preventDefault();
			document.body.classList.remove( 'overflow-hidden' );
			nav.classList.remove( 'top-0' );
			nav.classList.add( '-top-full' );
		} );
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
