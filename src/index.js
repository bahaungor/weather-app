import './style.css'
import { updatePage } from './pageRefresh';
import { setTheme } from './themeUtils'; // Thank you ES6 Modules!

document.querySelector('.tt').addEventListener('click', setTheme)

const form = document.querySelector('form')

form.addEventListener('submit', updatePage)
