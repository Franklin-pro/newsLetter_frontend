
let formMessage = document.querySelector('.messages')

let messagepost = document.querySelector('.messagepost')

formMessage.addEventListener("submit", (e)=>{
    e.preventDefault();

    let message = document.querySelector('#message').value;

    const data={

        message,
    };
    // console.log(data)

    const messageApi = `https://jade-encouraging-cougar.cyclic.cloud/api/v1/message`;

    const setPostman = {
        method:'POST',

        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    }

    fetch(messageApi,setPostman)

    .then((response)=>{
        return response.json();
    })
    .then((message)=>{
        console.log(message)
    })
})
