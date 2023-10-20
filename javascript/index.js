
// ---------------fetch-------------------------

const newsIndex = document.querySelector(".news");

const spinner = document.querySelector(".spinner")

spinner.style.display = "block";
newsIndex.style.display = "none";

fetch("https://mauve-pronghorn-ring.cyclic.app/api/v1/news")
  .then((Response) => {
    return Response.json();
  })

  // .then((data) => {
  //   data.data.map((news) => {
      
  //     newsIndex.innerHTML += `
  //     <div class="card">
  //     <img src="${news.newsImage[0]}"/>
  //     <div class="text">
  //     <p class="date">${news.postedAt}</p>
  //       <h4>${news.newsMainTitle}</h4>
  //       <p class="description">${news.newsSummaryDescription}</p>
  //       <div class="butt">
  //             <a href="./singleNews.html?id=${news._id}" class="readmore">Readmore....</a>
  //           </div>
  //       </div>
        
  //       </div>
  //       `;
  //   });
  // });

.then((token)=>{
  token.data.map((news)=>{

    spinner.style.display = "none";
    newsIndex.style.display = "grid";

    newsIndex.innerHTML +=`
    <div class ="card">
    <img src = "${news.newsImage[0]}"/>
    <p class ="time">${news.postedAt}</p>
   <p>${news.newsMainTIttle}</p>
   <p>${news.newsTittle}</p>
    <p class ="desc">${news. newsDescription}</p>
    <h5 class = "pub">${news.publisher}</h5>
    <div class="liked">
    <i class="fa-solid fa-thumbs-up likes">${news.likes}</i>
    <i class="fa-solid fa-message message" id ="open-popup"></i>
    <i class="fa-solid fa-comment comment"></i>
    <i class="fa-regular fa-thumbs-down unlikes">${news.unlikes}</i>
    </div>
    <div class="popup" id="popup-container">
    <i class="fa-solid fa-xmark" id="close-popup"></i>
    <div class="messagebox">
    <input type="text" id="message">
    </div>
    </div>
  
    <a href="./singlenews.html?id=${news.id}">readMore</a>
    
    `
  })
})

document.getElementById("likes").addEventListener("click", function(){

  const likeApi = `https://mauve-pronghorn-ring.cyclic.app/api/v1/news/like`

})


const openpopupbutton=document.getElementById("open-popup")
const closepopupbutton=document.getElementById("close-popup")
const popupcontainer=document.getElementById("popup-container")
function openpopup(){
    popupcontainer.style.display ="block";
}
function closepopup(){
    popupcontainer.style.display ="none";
}
openpopupbutton.addEventListener("click",openpopup);
closepopupbutton.addEventListener("click",closepopup);
