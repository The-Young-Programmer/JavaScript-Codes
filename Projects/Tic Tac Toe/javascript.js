// Created by THE YOUNG PROGRAMMER aka NEMONET

let scores = {
   x: 0,
   o: 0
};

function startGame (pl) {
   let player = pl;
   const elm = document.querySelectorAll(".box");
   const finePositions = getFinePositions();
   const position = finePositions[Math.floor(Math.random() * (finePositions.length - 0) + 0)];
   
   if (!pl) {
      player = Math.floor(Math.random() * (3 - 1) + 1);
      switch (player) {
         case 1:
            player = "O";
            break;
         case 2:
            player = "X";
            break;
      }
   }
   
   if (getResult()) {
      return 0;
   }
   
   if (finePositions.length == 9) {
      swal(`Current Player is ${player}`,`${(()=>{
         if (player == "X") {
            return "Tap any box to start ...";
         }
         return "First is Device ,\n then tap any box for next move ...";
      })()}`);
   }
   if (player == "O") {
      const el = elm[position];
      el.setAttribute("o", "");
      startGame("X");
   }
   else {
     document.getElementById("playero").setAttribute("nplayer","");
     document.getElementById("playerx").removeAttribute("nplayer");
      finePositions.forEach((index)=>{
         elm[index].addEventListener("click",addX);
      });
   }
}

function getResult () {
   let x = 0;
   let o = 0;
   let i = 0;
   let winner = "";
   let scoreArr = [];
   const boxes = document.querySelectorAll(".box");
   boxes.forEach((el)=> {
      if (el.hasAttribute("x")) {
         scoreArr.push("X");
      }
      else if (el.hasAttribute("o")) {
         scoreArr.push("O");
      }
      else {
         scoreArr.push(i++);
      }
   });
   const isDone = checkResult(scoreArr);
   if (isDone[0]) {
      scores[isDone[1].toLowerCase()]++;
      updateScores();
      boxes.forEach((el ,index)=>{
         el.removeEventListener("click",addX);
         if (index == isDone[2][0] || index == isDone[2][1] || index == isDone[2][2]) {
            return 0;
         }
         el.setAttribute("out","");
      });
      swal({
        title: `Player ${isDone[1]} Won !`,
        text: "do you want to restart the game ?",
        icon: "success",
        buttons: true
      })
      .then((willDelete) => {
        boxes.forEach((el)=>{
              el.removeAttribute("x");
              el.removeAttribute("o");
              el.removeAttribute("out");
           });
        if (willDelete) {
          startGame();
        } else {
          const playbox = document.getElementById("playbox");
          document.getElementById("playerx").removeAttribute("nplayer");
          document.getElementById("playero").removeAttribute("nplayer");
   
         playbox.style.display = "flex";
          swal("Tap play Button to Start !");
        }
      });
      return true;
   }
}

function checkResult (res) {
   const req = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
   let status = false;
   let pl = "no one";
   let correct = null;
   req.forEach((i)=>{
      if (!status) {
      if (res[i[0]] == "X" && res[i[1]] == "X" && res[i[2]] == "X" ) {
         status = true;
         pl = "X";
         correct = i;
      }
      else if (res[i[0]] == "O" && res[i[1]] == "O" && res[i[2]] == "O" ){
         status = true;
         pl = "O";
         correct = i;
      }
      else if (getFinePositions(). length == 0) {
         status = true;
         pl = "No one";
         correct = [9,9,9];
      }
      }
      return 0;
   });
   return [status , pl ,correct] ;
}

function addX (el) {
   const elm = document.querySelectorAll(".box");
   el.srcElement.setAttribute("x","");
   elm.forEach((el)=>{
      el.removeEventListener("click",addX);
   });
   document.getElementById("playerx").setAttribute("nplayer","");
   document.getElementById("playero").removeAttribute("nplayer");
   setTimeout(function() {
      startGame("O");
   }, 1000);
}

function updateScores () {
  const xbox = document.getElementById("playerx");
  const obox = document.getElementById("playero");
  
  xbox.innerHTML = `<b>Player X</b> : ${scores.x}`;
  obox.innerHTML = `<b>Player O</b> : ${scores.o}`;
}

function getFinePositions () {
   const boxes = document.querySelectorAll(".box");
   let finePositions = [];

   boxes.forEach((el, index) => {
      if (el.hasAttribute("x") || el.hasAttribute("o")) {} else {
         finePositions.push(index);
      }
   });
   return finePositions;
}

window.onload = () => {
   swal("Tap play Button to start !");
document.getElementById("playbtn").onclick = (el) => {
   setTimeout(function() {
     const data = document.getElementById("data");
     
     data.style.display = "flex";
     el.target.parentNode.style.display = "none";
     startGame();
   }, 300);
};
};
