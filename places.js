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

var myTest = 7;
if (9 > myTest && myTest > 5) {
  console.log("worked as expected");
} else {
  console.log("oh no");
}

setupPlaces();
onscroll = (event) => {
  boxInfo();
  for (let k in cardIndex) {
    checkRight(document.getElementById(k));
  }
};

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

function boxInfo() {
  let boxID = document.getElementById("celestrus");
  let rectPos = boxID.getBoundingClientRect();
  let windowHeight = window.innerHeight;
  let distFromBottom = windowHeight - rectPos.bottom;
  console.log("from bottom: " + distFromBottom);
  console.log("from top: " + rectPos.top);

  let windowWidth = window.innerWidth;
  let fromLeft = rectPos.left;
  let fromRight = windowWidth - rectPos.right;
  console.log("from left: " + fromLeft);
  console.log("from right: " + fromRight);
  console.log(rectPos);
}

function checkRight(boxID) {
  // let rectPos = boxID.getBoundingClientRect();
  let rectID = boxID.id;
  let imgID = rectID + "Img";
  let rectPos = document.getElementById(imgID).getBoundingClientRect();
  let xZoom = 0;
  let yZoom = 0;
  let windowHeight = window.innerHeight;
  let fromBottom = windowHeight - rectPos.top - rectPos.height;
  let fromTop = rectPos.top;
  let windowWidth = window.innerWidth;
  let fromLeft = rectPos.left;
  let fromRight = windowWidth - rectPos.right;
  let fixBox = document.getElementById(imgID);

  if (fromBottom * 1.2 > fromTop && fromTop > fromBottom * 0.8) {
    yZoom = "50%";
  } else if (fromBottom < fromTop) {
    yZoom = "100%";
  } else {
    yZoom = 0;
  }

  if (fromRight >= 500) {
    xZoom = "0";
  } else if (fromLeft >= 500) {
    xZoom = "100%";
  } else if (500 > fromLeft && fromLeft >= 250) {
    xZoom = "50%";
  } else if (250 > fromLeft && fromLeft > 125) {
    console.log("look at me!");
    xZoom = "25%";
  } else {
    xZoom = 0;
  }

  if ((rectID = "celestrus")) {
    console.log(xZoom + " " + yZoom);
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
