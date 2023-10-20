// let formMessage = document.querySelector('.message')
// let messages = document.querySelector('#message')
// let messagepost = document.querySelector('.messagepost')

// formMessage.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     let userMessage = messages.value;
//     console.log('UserMessage:',userMessage)

    fetch(`https://mauve-pronghorn-ring.cyclic.app/api/v1/message`)

    .then((response)=>{
        return response.json()
    })

    .then((data)=>{
        data.data.map((message)=>{
        messagepost.innerHTML+= `
        <div class="mess">
        <p>email:${message.email}</p>
        <h5>firstName:${message.firstName}</h5>
        <h6>message:${message.message}</h6>
    </div>

        `
        })
    


    })
// })