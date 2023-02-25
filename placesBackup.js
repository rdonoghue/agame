"use strict";

import { placesCards } from "./placesdata.js";
var peopleIndex = placesCards;
var cardContainer = document.getElementById("cardcontainer");
var allCards = cardContainer.innerHTML;
var navBox = document.getElementById("sidenav");

setupPlaces();

function setupPlaces() {
  var allHTML = allCards;
  var navList = navBox.innerHTML;
  for (var k in peopleIndex) {
    console.log(k);
    allHTML =
      allHTML +
      "<li id='" +
      k +
      "'><img src='" +
      placesCards[k]["url"] +
      "' /><div class='cardinfo'><div class='cardsum'><h2>" +
      placesCards[k]["name"] +
      "</h2><h3>" +
      placesCards[k]["tagline"] +
      "</h3></div><div class='carddetails'><p>" +
      placesCards[k]["blurb"] +
      "</p></div></div></li>";

    navList += "<a href='#" + k + "'>" + placesCards[k]["name"] + "</a>";
    console.log(navList);
  }

  cardContainer.innerHTML = allHTML;
  navBox.innerHTML = navList;
}
