# Rock-Paper-Scissors
HTML CSS JavaScript game for SquiggleConf volunteering event


## Instructions for Adding Code in HTML and JavaScript

### For HTML:

In the HTML file, you might see a comment like this:

```html
<!-- ADD CODE HERE -->
```

You would add your HTML code right where the comment is. For example, if you're adding a button for the game, you would replace the comment with:

```html
<button class="selection" data-selection="rock">✊ Rock</button>
```

### For JavaScript:

In the JavaScript file, you might see a comment like this:

```javascript
/*** ADD CODE HERE ***/
```

You would add your JavaScript code right at that spot. For example, if you wanted to add a `console.log` to track a variable, you would replace the comment with:

```javascript
console.log("Rock selected!");
```

### Example Instructions:

- **HTML:** Add your buttons or other elements in your HTML file where you see `<!-- ADD CODE HERE -->`.
  
- **JavaScript:** Add your logic, like event listeners or functions, in the JavaScript file where you see `/*** ADD CODE HERE ***/`.

This way, you know exactly where to insert your code to make your program work correctly!


## Understanding `console.log` in JavaScript

**Purpose of `console.log`:** In JavaScript, `console.log` is used to display the value of a variable or message in the browser’s console, helping you understand what your code is doing at different points.

### Example from a Rock-Paper-Scissors Game

Here's an example from the rock-paper-scissors game where `console.log(selectionName);` is used to show which choice the player made:

```javascript
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection;
        console.log(selectionName);  // This will print "rock", "paper", or "scissors" based on the player's choice
        const selection = SELECTIONS.find(selection => selection.name === selectionName);
        makeSelection(selection);
    })
});
```

### What does it do?

In this example, every time the player clicks a button, `console.log(selectionName);` will print their choice ("rock", "paper", or "scissors") to the console so you can see which option they selected.


## Understanding `data-selection` Attribute in HTML

In this HTML line:

```html
<button class="selection" data-selection="rock">✊</button>
```

## What is `data-selection`?

- **`data-selection`** is a special kind of HTML attribute called a **custom data attribute**.

### What does it do?

- The `data-selection="rock"` part is like a label attached to the button that holds extra information, in this case, the word **"rock"**.
- You won't see this label on the page, but it's useful for making the button more informative behind the scenes, especially when using JavaScript.

### Example:

While making our game of rock-paper-scissors. Each button might represent one of the choices:

- One button has **"rock"** (`data-selection="rock"`).
- Another has **"paper"** (`data-selection="paper"`).
- Another has **"scissors"** (`data-selection="scissors"`).

The **`data-selection`** attribute allows the game to know which choice the player clicked on.

### How would it be used in JavaScript?

When the player clicks a button, the game can look at the `data-selection` to figure out which choice was made. Here’s an example of how it works:

```javascript
document.querySelector('.selection').addEventListener('click', function() {
  const choice = this.getAttribute('data-selection');
  console.log(choice);  // This will print "rock" in the console when the button is clicked
});
```

### Summary

So, **`data-selection`** is a way to store extra information on an element (like a button) that can be used to make things like games or interactive web pages work!



## Credits

Starter code uses this codepen https://codepen.io/sameera2/pen/YzBPjxB
