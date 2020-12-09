
let possible = [{
  play: "rock",
  comp: "paper",
  end: "lose",
},
{
  play: "rock",
  comp: "scissors",
  end: "win",
},
{
  play: "rock",
  comp: "lizard",
  end: "win",
},
{
  play: "rock",
  comp: "spock",
  end: "lose",
},
{
  play: "paper",
  comp: "rock",
  end: "win",
},
{
  play: "paper",
  comp: "scissors",
  end: "lose",
},
{
  play: "paper",
  comp: "lizard",
  end: "lose",
},
{
  play: "paper",
  comp: "spock",
  end: "win",
},
{
  play: "scissors",
  comp: "rock",
  end: "lose",
},
{
  play: "scissors",
  comp: "paper",
  end: "win",
},
{
  play: "scissors",
  comp: "lizard",
  end: "win",
},
{
  play: "scissors",
  comp: "spock",
  end: "lose",
},
{
  play: "lizard",
  comp: "rock",
  end: "lose",
},
{
  play: "lizard",
  comp: "paper",
  end: "win",
},
{
  play: "lizard",
  comp: "scissors",
  end: "lose",
},
{
  play: "lizard",
  comp: "spock",
  end: "win",
},
{
  play: "spock",
  comp: "rock",
  end: "win",
},
{
  play: "spock",
  comp: "paper",
  end: "lose",
},
{
  play: "spock",
  comp: "scissors",
  end: "win",
},
{
  play: "spock",
  comp: "lizard",
  end: "lose",
},
]

function rando() {
  let ran = Math.random() * 10
  if (ran < 3 { return "rock" }
  else if (ran < 5) { return "paper" }
  else if (ran < 7) { return "scissors" }
  else if (ran < 9) { return "lizard" }
  else if (ran < 11) { return "spock" }
}

function play(player) {
  let played = player
  let computer = rando()
  let end;
  for (let i = 0; i < possible.length; i++) {
    if (possible[i].play == player && possible[i].comp == computer) { end = possible[i].end }
  }
  if (player == computer) { end = "tie" }
  gameOver(end, computer, played)
}


function gameOver(winner, comp, played) {
  document.getElementById("buttonGroup").classList.add("d-none")
  document.getElementById("endTag").classList.remove("d-none")
  document.getElementById("compPlay").innerText = comp
  document.getElementById("ender").innerText = winner
  document.getElementById("chosen").innerText = played
}

function startOver() {
  document.getElementById("buttonGroup").classList.remove("d-none")
  document.getElementById("endTag").classList.add("d-none")
}



//NOTE Logic of first go.

// function play(player) {
//   console.log(player)
//   let comp = rando()
//   let end;
//   switch (player) {
//     case "rock":
//       comp != "paper" ? end = "win" : end = "lose"
//       break;
//     case "paper":
//       comp != "scissors" ? end = "win" : end = "lose"
//       break;
//     case "scissors":
//       comp != "rock" ? end = "win" : end = "lose"
//       break;
//     default:
//       console.log("nothing worked")
//   }
//   if (player == comp) { end = "tie" }
//   // window.alert(`The computer plays ${comp} you ${end}`)
//   let played = player
//   gameOver(end, comp, played)
// }