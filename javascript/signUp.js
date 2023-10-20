const passwordIn = document.querySelector("#password");
const passwordeye = document.querySelector(".togglePassword");
passwordeye.addEventListener("click", () => {
  if (passwordIn.type === "password") {
    passwordIn.type = "text";
    passwordeye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    passwordIn.type = "password";
    passwordeye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
});



let form = document.querySelector('.sign-ups')
let message = document.querySelector('h5')

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    let firstName = document.querySelector('#firstName').value;
    let lastName = document.querySelector('#lastName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirmPassword').value;
    

    const data={
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    };
    const api = `https://mauve-pronghorn-ring.cyclic.app/api/v1/user`
    const setPostman = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data),
    };
    fetch(api,setPostman)

    .then((response)=>{
        return response.json();
    })

    .then((data)=>{
message.innerHTML =`
        <h5 class = "her">${data.message}</h5>
     `
    })
 
    .catch((err)=>{
        alert(err)
    })
})