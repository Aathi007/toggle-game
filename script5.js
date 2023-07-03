let constarr = [
  {
    name: "hippo",
    icon: '<i class="fa-solid fa-hippo fa-beat"></i>',
  },
  {
    name: "crow",
    icon: '<i class="fa-solid fa-crow fa-beat"></i>',
  },
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog fa-beat"></i>',
  },
  {
    name: "cow",
    icon: '<i class="fa-solid fa-cow fa-beat"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat fa-beat"></i>',
  },
  {
    name: "dragon",
    icon: '<i class="fa-solid fa-dragon fa-beat"></i>',
  },
  {
    name: "hippo",
    icon: '<i class="fa-solid fa-hippo fa-beat"></i>',
  },
  {
    name: "crow",
    icon: '<i class="fa-solid fa-crow fa-beat"></i>',
  },
  {
    name: "dog",
    icon: '<i class="fa-solid fa-dog fa-beat"></i>',
  },
  {
    name: "cow",
    icon: '<i class="fa-solid fa-cow fa-beat"></i>',
  },
  {
    name: "cat",
    icon: '<i class="fa-solid fa-cat fa-beat"></i>',
  },
  {
    name: "dragon",
    icon: '<i class="fa-solid fa-dragon fa-beat"></i>',
  },
];
// console.log(constarr);
shuffleArray();
let gameboard = document.querySelector(".gameboard");
display();
let flippedcards = [];
function shuffleArray() {
  for (let i = constarr.length - 1; i >= 0; i--) {
    const randindex = Math.floor(Math.random() * i);
    let temp = { ...constarr[i] };
    constarr[i] = { ...constarr[randindex] };
    constarr[randindex] = { ...temp };
    // [constarr[i],constarr[randindex]] = [constarr[randindex],constarr[i]];
  }
}
console.log(constarr);
function display() {
  constarr.forEach((val, index, arr) => {
    const cards = document.createElement("div");
    cards.setAttribute("id", index);
    cards.classList.add("cardback");
    cards.classList.add("active");
    gameboard.append(cards);
    cards.addEventListener("click", displaycards);
  });
}
function displaycards() {
  if (flippedcards.length < 2 && this.classList.contains("active")) {
    this.removeEventListener("click", displaycards);
    let index1 = this.getAttribute("id");
    flippedcards.push(this);
    this.classList.remove("cardback");
    this.innerHTML = constarr[index1].icon;
  }
  if (flippedcards.length == 2) {
    setTimeout(checkmatch, 1000);
  }
}
console.log(flippedcards);
function checkmatch() {
  const check1 = flippedcards[0].getAttribute("id");
  const check2 = flippedcards[1].getAttribute("id");
  console.log(constarr[check1], constarr[check2]);
  if (constarr[check1].name === constarr[check2].name) {
    //flippedcards[0].style.border = "none";
    //flippedcards[0].innerHTML = "";
    //flippedcards[0].style.box = "none";
    //flippedcards[1].style.box = "none";
    flippedcards[0].classList.remove("active");
    flippedcards[1].classList.remove("active");
    
    //flippedcards[1].style.border = "none";
    flippedcards[0].style.backgroundColor = "red";
    flippedcards[1].style.backgroundColor = "red";
    //flippedcards[1].innerHTML = "";
  } else {
    flippedcards[0].innerHTML = "";
    flippedcards[0].classList.add("cardback");
    flippedcards[0].addEventListener("click", displaycards);
    flippedcards[1].addEventListener("click", displaycards);
    flippedcards[1].innerHTML = "";
    flippedcards[1].classList.add("cardback");
  }
  flippedcards = [];
}
