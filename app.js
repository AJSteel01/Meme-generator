const memeEl = document.getElementById("meme");
const memeBtn = document.getElementById("memeBtn");

memeBtn.addEventListener("click", generateMeme);
generateMeme();


//cleaner and modern way to call APIs B)
// async function generateMeme() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const response = await fetch(" https://meme-api.herokuapp.com/gimme", config);

//   const data = await response.json();

//   memeEl.innerHTML = data.meme;
// }

function generateMeme(){
    const config = {
        "method": "GET",
        // "headers": {
        //     "x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
        // }
    }


// fetch("https://ronreiter-meme-generator.p.rapidapi.com/images",config )
// .then((response) => response.blob())
//         .then((data) => {
//             memeEl.innerHTML =data.meme
//         })};

        //https://api.imgflip.com/get_memes

        fetch("https://api.imgflip.com/get_memes",config )
.then((response) => response.blob())
        .then((data) => {
            memeEl.innerHTML =data.meme
        })};