const newsForm = document.querySelector('.newsForm')
const token=window.localStorage.getItem("token")

newsForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    const newsMainTIttle = document.querySelector("#maintitle").value;
    const newsTittle = document.querySelector ("#newstitle").value;
    const newsDescription = document.querySelector("#description").value;
    const imgArr = [newsImage];
    const publisher = document.querySelector("#publisher").value

    const data={
        newsMainTIttle,
        newsTittle,
        newsDescription,
        newsImage:imgArr,
        publisher,
    };
console.log(data)
    const newsApi = `https://mauve-pronghorn-ring.cyclic.app/api/v1/news`;

    const setpost ={
        method:"POST",
        headers:{
            "auth-token": token,
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    };
    fetch(newsApi,setpost)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    alert(data.message)
    window.location.href="./index.html"
})
});