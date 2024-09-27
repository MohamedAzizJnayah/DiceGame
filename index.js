import confetti from "https://cdn.skypack.dev/canvas-confetti";

var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

switch (player1) {
  case 1:
    document
      .querySelectorAll("div.FirstPlayer svg")[0]
      .removeAttribute("hidden");

    break;
  case 2:
    document
      .querySelectorAll("div.FirstPlayer svg")[1]
      .removeAttribute("hidden");
    break;
  case 3:
    document
      .querySelectorAll("div.FirstPlayer svg")[2]
      .removeAttribute("hidden");
    break;
  case 4:
    document
      .querySelectorAll("div.FirstPlayer svg")[3]
      .removeAttribute("hidden");
    break;
  case 5:
    document
      .querySelectorAll("div.FirstPlayer svg")[4]
      .removeAttribute("hidden");
    break;
  default:
    document
      .querySelectorAll("div.FirstPlayer svg")[5]
      .removeAttribute("hidden");
}
switch (player2) {
  case 1:
    document
      .querySelectorAll("div.SecondePlayer svg")[0]
      .removeAttribute("hidden");
    break;
  case 2:
    document
      .querySelectorAll("div.SecondePlayer svg")[1]
      .removeAttribute("hidden");
    break;
  case 3:
    document
      .querySelectorAll("div.SecondePlayer svg")[2]
      .removeAttribute("hidden");
    break;
  case 4:
    document
      .querySelectorAll("div.SecondePlayer svg")[3]
      .removeAttribute("hidden");
    break;
  case 5:
    document
      .querySelectorAll("div.SecondePlayer svg")[4]
      .removeAttribute("hidden");
    break;
  default:
    document
      .querySelectorAll("div.SecondePlayer svg")[5]
      .removeAttribute("hidden");
}
if (player1 > player2) {
  document.querySelector("h1").innerHTML = "Player 1 is Wins !";
  confetti();
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 is Wins !";
  confetti();
} else {
  document.querySelector("h1").innerHTML = "Equality !";
}
