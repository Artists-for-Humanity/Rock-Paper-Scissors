const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const computermove = document.querySelector('.computer-choice');
const playermove = document.querySelector(".player-choice");

// Define a const variable for the computer score span similar to the player score span above
/*** ADD CODE HERE***///done//
console.log(computermove)
const computerScoreSpan = document.querySelector("[data-computer-score]");//
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "✋",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  },
  // Add additional SELECTIONS
  /*** ADD CODE HERE***/
  /*** ADD CODE HERE***/
//done//
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    // Add Console log described in the README
    /*** ADD CODE HEREdone***/
    console.log(selectionName);
    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(selection) {
  // Clear previous result elements
  document
    .querySelectorAll(".result-selection")
    .forEach((result) => result.remove());

  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection);
  // Add const variable for that returns the computer as the winner
  /*** ADD CODE HERE***/
  const computerWinner = isWinner(computerSelection, selection);
  //done Add a function call for addSelectionResult function that displays the computer's selection
  addSelectionResult(computerSelection, computerWinner);{
    // console.log(playermove)
    playermove.innerHTML= selection.emoji
  }

  /*** ADD CODE HERE***/
  function addSelectionResult(computerSelection, computerWinner){
    computermove.innerHTML= computerSelection.emoji
    // console.log(computerSelection)
  }


// Add an if condition that checks if the computer is the winner AND increments its score
  if (yourWinner) incrementScore(yourScoreSpan);
  /*** ADD CODE HERE***/
  if (computerWinner) incrementScore(computerScoreSpan);
  console.log({yourWinner,computerWinner})
  console.log(yourScoreSpan)
  console.log(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

function addSelectionResult(selection, winner) {
  const div = document.createElement("div");
  div.innerText = selection.emoji;
  div.classList.add("result-selection");
  if (winner) div.classList.add("winner");
  finalColumn.after(div);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
