const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

function processFromData(e) {
  e.preventDefault();
}

// Event Listener
form.addEventListener('submit', processFromData);
