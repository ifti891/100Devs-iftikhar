
  // const colorPurple = window.speechSynthesis;
  // const colorGreen = window.speechSynthesis;
  // const colorBlue = window.speechSynthesis;
  // const colorGold = window.speechSynthesis;


// document.getElementById("purple").onclick = partyPurple
// document.getElementById("green").onclick = partyGreen
// document.getElementById("blue").onclick = partyBlue
// document.getElementById("gold").onclick = partyGold


const colorPurple = window.speechSynthesis;
const colorGreen = window.speechSynthesis;
const colorBlue = window.speechSynthesis;
const colorGOld = window.speechSynthesis;


document.getElementById("purple").onClick = partyPurple
document.getElementById("green").onclick = partyGreen
document.getElementById("blue").onClick = partyBlue
document.getElementById("gold").onclick = partyGold


function partyPurple (){
  const purple = document.querySelector("body").style.backgroundColor = "purple"
  const white = document.querySelector("body").style.color = "white"

  let speakPurple = new speechSynthesisUtterance(purple)

  colorPurple.speak(speakPurple)
}

function partyGreen(){
  const green = document.querySelector("body").style.backgroundColor = "green"
  const white = document.querySelector("body").style.color = "white"

  let speakGreen = new speechSynthesisUtterance(green)

  colorGreen.speak(speakGreen)
}

function partyBlue(){
  const blue = document.querySlector("body").style.backgroundColor = "blue"
  const white = document.querySelector("body").style.color = "white"

  let speakBlue = new speechSynthesisUtterance(blue)

  colorBlue.speak(speakBlue)
}

function partyGold(){
  const gold = document.querySelector("body").style.backgroundColor = "gold"
  const  white = document.querySelector("body").style.color = "white"

  let speakGold = new speechSynthesisUtterance(gold)

  colorGold.speak(speakGold)
}




// function partyPurple(){
//   const purple = document.querySelector("body").style.backgroundColor = "purple"
//   const white = document.querySelector("body").style.color = "white"

//   let speakPurple = new SpeechSynthesisUtterance(purple)

//   colorPurple.speak(speakPurple);
// }


// function partyGreen(){
//   const green = document.querySelector("body").style.backgroundColor = "green"
//   const white = document.querySelector("body").style.color = "white"

//   let speakGreen = new SpeechSynthesisUtterance(green)

//   colorGreen.speak(speakGreen);

// }

// function partyBlue(){
//   const blue = document.querySelector("body").style.backgroundColor = "blue"
//   const white = document.querySelector("body").style.color = "white"

//   let speakBlue = new SpeechSynthesisUtterance(blue)

//   colorBlue.speak(speakBlue);
// }

// function partyGold(){
//   const gold = document.querySelector("body").style.background = "gold"

//   const white = document.querySelector("body").style.color = "white"

//   let speakGold = new SpeechSynthesisUtterance(gold)

//   colorGold.speak(speakGold)
// }




// const colorPurple = window.speechSynthesis;
// const colorGreen = window.speechSynthesis;
// const colorBlue = window.speechSynthesis;
// const colorGold = window.speechSynthesis;



// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue
// document.getElementById('gold').onclick = partyGold


// function partyPurple() {
//   const purple =  document.querySelector('body').style.backgroundColor = 'purple'
//   const white = document.querySelector('body').style.color = 'white'

//   let speakPurple = new SpeechSynthesisUtterance(purple) 

//   colorPurple.speak(speakPurple);
// }

// function partyGreen() {
//   const green = document.querySelector('body').style.backgroundColor = 'green'
//   const white =  document.querySelector('body').style.color = 'white'
//   let speakGreen = new SpeechSynthesisUtterance(green)

//   colorGreen.speak(speakGreen);
// }

// function partyBlue() {
//   const blue = document.querySelector('body').style.backgroundColor = 'blue'
//   const white = document.querySelector('body').style.color = 'white'

//   let speakBlue = new SpeechSynthesisUtterance(blue)

//   colorBlue.speak(speakBlue);
// }

// function partyGold(){
//   const gold = document.querySelector('body').style.backgroundColor = 'gold'
//   const white = document.querySelector('body').style.color = 'white'

//   let speakGold = new SpeechSynthesisUtterance(gold)

//   colorGold.speak(speakGold);
// }