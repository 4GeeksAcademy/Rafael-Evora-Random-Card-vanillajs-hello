let suits = [
  '<i class="bi bi-diamond-fill"></i>',
  '<i class="bi bi-suit-heart-fill"></i>',
  '<i class="bi bi-suit-club-fill"></i>',
  '<i class="bi bi-suit-spade-fill"></i>'
];

let values = [1,2,3,4,5,6,7,8,9,"J","Q","K"];

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function drawCard() {
  let suit = randomItem(suits);
  let value = randomItem(values);

  // Top-left
  document.getElementById('card-value-top').innerHTML = value;
  document.getElementById('card-suit-top').innerHTML = suit;

  // Bottom-right
  document.getElementById('card-value-bottom').innerHTML = value;
  document.getElementById('card-suit-bottom').innerHTML = suit;

  // Center suit
  document.getElementById('card-suit-center').innerHTML = suit;

  // Color red for hearts & diamonds
  if (suit.includes("heart") || suit.includes("diamond")) {
    document.querySelectorAll('.corner, .center-suit').forEach(el => el.style.color = "red");
  } else {
    document.querySelectorAll('.corner, .center-suit').forEach(el => el.style.color = "black");
  }
}

// Draw first card on page load
drawCard();

// Click on card to refresh
document.querySelector('.playing-card').addEventListener('click', () => {
  drawCard();
});
