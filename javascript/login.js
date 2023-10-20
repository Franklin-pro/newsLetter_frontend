
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


let login =document.querySelector('.sign-in')

login.addEventListener("submit",(e)=>{
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    
    const data={
        email,
        password,
    };
    console.log(data)
    const loginApi = `https://mauve-pronghorn-ring.cyclic.app/api/v1/user/login`
 const setPostman = {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data),

 };

 fetch(loginApi,setPostman)

 .then((resp)=>{
    return resp.json();
 })

 .then((data)=>{
   if(data.token){
      const token = (data.token)
      localStorage.setItem("token",token);
      if(data.data.user.role =="admin"){
         window.location.href ="./admin.html";
      }else{
         window.location.href = "./index.html"
      }
   }
   else{
      alert(data.message)
   }
 })
  .catch((err)=>{
    alert(err)
  });
});
