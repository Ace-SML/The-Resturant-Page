import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css';


function clearContent() {
  document.getElementById('content').textContent = '';
}

document.getElementById('home').addEventListener('click', () => {
  clearContent();
  loadHome();
});

document.getElementById('menu').addEventListener('click', () => {
  clearContent();
  loadMenu();
});

document.getElementById('contact').addEventListener('click', () => {
  clearContent();
  loadContact();
});

// Load home by default
loadHome();
console.log("JS is working");
