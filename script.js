// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
// Array containing image URLs
let cards = [
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/%236.jpeg?v=1710436307865" ,
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/%237.jpeg?v=1710436311862" ,
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/%238.webp?v=1710436315855" ,
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/card%20%233.jpeg?v=1710436320557" ,
"https://cdn.glitch.global/f72b3bc2-66ba-4d1b-b1c5-01916003a0f9/card%20%2314.jpeg?v=1710953824458" ,
"https://cdn.glitch.global/f72b3bc2-66ba-4d1b-b1c5-01916003a0f9/card%20%2313.jpeg?v=1710953816156" ,
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/card%20%2310.jpeg?v=1710436359540",
"https://cdn.glitch.global/da136c11-1306-4ff1-ba3f-bb915d5c48fe/card%20%2312.jpeg?v=1710436363386" ,
];


// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    console.log("Showing the deck...");
    // For of loop
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" + 
            card +
            ")' class='card'>");
         let audio = document.querySelector(".audio");
    audio.play();
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
      game.insertAdjacentHTML("beforeend", "<div style='background-image:url(" + card + ")' class='card'>");
            }
        }
    console.log("Now the deck has " + cards.length + "cards.");
    buttonDouble.style.color = "silver";
let audio = document.querySelector(".audio2");
    audio.play();
};
// Button to Shuffle Cards
buttonShuffle.onclick = function() {
     shuffle(cards);
     game.innerHTML="";
    let i=0;
     console.log("I'm Shuffling the cards!");
     for (let card of cards ) {
         game.insertAdjacentHTML("beforeend", "<div style='background-image: url("  + card + ")' id='" + i + "' class='card'>");
        i = i + 1;
    }
 };

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }
    buttonFlip.style.color = "silver";
};
// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    
});