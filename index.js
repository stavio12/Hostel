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
function hostels() {
  Budget();

  var firebaseConfig = {
    apiKey: "#",
    authDomain: "#",
    databaseURL: "#",
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var db = firebase.database();

  var university = db.ref();

  university.on("value", (snap) => {
    let price;
    let images;
    snap.forEach((data) => {
      var dataKey = data.key;
      var dataInfo = data.val();

      //Comparing user input to database key to get the right university
      if (dataKey == school.value) {
        document.querySelector("#perfect").style.marginTop = "50px";
        document.querySelector(".card-group").innerHTML = "";
        dataInfo[school.value].map((info) => {
          //Looping through images array
          // info.images.forEach((image) => {
          //   images = image;
          // });
          // console.log(images);

          //comparing user input to database figures
          if (info.budget <= 300 && budgetValue < 300) {
            price = info.budget;
          } else if (info.budget <= 600 && budgetValue <= 600) {
            price = info.budget;
          } else if (info.budget >= 599 && budgetValue > 599) {
            price = info.budget;
          }
          document.querySelector(".card-group").innerHTML += `
          <div class="col-12 col-md-6 col-lg-4 offset-sm-2 offset-md-0 p-3">
            <div class="card" style="width: 20rem;">
            <a href="#" data-toggle="modal" data-target="#staticBackdrop"> <img src="${info.previewImage}" class="card-img-top" alt="..."></a> 
            <div class="card-body">
                <p class="card-text" >Name: <span class="font-weight-bolder"> ${info.hostelName} </span>
                <span class="price float-right p-2 text-white rounded font-weight-bolder" style="background:#252E56 ;">GHC ${price}</span>
                   <br> ${info.location} . <abbr title="Telephone"><a href="tel:+2562501258">${info.contact}</a></abbr> <br>
                </p>
                <p>${info.overview}</p>
              </div>
            </div>
            </div>`;

          document.querySelector(".carousel").innerHTML = `
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="${info.images}" class="d-block w-100" alt="...">
            </div>
            </div>
            `;

          document.querySelector("footer").innerHTML = `
            <h5><a class="git" href="https://github.com/stavio12" target="_blank" ><i class="fa fa-github text-white" aria-hidden="true"></i> Kobla Stavio</a></h5>
            <h6 >@2020 All rights reserved</h6>
          `;
        });
      } else {
        document.querySelector(".card-group").innerHTML = "";
        document.querySelector(".card-group").innerHTML += `
              <div class="alert alert-danger mt-5 offset-sm-2 col-sm-12 col-md-12 mr-lg-5 offset-md-7 offset-lg-11" role="alert">
        <h4 class="text-center"> No search result found </h4>`;
        document.querySelector("footer").innerHTML = "";
      }
    });
  }),
    (error) => {
      console.log("Error", error);
    };
}

// function hosteldata() {

function search(e) {
  e.preventDefault();
  // Budget();

  hostels();

  // console.log(budgetValue);

  // form.reset();
}
