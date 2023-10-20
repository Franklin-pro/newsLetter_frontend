const singleContainer = document.querySelector('.single-container')

const idParams = window.location.href.split("?id=")[1];

fetch(`https://jade-encouraging-cougar.cyclic.cloud/api/v1/news/${idParams}`)
.then((resp)=>{
    return resp.json();
})

.then((data)=>{
console.log(data)
})
// const idparams=window.location.href
// console.log(idparams)
