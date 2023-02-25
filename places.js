"use strict";

import { placesCards } from "./placesdata.js";
var cardIndex = placesCards;
var cardContainer = document.getElementById("cardcontainer");
var allCards = cardContainer.innerHTML;
var navBox = document.getElementById("sidenav");
var cardPlace = document.getElementById("cardcontainer");

setupPlaces();

function setupPlaces() {
  let navList = navBox.innerHTML;
  for (let k in cardIndex) {
    var newItem = document.createElement("li");
    newItem.setAttribute("id", k);
    cardPlace.appendChild(newItem);
  }
  for (let k in cardIndex) {
    let cardURL = cardIndex[k]["url"];
    let cardName = cardIndex[k]["name"];
    let cardTagline = cardIndex[k]["tagline"];
    let cardDesc = cardIndex[k]["blurb"];
    let newLI = document.getElementById(k);
    let newImage = document.createElement("img");
    newImage.setAttribute("src", cardURL);
    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "cardinfo");
    infoDiv.setAttribute("id", k + "CardInfo");

    let sumDiv = document.createElement("div");
    sumDiv.setAttribute("class", "cardsum");
    sumDiv.setAttribute("id", k + "CardSum");
    sumDiv.innerHTML = "<h2>" + cardName + "</h2><h3>" + cardTagline + "</h3>";
    let descDiv = document.createElement("div");
    descDiv.setAttribute("class", "carddetail");
    descDiv.setAttribute("id", k + "CardDetail");
    descDiv.innerHTML = cardDesc;

    newLI.appendChild(newImage);
    newLI.appendChild(infoDiv);
    infoDiv.appendChild(sumDiv);
    infoDiv.appendChild(descDiv);

    navList += "<a href='#" + k + "'>" + cardIndex[k]["name"] + "</a>";
  }
  navBox.innerHTML = navList;
}

// allHTML =
//   allHTML +
//   "<li id='" +
//   k +
//   "'><img src='" +
//   placesCards[k]["url"] +
//   "' /><div class='cardinfo'><div class='cardsum'><h2>" +
//   placesCards[k]["name"] +
//   "</h2><h3>" +
//   placesCards[k]["tagline"] +
//   "</h3></div><div class='carddetails'><p>" +
//   placesCards[k]["blurb"] +
//   "</p></div></div></li>";
