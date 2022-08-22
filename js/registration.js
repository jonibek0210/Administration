let form = document.forms.form
let inps = document.querySelectorAll('.input')

let users = []

form.onsubmit = (e) => {
   e.preventDefault()

   let user = {
      id: Math.random(),
   }

   let fm = new FormData(form)
   fm.forEach((valeu, key) => {
      user[key] = valeu
   })

   users.push(user)

   localStorage.setItem('user', JSON.stringify(user))
   JSON.parse(localStorage.getItem('user'))

   if (JSON.parse(localStorage.getItem('user'))) {
      window.location.href = 'index.html'
   } else {
      console.log();
   }

   form.reset()
}

if (JSON.parse(localStorage.getItem('user'))) {
   window.location.href = 'index.html'
} else {
   console.log();
}

if (JSON.parse(localStorage.getItem('user'))) {
   window.location.href = 'sign-in.html'
} else {
   console.log();
}