const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");
// Define a const variable for the computer score span similar to the player score span above
const computerScoreSpan = document.querySelector("[data-computer-score]");

const SELECTIONS = [
  {
    name: "hide",
    emoji: "🫣",
    beats: "fingy",
  },
  // Add additional SELECTIONS
  {
    name: "cry",
    emoji: "🥹",
    beats: "hide",
  },
  {
    name:"fingy",
    emoji:"🫵",
    beats:"cry",
  }
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    // Add Console log described in the README
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
  const computerWinner = isWinner(computerSelection, selection)
  /*** ADD CODE HERE***/

  // Add a function call for addSelectionResult function that displays the computer's selection
  addSelectionResult(computerSelection, computerWinner);
  /*** ADD CODE HERE***/
  addSelectionResult(selection, yourWinner)
  


// Add an if condition that checks if the computer is the winner AND increments its score
  if (yourWinner) incrementScore(yourScoreSpan);
  if(computerWinner) incrementScore(computerScoreSpan);
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
