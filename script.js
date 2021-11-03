
function ageindays() {
  var birthyear = prompt('enter your birth year');
  var ageindayss = (2020 - birthyear) * 360;
  document.getElementById('final-result').innerHTML = "you are " + ageindayss + " days old";
}
function remove() {
  document.getElementById('final-result').innerHTML = '';
}



//challange 2 photogenerator






function altamash() {
  //var a = document.createElement('a');
  var img = document.createElement('img');
  //a.appendChild(img);
  //a.href = "photo.html";
  img.src = "./images/altamish.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function aamir() {
  var img = document.createElement('img');
  img.src = "./images/aamir.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function kaif() {
  var img = document.createElement('img');
  img.src = "./images/kaif.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function aalima() {
  var img = document.createElement('img');
  img.src = "./images/aalima.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function asjad() {
  var img = document.createElement('img');
  img.src = "./images/asjad.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function faraz() {
  var img = document.createElement('img');
  img.src = "./images/faraz.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function waseem() {
  var img = document.createElement('img');
  img.src = "./images/waseem.jpeg";
  document.getElementById('getphoto').appendChild(img);
}

function bdepapa() {
  var img = document.createElement('img');
  img.src = "./images/bdepapa.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function inzamamul() {
  var img = document.createElement('img');
  img.src = "./images/inzamamul.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function azhar() {
  var img = document.createElement('img');
  img.src = "./images/azhar.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function tanveer() {
  var img = document.createElement('img');
  img.src = "./images/tanveer.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function tau() {
  var img = document.createElement('img');
  img.src = "./images/tau.jpg";
  document.getElementById('getphoto').appendChild(img);
}

function photoremover() {
  var img = document.createElement('img');
  img.src = "./images/altamish.jpg";
  document.getElementById('getphoto').innerHTML = "";
}





// challange 3 rock paper scissor



function rpsgame(yourchoice) {
  var humanchoice, botchoice;
  var humanchoice = (yourchoice.id);

  var botchoice = numbertochoise(randomrpsint());

  var result = decidewinner(humanchoice, botchoice);

  message = finalmessage(result);

  rpsfrontend(yourchoice.id, botchoice, message);
}

if (result = [1, 0]) {
  document.getElementById('id')
}
function randomrpsint() {
  return Math.floor(Math.random() * 3);
}

function numbertochoise(number) {
  return ["rock", "paper", "scissor"][number];
}

function decidewinner(yourchoice, computerchoice) {
  var rpsdatabase = {
    'rock': { 'scissor': 1, 'rock': 1.5, 'paper': 0 },
    'paper': { 'rock': 1, 'paper': 1.5, 'scissor': 0 },
    'scissor': { 'paper': 1, 'scissor': 1.5, 'rock': 0 }
  };
  var yourscor = rpsdatabase[yourchoice][computerchoice];
  var computerscore = rpsdatabase[computerchoice][yourchoice];
  return [yourscor, computerscore]
};


function finalmessage([yourscor, computerscore]) {
  if (yourscor === 0) {
    return { 'message': 'you lost!', 'color': 'red' };
  } else if (yourscor === 1.5) {
    return { 'message': 'you tied!', 'color': 'yellow' };
  } else {
    return { 'message': 'you win!', 'color': 'green' };
  }
};

function rpsfrontend(humanimagechoice, botimagechoice, finalmessage) {
  var imagedatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src
  }
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissor').remove();

  var humandiv = document.createElement('div');
  var botdiv = document.createElement('div');
  var messagediv = document.createElement('div');


  humandiv.innerHTML = "<img src='" + imagedatabase[humanimagechoice] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>"
  messagediv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
  botdiv.innerHTML = "<img src='" + imagedatabase[botimagechoice] + "' height=150px width=150px style='box-shadow: 0px 10px 50px rgba(255,1,1,1);'>"



  document.getElementById('rockpaperscissorgame').appendChild(humandiv);
  document.getElementById('rockpaperscissorgame').appendChild(messagediv);
  document.getElementById('rockpaperscissorgame').appendChild(botdiv);
};

























let allbuttons = document.getElementsByTagName('button');
let copyofallbuttons = [];
for (var i = 0; i < allbuttons.length; i++) {
  copyofallbuttons.push(allbuttons[i].classList[1]);
}

function buttoncolorchange(change) {
  if (change.value === 'red') {
    redcolor();
  } else if (change.value === 'green') {
    greencolor();
  } else if (change.value === 'random') {
    randomcolor();
  } else {
    resetcolor();
  }
};

function redcolor() {
  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add('btn-danger');
  }
};

function greencolor() {
  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add('btn-success');
  }
};

function resetcolor() {
  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(copyofallbuttons[i]);
  }
};

function randomcolor() {

  for (var i = 0; i < allbuttons.length; i++) {
    allbuttons[i].classList.remove(allbuttons[i].classList[1]);
    allbuttons[i].classList.add(copyofallbuttons[Math.floor(Math.random() * copyofallbuttons.length)]);
  }
};





















let blackjackgame = {
  'you': { 'scorespan': '#yourblackjackscore', 'div': '#your-box', 'score': 0 },
  'dealer': { 'scorespan': '#dealerblackjackscore', 'div': '#dealer-box', 'score': 0 },
  'values': { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'A': [1, 11], 'Q': 10, 'K': 10, 'J': 10 },
  'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'Q', 'K', 'J'],
  'wins': 0,
  'loses': 0,
  'draws': 0,
  'isstand': false,
  'turnover': false,
  'standbutton': false,
};



