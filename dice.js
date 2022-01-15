$("#dice_btn").click(function() {

  let rand1 = giveRandomNumber();
  let rand2 = giveRandomNumber();
  $("#dice1_img").attr("src", "images/dice" + rand1 + ".png");
  $("#dice2_img").attr("src", "images/dice" + rand2 + ".png");

  showWinner(rand1, rand2);

});

function giveRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function showWinner(rand1, rand2) {
  if (rand1 === rand2) {
    $(".title").text("Draw!");
  } else if (rand1 > rand2) {
    $(".title").text("Player 1 Won!");
  } else {
    $(".title").text("Player 2 Won!");
  }
}
