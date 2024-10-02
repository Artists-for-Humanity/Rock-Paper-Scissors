const selectionButtons = document.querySelectorAll("[data-selection]");
const finalColumn = document.querySelector("[data-final-column]");
const yourScoreSpan = document.querySelector("[data-your-score]");

// Define a const variable for the computer score span similar to the player score span above
/*** ADD CODE HERE***/
//const Myscore = document.querySelector("[data-your-score]");
const Computerscore = document.querySelector("[data-computer-score]");
const SELECTIONS = [
  {
    name: "rock",
    emoji: "✊",
    beats: "scissors",
    
   }, 
  { name: "scissors",
    emoji: "✌️",
    beats: "paper",

  },
  { name: "paper",
    emoji: "✋",
    beats: "rock",
  }

];

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dataset.selection;
  

    const selection = SELECTIONS.find(
      (selection) => selection.name === selectionName
    );
    makeSelection(selection);
  });
});

function makeSelection(playerselection) {
  console.log(playerselection.beats)
  // Clear previous result elements
  document
    .querySelectorAll(".result-selection")
    .forEach((result) => result.remove());
  console.log(parseInt(yourScoreSpan.innerHTML))
  let computerSelection
  if ((parseInt(yourScoreSpan.innerHTML) - parseInt(Computerscore.innerHTML)) > -100){
    console.log("initiate hackz")
    // When initiate hackz computer looks at player's selection
    console.log(playerselection.name)
    // picks the name that includes what beats the player's selected name 
    computerSelection = SELECTIONS
    for (let optionAddress in SELECTIONS) {
      let option = SELECTIONS[optionAddress];
      if (playerselection.name === option.beats){

        computerSelection = option
      }
    } 
  } 
  else { computerSelection = randomSelection();
  }

  
  
  const yourWinner = isWinner(playerselection, computerSelection);
  
  
  const computerWinner = iscomputerWinner(computerSelection, playerselection);
  

  // Add a function call for addSelectionResult function that displays the computer's selection
  addSelectionResult(computerSelection, computerWinner);
  /*** ADD CODE HERE***/
  


// Add an if condition that checks if the computer is the winner AND increments its score
  if (yourWinner) incrementScore(yourScoreSpan);
  if (computerWinner) incrementScore(Computerscore);
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

function isWinner(playerselection, computerSelection) {
  return playerselection.beats === computerSelection.name;
}

function iscomputerWinner(computerSelection, playerselection) {
  return computerSelection.beats === playerselection.name;
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length);
  return SELECTIONS[randomIndex];
}
