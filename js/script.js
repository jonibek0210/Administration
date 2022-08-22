let form = document.forms[0]

let users = document.querySelector('.users')
let modal_bg = document.querySelector('.modal_bg')
let modal = document.querySelector('.modal')
let close = document.querySelector('.close')
let add = document.querySelector('.add')
let inp_search = document.querySelector('.inp_search')
let url = 'http://localhost:3001'

let getDate = new Date().getDate()
let getMonth = new Date().getMonth()
let getFullYear = new Date().getFullYear()

let top_top = document.querySelector('.import')
let bottom = document.querySelector('.export')

function getData() {
   axios.get(url + '/users')
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            let arrData = res.data
            reload(arrData.slice(0, 5))
         }
      })
}
getData()

function openModal() {
   modal.style.display = "block"
   modal_bg.style.display = "block"

   setTimeout(() => {
      modal.style.opacity = "1"
      modal.style.transform = "translate(-50%, -50%) scale(1)"
      modal_bg.style.opacity = "1"
   }, 400);
}

function closeModal() {
   modal.style.opacity = "0"
   modal.style.transform = "translate(-50%, -50%) scale(.2)"
   modal_bg.style.opacity = "0"

   setTimeout(() => {
      modal.style.display = "none"
      modal_bg.style.display = "none"
   }, 400);
}

form.onsubmit = (e) => {
   e.preventDefault()

   let user = {
      registerTime: new Date()
   }

   let fm = new FormData(form)
   fm.forEach((value, key) => {
      user[key] = value
   })

   axios.post(url + '/users', user)
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            getData()
         }
      })
      .catch(err => console.log(err))
   form.reset()
}

function reload(arr) {
   users.innerHTML = ''

   for (let item of arr) {
      let user = document.createElement('div')
      let user_name = document.createElement('div')
      let user_photo = document.createElement('img')
      let text_name = document.createElement('span')
      let user_email = document.createElement('div')
      let text_email = document.createElement('span')
      let user_location = document.createElement('div')
      let text_location = document.createElement('span')
      let user_phon = document.createElement('div')
      let text_phone = document.createElement('span')
      let user_rgister = document.createElement('div')
      let text_register = document.createElement('span')

      user_photo.src = './img/user.svg'
      text_name.innerHTML = item.name
      text_email.innerHTML = item.email
      text_location.innerHTML = item.location
      text_phone.innerHTML = item.phone
      text_register.innerHTML = item.registerTime

      user.classList.add('user')
      user_name.classList.add('user_name')
      user_email.classList.add('user_email')
      user_location.classList.add('user_location')
      user_phon.classList.add('user_phon')

      users.append(user)
      user.append(user_name, user_email, user_location, user_phon, user_rgister)
      user_name.append(user_photo, text_name)
      user_email.append(text_email)
      user_location.append(text_location)
      user_phon.append(text_phone)
      user_rgister.append(text_register)
   }
}

inp_search.onkeyup = () => {
   axios.get(url + '/users')
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            let newArr = res.data.filter(item => {
               let name = item.name.toLowerCase()
               let value = inp_search.value.toLowerCase().trim()
               if (name.includes(value)) {
                  return item
               }
            })
            reload(newArr)
         }
      })
}

function pagination() {
   axios.get(url + '/users')
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            let arrData = res.data

            let placeBtns = document.querySelector('.numbs')
            let step = 5
            for (let i = 1; i <= Math.ceil(arrData.length / 5); i++) {
               let btn = document.createElement('span')
               btn.id = i * step;

               btn.innerHTML = i;
               btn.classList.add('numb')
               placeBtns.append(btn)

               btn.onclick = () => {
                  reload(arrData.slice(i * step - 5, btn.id))
               }
            }
         }

      })
}
pagination()

function topSort() {
   axios.get(url + '/users')
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            let arrData = res.data
            const sortedActivities = arrData.sort((a, b) => {
               let c = new Date(a.registerTime)
               let d = new Date(b.registerTime)

               return c - d
            })
            reload(sortedActivities.slice(0, 5))
         }
      })
}

function bottomSort() {
   axios.get(url + '/users')
      .then(res => {
         if (res.status === 200 || res.status === 201) {
            let arrData = res.data
            const sortedActivities = arrData.sort((a, b) => {
               let c = new Date(a.registerTime)
               let d = new Date(b.registerTime)

               return d - c
            })
            reload(sortedActivities.slice(0, 5))
         }
      })
}

add.onclick = () => {
   openModal()
}

close.onclick = () => {
   closeModal()
}

top_top.onclick = () => {
   topSort()
}

bottom.onclick = () => {
   bottomSort()
}

if (!localStorage.getItem('user')) {
   let loc = window.location.href.split('/')
   loc = loc[loc.lenght - 1]
   if (loc !== 'registration.html') {
      window.location.href = 'registration.html'
   }
}