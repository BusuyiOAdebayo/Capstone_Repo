/*import { Header, Nav, Main, Footer } from "./components";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;

  addEventListeners();
}

render();

// add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

// array of pictures for gallery
const dogPictures = [
  {
    url:
      "https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "sunglass doggo"
  },
  {
    url:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "mlep"
  },
  {
    url:
      "https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "good boy with stick"
  },
  {
    url:
      "https://images.unsplash.com/photo-1477936432016-8172ed08637e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "black camo doggo"
  },
  {
    url:
      "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "happy boi"
  },
  {
    url:
      "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "eski"
  },
  {
    url:
      "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "doin a confuse"
  },
  {
    url:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "happy little jump boi"
  },
  {
    url:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    title: "running with the dogs"
  }
];

// populating gallery with pictures
const gallerySection = document.querySelector("#gallery");
dogPictures.forEach(pic => {
  let img = document.createElement("img");
  img.src = pic.url;
  img.alt = pic.title;
  gallerySection.appendChild(img);
});

// handle form submission
document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault();
  Array.from(event.target.elements).forEach(el => {
    console.log("Input Type: ", el.type);
    console.log("Name: ", el.name);
    console.log("Value: ", el.value);
  });
});
*/

/*import { Header, Nav, Main, Footer } from "./components";
import {
  AddPicturesToGallery,
  GalleryPictures,
  PrintFormOnSubmit
} from "./lib";

function render() {
  document.querySelector("#root").innerHTML = `
    ${Header()}
    ${Nav()}
    ${Main()}
    ${Footer()}
  `;

  addEventListeners();
}

render();

function addEventListeners() {
  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // populating gallery with pictures
  const gallerySection = document.querySelector("#gallery");
  // using modules to populate gallery with pictures
  AddPicturesToGallery(GalleryPictures, gallerySection);

  // handle form submission with PrintFormOnSubmit module
  const form = document.querySelector("form");
  PrintFormOnSubmit(form);
}*/

// STATE-DRIVEN SPA
/*import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
// const router = new Navigo(window.location.origin);
const router = new Navigo("/");

router
  .on({
    "/": () => render(state.Home),
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();
  addEventListeners(st);
}

function addEventListeners(st) {
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // event listener for the the photo form
  if (st.view === "Register") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
}
*/

// 1. IMPORT STATEMENTS
import { Header, Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

// Added due to WEATHER-MAP API
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

// 2. DECLARE ROUTER
const router = new Navigo(window.location.origin);
// const router = new Navigo("/");

// Move router to the end AND add Router.Hooks

// 3. RENDER FUNCTION
function render(st) {
  document.querySelector("#root").innerHTML = `
    ${Header(st)}
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
  `;
  router.updatePageLinks();

  addEventListeners(st);
}

// 4. EVENT HANDLER FUNCTION FOR EVENT LISTENERS: Is part of the render function
function addEventListeners(st) {
  // add event listeners to Nav items for navigation
  document.querySelectorAll("nav a").forEach(navLink =>
    navLink.addEventListener("click", event => {
      event.preventDefault();
      render(state[event.target.title]);
    })
  );

  // add menu toggle to bars icon in nav bar: Collapsible (Hamburger) nav bar
  document
    .querySelector(".fa-bars")
    .addEventListener("click", () =>
      document.querySelector("nav > ul").classList.toggle("hidden--mobile")
    );

  // event listener for the the photo form
  /*if (st.view === "Form") {
    document.querySelector("form").addEventListener("submit", event => {
      event.preventDefault();
      // convert HTML elements to Array
      let inputList = Array.from(event.target.elements);
      // remove submit button from list
      inputList.pop();
      // construct new picture object
      let newPic = inputList.reduce((pictureObject, input) => {
        pictureObject[input.name] = input.value;
        return pictureObject;
      }, {});
      // add new picture to state.Gallery.pictures
      state.Gallery.pictures.push(newPic);
      render(state.Gallery);
    });
  }
  */
}

// 5. ADD ROUTER HOOKS HERE ...
router.hooks({
  before: (done, params) => {
    const page =
      params && params.hasOwnProperty("page")
        ? capitalize(params.page)
        : "Home";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st.%20louis`
      )
      .then(response => {
        state.Home.weather = {};
        state.Home.weather.city = response.data.name;
        state.Home.weather.temp = response.data.main.temp;
        state.Home.weather.feelsLike = response.data.main.feels_like;
        state.Home.weather.description = response.data.weather[0].main;
        done();
      })
      .catch(err => console.log(err));
  }
});

// 6. ADD ROUTER HERE ...
router
  .on({
    "/": () => render(state.Home),
    ":page": params => render(state[capitalize(params.page)])
  })
  .resolve();
