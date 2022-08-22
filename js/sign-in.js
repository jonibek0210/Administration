// import { users } from './registration.js'

let form = document.forms[0]
let input_email = document.querySelector('.input_email')
let input_password = document.querySelector('.input_password')
let btn_sign = document.querySelector('.btn_sign')

form.onsubmit = (event) => {
   event.preventDefault()
}

input_email.value = JSON.parse(localStorage.getItem('user')).email || ""

btn_sign.onclick = () => {
   if (input_password.value === JSON.parse(localStorage.getItem('user')).Password && input_email.value === JSON.parse(localStorage.getItem('user')).email) {
      console.log('good');
      window.location.href = 'index.html'
   } else {
      console.log('error');
   }
}

if (!JSON.parse(localStorage.getItem('user'))) {
   window.location.href = 'registration.html'
} else {
   console.log();
}