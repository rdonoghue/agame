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
  let pageHeight = pageheight();
  let pageWidth = window.innerWidth;
  let overlapBottom = pageHeight - rectPos.bottom;
  let overlapRight = pageWidth - rectPos.right;
  let overlapLeft = rectPos.left;

  let fixBox = document.getElementById(imgID);

  console.log(imgID + "Right " + overlapRight);

  let xZoom = 0;
  let yZoom = 0;
  if (overlapBottom < 100) {
    yZoom = "100%";
  }
  if (overlapRight < 500 && overlapLeft < 200) {
    xZoom = "50%";
  } else if (overlapRight < 500) {
    xZoom = "100%";
  }

  fixBox.style.transformOrigin = xZoom + " " + yZoom;
}

function pageheight() {
  let body = document.body;
  let html = document.documentElement;
  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return height;
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
