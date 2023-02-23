"use strict";

import { peopleCards } from "./peopledata.js";
var peopleIndex = peopleCards;
var cardContainer = document.getElementById("cardcontainer");
var allCards = cardContainer.innerHTML;
var navBox = document.getElementById("sidenav");

var cardType = document.getElementById("callcards").getAttribute("handoff");

console.log(cardType);
// if ((handoff = "people")) {
//   setupPeople();
// }

function setupPeople() {
  var allHTML = allCards;
  var navList = navBox.innerHTML;
  for (var k in peopleIndex) {
    console.log(k);
    allHTML =
      allHTML +
      "<li id='" +
      k +
      "'><img src='" +
      peopleCards[k]["url"] +
      "' /><div class='cardinfo'><h2>" +
      peopleCards[k]["name"] +
      "</h2><h3>" +
      peopleCards[k]["tagline"] +
      "</h3><p>" +
      peopleCards[k]["blurb"] +
      "</p></div></li>";

    navList += "<a href='#" + k + "'>" + peopleCards[k]["name"] + "</a>";
    console.log(navList);
  }

  cardContainer.innerHTML = allHTML;
  navBox.innerHTML = navList;
}
