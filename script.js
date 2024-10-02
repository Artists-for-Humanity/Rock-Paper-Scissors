const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");

// Define a const variable for the computer score span similar to the player score span above
const computerScoreSpan = document.querySelector("[data-computer-score]");

const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
  },
  {
    name: "paper",
    emoji: "📄",
    beats: "rock",
  },
  {
    name: "scissors",
    emoji: "✂️",
    beats: "paper",
  },
];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
    console.log(selectionName)
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
  const computerWinner = true; 
  // Add a function call for addSelectionResult function that displays the computer's selection
  addSelectionResult(computerSelection, computerWinner);
  /*** ADD CODE HERE***/
  


// Add an if condition that checks if the computer is the winner AND increments its score
  if (yourWinner) incrementScore(yourScoreSpan);
  /*** ADD CODE HERE***/
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
