var playerIcon;
var botIcon;

xChoice();

function xChoice() {
  document.getElementById("cross").checked = true;
  playerIcon = "X";
  botIcon = "O";
}

function oChoice() {
  document.getElementById("circle").checked = true;
  playerIcon = "O";
  botIcon = "X";
}

function boxMatrix() {
  var box = [];
  for (var i = 1; i <= 9; i++) {
    box.push(document.getElementById(i).innerHTML);
  }
  return box;
}

function emptyBoxes() {
  var boxValueCount = 0;
  for (var i = 1; i <= 9; i++) {
    if (document.getElementById(i).innerHTML === "") {
      boxValueCount++;
    }
  }
  return boxValueCount;
}

function clicker(id) {
  if (emptyBoxes() == 1) {
    me(id);
    checker();
    alert("Tie");
    resetter();
  } else {
    me(id);
    checker();
    robot();
    checker();
  }
}

function me(id) {
  while (document.getElementById(id).innerHTML !== "") {
    clicker();
  }
  document.getElementById(id).innerHTML = playerIcon;
}

function robot() {
  var rand = Math.floor(Math.random() * 9) + 1;
  while (document.getElementById(rand).innerHTML !== "") {
    rand = Math.floor(Math.random() * 9) + 1;
  }
  document.getElementById(rand).innerHTML = botIcon;
}

function resetter() {
  var i;
  for (i = 1; i <= 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  throw "All scripts stopped";
}

function strip(symbol, array) {
  var strippedArray = [];
  for (var i = 0; i < 9; i++) {
    if (array[i] == symbol) {
      strippedArray.push("");
    } else {
      strippedArray.push(array[i]);
    }
  }
  return strippedArray;
}

function checker() {
  if (
    (boxMatrix()[0] == playerIcon &&
      boxMatrix()[1] == playerIcon &&
      boxMatrix()[2] == playerIcon) ||
    (boxMatrix()[3] == playerIcon &&
      boxMatrix()[4] == playerIcon &&
      boxMatrix()[5] == playerIcon) ||
    (boxMatrix()[6] == playerIcon &&
      boxMatrix()[7] == playerIcon &&
      boxMatrix()[8] == playerIcon) ||
    (boxMatrix()[0] == playerIcon &&
      boxMatrix()[3] == playerIcon &&
      boxMatrix()[6] == playerIcon) ||
    (boxMatrix()[1] == playerIcon &&
      boxMatrix()[4] == playerIcon &&
      boxMatrix()[7] == playerIcon) ||
    (boxMatrix()[2] == playerIcon &&
      boxMatrix()[5] == playerIcon &&
      boxMatrix()[8] == playerIcon) ||
    (boxMatrix()[0] == playerIcon &&
      boxMatrix()[4] == playerIcon &&
      boxMatrix()[8] == playerIcon) ||
    (boxMatrix()[2] == playerIcon &&
      boxMatrix()[4] == playerIcon &&
      boxMatrix()[6] == playerIcon)
  ) {
    alert("You win");
    resetter();
  } else if (
    (boxMatrix()[0] == botIcon &&
      boxMatrix()[1] == botIcon &&
      boxMatrix()[2] == botIcon) ||
    (boxMatrix()[3] == botIcon &&
      boxMatrix()[4] == botIcon &&
      boxMatrix()[5] == botIcon) ||
    (boxMatrix()[6] == botIcon &&
      boxMatrix()[7] == botIcon &&
      boxMatrix()[8] == botIcon) ||
    (boxMatrix()[0] == botIcon &&
      boxMatrix()[3] == botIcon &&
      boxMatrix()[6] == botIcon) ||
    (boxMatrix()[1] == botIcon &&
      boxMatrix()[4] == botIcon &&
      boxMatrix()[7] == botIcon) ||
    (boxMatrix()[2] == botIcon &&
      boxMatrix()[5] == botIcon &&
      boxMatrix()[8] == botIcon) ||
    (boxMatrix()[0] == botIcon &&
      boxMatrix()[4] == botIcon &&
      boxMatrix()[8] == botIcon) ||
    (boxMatrix()[2] == botIcon &&
      boxMatrix()[4] == botIcon &&
      boxMatrix()[6] == botIcon)
  ) {
    alert("O win");
    resetter();
  }
}
