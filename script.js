const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");
const computerScoreSpan = document.querySelector("[data-computer-score]");

// Define a const variable for the computer score span similar to the player score span above
/*** ADD CODE HERE***/

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  // Add additional SELECTIONS
  {
  name: "paper",
  emoji: "✋",
  beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✌",
    beats: "paper",
  }

];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    // Add Console log described in the README
    console.log("rockselected");
    /*** ADD CODE HERE***/

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

  // Add a function call for addSelectionResult function that displays the computer's selection
  addSelectionResult(computerSelection, computerWinner);
  console.log({computerWinner, yourWinner,});
  addSelectionResult(selection, yourWinner);

  /*** ADD CODE HERE***/
//   function addSelectionResult() {
// console.log(computerSelection)
//   }
  


// Add an if condition that checks if the computer is the winner AND increments its score
  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(computerScoreSpan); 
console.log({yourScoreSpan, computerScoreSpan})
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
