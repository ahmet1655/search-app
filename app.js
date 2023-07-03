const formWrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const searchInput = document.querySelector("#searchInput")
const buttonWrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")
const imageWrapper = document.querySelector(".image-wrapper")
runEventListener();



function runEventListener() {
    form.addEventListener("submit", search)
    clearButton.addEventListener("click",clear)
}

function clear (){
searchInput.value="";
Array.from(imageWrapper.children).forEach((child)=>child.remove())
}

function search(e) {

 const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {


            Authorization: "Client-ID dys_GQtK6l2s7TeOZuL849It_Sh1q22tRvXxg-ed2vo"

        }
    })
        .then((response) => response.json())
        .then((data) => {
            Array.from(data.results).forEach((image)=>{
               addImage(image.urls.small)
            })
        })
        .catch((error) => console.log(error));

    e.preventDefault();
}

function addImage(url){
const div = document.createElement("div");
div.className="card";

const img = document.createElement("img");
img.setAttribute("src",url);
img.height='400';
img.width='400';

div.append(img);
imageWrapper.append(div);
}

