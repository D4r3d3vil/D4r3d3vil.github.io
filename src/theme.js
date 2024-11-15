import {themeChange} from "theme-change";
let theme, themeIcon;
export function initTheme(icon) {
    themeChange(false)
    theme = localStorage.getItem('theme')
    if (theme === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light'
        else theme = 'dark'
        localStorage.setItem('theme', theme)
    }
    themeIcon = icon;
    setThemeIcon()
}

export function toggleTheme() {
    if (theme == "dark") theme = 'light'
    else theme = 'dark'
    setThemeIcon()
}

export function setThemeIcon(){
    if (theme == "dark") themeIcon.className = 'fas fa-sun text-xl'
    else themeIcon.className = 'fas fa-moon text-xl'
}