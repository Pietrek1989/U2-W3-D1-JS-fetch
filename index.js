// https://deezerdevs-deezer.p.rapidapi.com/search?q=metalica

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d7e0b3adbbmshec0f5c587f1879dp127e0fjsnb1e48cddb44b",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const getDataFunc = () => {
  fetch(
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica",
    options
  )
    .then((rawData) => rawData.json())
    .then((songs) => {
      createCard(songs.data);
      modalContent(songs.data);
      console.log(songs.data);
    })
    .catch((error) => console.log(error));
};

const createCard = (album) => {
  let container = document.querySelector("#metalica");

  for (let i = 0; i < album.length; i++) {
    const element = album[i];
    container.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card">
                <img class="card-img-top" src="${element.album.cover}" alt="picture">
                <div class="card-body">
                <h5 class="card-title text-center">${element.title}</h5>
                </div>
            </div>
            </div>`;
  }
};

const countFunc = () => {
  let count = document.querySelectorAll(".card-title");
  console.log(`The number of albums on the page is ${count.length}`);
};

getDataFunc();
let buttonCount = document.querySelector(".btn-success");
buttonCount.addEventListener("click", countFunc);

const modalContent = (songs) => {
  let modal = document.querySelector(".modal-body ol");
  for (let i = 0; i < songs.length; i++) {
    const element = songs[i];
    modal.innerHTML += `<li>${element.title}</li>`;
  }
  let buttonModal = document.querySelector(".btn-primary");
  buttonModal.addEventListener("click", modalContent);
};