document.querySelector('#hit').addEventListener('click', blackjackhit);
document.querySelector('#stand').addEventListener('click', blackjackstand);
document.querySelector('#deal').addEventListener('click', blackjackdeal);

const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];
const HITSOUND = new Audio('sounds/swish.m4a')
const winsound = new Audio('sounds/cash.mp3')
const lostsound = new Audio('sounds/aww.mp3')
const CARDSVALUES = blackjackgame['values'];


function blackjackhit() {
  if (blackjackgame['isstand'] === false) {
    blackjackgame['standbutton'] = true;
    let cards = randomcards()
    showcard(cards, YOU);
    scoreupdate(cards, YOU);
    showscor(YOU);
  }
};

function randomcards() {
  let randomnumber = Math.floor(Math.random() * blackjackgame['cards'].length)
  return blackjackgame['cards'][randomnumber];
};

function showcard(cards, activeplayer) {
  if (activeplayer['score'] <= 21) {
    let cardimages = document.createElement('img');
    cardimages.src = `images/${cards}.png`;
    document.querySelector(activeplayer['div']).appendChild(cardimages);
    HITSOUND.play();
  }
};

function blackjackdeal(activeplayer) {
  if (blackjackgame['turnover'] === true) {
    let yourimages = document.querySelector(YOU['div']).querySelectorAll('img');

    for (var i = 0; i < yourimages.length; i++) {
      yourimages[i].remove();
    }
    let botimages = document.querySelector(DEALER['div']).querySelectorAll('img');

    for (var i = 0; i < botimages.length; i++) {
      botimages[i].remove();
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector('#yourblackjackscore').textContent = 0;
    document.querySelector('#yourblackjackscore').style.color = 'black';
    document.querySelector('#dealerblackjackscore').textContent = 0;
    document.querySelector('#dealerblackjackscore').style.color = 'black';
    console.log('your-score', YOU['score']);
    console.log('bot-score', DEALER['score']);
    scoreboard();
    letsplay();
    blackjackgame['isstand'] = false;
    blackjackgame['turnover'] = false;
    blackjackgame['standbutton'] = false;
  }
};


function scoreupdate(cards, activeplayer) {
  if (cards === 'A') {
    if (activeplayer['score'] + CARDSVALUES[cards][1] <= 21) {
      activeplayer['score'] += CARDSVALUES[cards][1];
    }
    else {
      activeplayer['score'] += CARDSVALUES[cards][0];
    }
  }
  else {
    activeplayer['score'] += CARDSVALUES[cards];
  }

};

function showscor(activeplayer) {
  if (activeplayer['score'] > 21) {
    document.querySelector(activeplayer['scorespan']).textContent = 'BUST!';
    document.querySelector(activeplayer['scorespan']).style.color = 'red';
  }
  else {
    document.querySelector(activeplayer['scorespan']).textContent = activeplayer['score'];
  }

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
};


async function blackjackstand() {
  if (blackjackgame['standbutton'] === true) {
    blackjackgame['standbutton'] = false;
    while (DEALER['score'] < 16) {
      let cards = randomcards()
      showcard(cards, DEALER);
      scoreupdate(cards, DEALER);
      showscor(DEALER);
      await sleep(1000);
    }

    blackjackgame['turnover'] = true;
    let winner = computewinner();
    showresult(winner);
  }
};

function computewinner() {
  let winner;
  if (YOU['score'] <= 21) {
    if (YOU['score'] > DEALER['score'] || DEALER['score'] > 21) {
      blackjackgame['wins']++;
      winner = YOU;

    } else if (YOU['score'] < DEALER['score']) {
      blackjackgame['loses']++;
      winner = DEALER;

    } else if (YOU['score'] === DEALER['score']) {
      blackjackgame['draws']++;
    }

  } else if (YOU['score'] > 21 && DEALER['score'] <= 21) {
    blackjackgame['loses']++;
    winner = DEALER;

  } else if (YOU['score'] > 21 && DEALER['score'] > 21) {
    blackjackgame['draws']++;
  }
  console.log("wins - ", blackjackgame['wins']);
  console.log("loses - ", blackjackgame['loses']);
  console.log("drews - ", blackjackgame['draws']);
  return winner;

};

function showresult(winner) {
  let message, messagrcolor;
  if (winner === YOU) {
    message = 'You Win!';
    messagrcolor = 'green';
    winsound.play();
  }
  else if (winner === DEALER) {
    message = 'You Lost!';
    messagrcolor = 'red';
    lostsound.play();
  }
  else {
    message = 'You Drew!';
    messagrcolor = 'black';
  }
  document.querySelector('#showresult').textContent = message;
  document.querySelector('#showresult').style.color = messagrcolor;

};

function letsplay() {
  document.querySelector('#showresult').textContent = "LET'S PLAY";
  document.querySelector('#showresult').style.color = "#000";
}

function scoreboard() {
  document.querySelector('#wins').textContent = blackjackgame['wins'];
  document.querySelector('#losses').textContent = blackjackgame['loses'];
  document.querySelector('#draws').textContent = blackjackgame['draws'];
}
