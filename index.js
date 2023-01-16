// https://deezerdevs-deezer.p.rapidapi.com/search?q=metalica

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d7e0b3adbbmshec0f5c587f1879dp127e0fjsnb1e48cddb44b",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

let differentArtistVar =
  "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const getData = (artistVar) => {
  fetch(differentArtistVar + artistVar, options)
    .then((rawData) => rawData.json())
    .then((songs) => {
      createCard(songs.data);
      modalContent(songs.data);
    })
    .catch((error) => console.log(error));
};

const createCard = (album) => {
  let container = document.querySelector("#metalica");
  container.innerHTML += `<h1>${album[3].artist.name}</h1>`;
  for (let i = 0; i < album.length; i++) {
    const element = album[i];
    container.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img class="card-img-top" src="${element.album.cover}" alt="picture">
                <div class="card-body">
                <h5 class="card-title text-center">${element.artist.name}</h5>
                <h5 class="card-title text-center">${element.title}</h5>
                </div>
            </div>
            </div>`;
  }
};

const countFunc = () => {
  let count = document.querySelectorAll(".card-body");
  console.log(`The number of albums on the page is ${count.length}`);
};

const modalContent = (songs) => {
  let modal = document.querySelector(".modal-body ol");
  for (let i = 0; i < songs.length; i++) {
    const element = songs[i];
    modal.innerHTML += `<li>${element.title}</li>`;
  }
  let buttonModal = document.querySelector(".btn-primary");
  buttonModal.addEventListener("click", modalContent);
};

window.onload = getData("metalica");
let buttonCount = document.querySelector(".btn-success");
buttonCount.addEventListener("click", countFunc);
