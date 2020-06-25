const school = document.querySelector("#school");
const budget = document.querySelector(".budget");
const form = document.querySelector("#search");
// const signUp = document.querySelector(".signup");
// const signOut = document.querySelector("#signOut");
// const userName = document.querySelector(".userName");

eventListener();



function eventListener() {
  form.addEventListener("submit", search);
  budget.addEventListener("change", Budget);
  // signUp.addEventListener("click", signIN);
  // signOut.addEventListener("click", signOUT);
}

let budgetValue;

function Budget(e) {
  budgetValue = budget.value;
}

//Fetching data from Json/Api
function images() {
  var API_KEY = "17201394-2c25b09720620fe3bab7a0f30";
  var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(school.value);

  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      if (data.hits == 0) {
        document.querySelector(".card-group").innerHTML = "";
        document.querySelector(".card-group").innerHTML += `
          <div class="alert alert-danger mt-5 offset-sm-2 col-sm-12 col-md-12 mr-lg-5 offset-md-7 offset-lg-11" role="alert">
    <h4 class="text-center"> No search result found </h4>`;
      } else {
        document.querySelector("#perfect").style.marginTop = "50px";
        document.querySelector(".card-group").innerHTML = "";
        data.hits.forEach((image) => {
          document.querySelector(".card-group").innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 offset-sm-2 offset-md-0 p-3">
        <div class="card" style="width: 18rem;">
          <img src="${image.userImageURL}" class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Name: <span class="font-weight-bolder"> ${image.tags} </span>  <br> 
        <abbr title="Telephone">Tel: <a href="tel:+2562501258">(256)2501258</a></abbr> <br>
            <abbr title="Mail">Email: <a href="mailto:example@mail.com">example@mail.com</a></abbr>      
            </p>
          </div>
        </div>
        </div>`;
        });
        document.querySelector('footer').innerHTML +=`
        <h5><a class="git" href="https://github.com/stavio12" target="_blank" ><i class="fa fa-github text-white" aria-hidden="true"></i> Kobla Stavio</a></h5>
        <h6 >@2020 All rights reserved</h6>
      `
      }
    })
    .catch((error) => console.error(error));
}

function search(e) {
  e.preventDefault();

  images();

  form.reset();
}

