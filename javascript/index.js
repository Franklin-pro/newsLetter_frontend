// const passwordIn = document.querySelector("#password");
// const passwordeye = document.querySelector(".togglePassword");
// passwordeye.addEventListener("click", () => {
//   if (passwordIn.type === "password") {
//     passwordIn.type = "text";
//     passwordeye.innerHTML = `<i class="fa-solid fa-eye"></i>`;
//   } else {
//     passwordIn.type = "password";
//     passwordeye.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
//   }
// });

// ---------------fetch-------------------------

const newsIndex = document.querySelector(".news");

fetch("https://jade-encouraging-cougar.cyclic.cloud/api/v1/news")
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
    newsIndex.innerHTML +=`
    <div class ="card">
    <img src = "${news.newsImage[0]}"/>
    <p class ="time">${news.postedAt}</p>
   
    <p class ="desc">${news. newsDescription}</p>
    <h5 class = "pub">${news.publisher}</h5>
    <div class="liked">
    <i class="fa-solid fa-thumbs-up likes">${news.likes}</i>
    <i class="fa-regular fa-thumbs-down unlikes">${news.unlikes}</i>
    </div>
    <a href="./singlenews.html?id=${news.id}">readMore</a>
    
    `
  })
})



