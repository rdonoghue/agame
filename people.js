"use strict";

import { peopleCards } from "./peopledata.js";
var peopleIndex = peopleCards;
var cardContainer = document.getElementById("cardcontainer");
var allCards = cardContainer.innerHTML;
var navBox = document.getElementById("sidenav");

document.getElementsByTagName("BODY")[0].onresize = function () {
  checkBottom();
};

setupPeople();
checkBottom();

function setupPeople() {
  var allHTML = allCards;
  var navList = navBox.innerHTML;
  for (var k in peopleIndex) {
    allHTML =
      allHTML +
      "<li id='" +
      k +
      "'><img src='" +
      peopleCards[k]["url"] +
      "' id='" +
      k +
      "Img' /><div class='cardinfo'><h2>" +
      peopleCards[k]["name"] +
      "</h2><h3>" +
      peopleCards[k]["tagline"] +
      "</h3><p>" +
      peopleCards[k]["blurb"] +
      "</p></div></li>";

    navList += "<a href='#" + k + "'>" + peopleCards[k]["name"] + "</a>";
  }

  cardContainer.innerHTML = allHTML;
  navBox.innerHTML = navList;
}

function checkBottom() {
  let mainBox = document.querySelector("main");
  let mainBoxInfo = mainBox.getBoundingClientRect();
  let mainBottom = mainBoxInfo.bottom;
  for (let k in peopleIndex) {
    let thisBox = document.getElementById(k + "Img");
    let boxData = thisBox.getBoundingClientRect();
    let thisBoxBottom = boxData.bottom;
    let bottomDist = mainBottom - thisBoxBottom;
    if (bottomDist < 500) {
      thisBox.style.transformOrigin = "0 100%";
    } else {
      thisBox.style.transformOrigin = "0 0";
    }
  }
}
