"use strict";

import { placesCards } from "./placesdata.js";
var cardIndex = placesCards;
var cardContainer = document.getElementById("cardcontainer");
var allCards = cardContainer.innerHTML;
var navBox = document.getElementById("sidenav");
var cardPlace = document.getElementById("cardcontainer");

document.getElementsByTagName("BODY")[0].onresize = function () {
  for (let k in cardIndex) {
    checkRight(document.getElementById(k));
  }
};

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
    newImage.setAttribute("id", k + "Img");

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
    checkRight(newLI);

    navList += "<a href='#" + k + "'>" + cardIndex[k]["name"] + "</a>";
  }
  navBox.innerHTML = navList;
}

function checkRight(boxID) {
  let rectPos = boxID.getBoundingClientRect();
  let rectID = boxID.id;
  let imgID = rectID + "Img";

  // console.log(boxID.id, rectPos.right);
  // console.log(cardContainer.offsetWidth);
  let overlapRight = cardContainer.offsetWidth - rectPos.right;
  let overlapLeft = rectPos.left;

  let fixBox = document.getElementById(imgID);
  console.log(imgID, overlapLeft);

  if (overlapRight < 370) {
    if (overlapLeft < 200) {
      fixBox.style.transformOrigin = "25% 0";
    } else {
      fixBox.style.transformOrigin = "100% 0";
    }
  } else {
    fixBox.style.transformOrigin = "0 0";
  }
  let zoomRatio = Math.round(window.innerWidth / 10) / 100;
  console.log(window.innerWidth);
  console.log(zoomRatio);
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
