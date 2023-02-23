// Created by Nemonet
// Powered by The Young Programmer


window.onload = function() {


//Setting identifiers to use throughout the code ----->

    var screen1 = document.getElementById("for-screen1");
    var screen2 = document.getElementById("for-screen2");
    var $ = document.getElementById.bind(document); //The Identifier. Hahahaha! ;)
       
       screen1.innerHTML = "0";     //Displays "0" as soon as the page is loaded


//Setting input limit to check errors due to overflow ----->

    var table = document.getElementById("table");
    
    table.onclick = function() {
        if (screen1.innerHTML.length > 15 && screen1.innerHTML != screen2.innerHTML) {
            alert("Maximum input length reached.");
            screen1.innerHTML = screen1.innerHTML.substring(0, screen1.innerHTML.length-1);
        }     // > Backspaces and deletes last character if input is > 15
    }
    
    
//Script for equals button -------------------->

    var equals = document.getElementById("equals");

    equals.onclick = function() {
        try {     // > Checks if syntax is evaluable 
            if (screen1.innerHTML != "=") {
                screen2.innerHTML = eval(screen1.innerHTML); //Returns the result of input
               }
               while (screen2.innerHTML.length > 20) {
                   screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
              }     // > Backspaces and deletes last character if output is > 15
               var colors = ['black', 'brown', 'darkblue', 'darkgreen', 'tomato', 'lightgreen', 'darkorange', 'pink', 'plum', 'mintcream', 'lime', 'cyan', 'magenta', 'deeppink', 'dodgerblue', 'forestgreen', 'goldenrod', 'white', 'indianred', 'indigo', 'orangered', 'red', 'slategrey']
               var bgColorChange = colors[Math.ceil(Math.random() * colors.length)];
               $("for-calc-body").style.background = bgColorChange; // > Randomly changes bgcolor
           } catch(e) {     // > Returns an error if syntax is not evaluable
               screen2.innerHTML = "Syntax Error!";
               screen2.style.color = "red";
               $("table").style.color = "red";
               $("for-screens").style.border = "1px solid red";
               $("marquee").style.color = "red";
               $("for-calc-body").style.background = "black";
               $("for-screens").style.background = "-webkit-radial-gradient(black, black, black, black, black, red)";
           }
           while (screen2.innerHTML.length > 23) { // > Backspaces and deletes last character if output is > 15
               screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
           }
           screen1.style.color = "grey";
           
           //if (/\./.test(screen2.innerHTML))
            //   screen2.innerHTML = Number(screen2.innerHTML).toFixed(13); 
       }


//Script for clear button -------------------->

    var clear = document.getElementById("clear");
   
    clear.onclick = function() {
           screen1.innerHTML = "0";
           screen2.innerHTML = "";
           screen1.style.color = "white";
           screen2.style.color = "skyblue";
           $("table").style.color = "white";
           $("for-screens").style.background = "black";
           $("for-screens").style.border = "1px solid dimgrey";
           $("marquee").style.color = "skyblue";
           $("for-calc-body").style.background = "black";
    }     // > Changes display and output to default



//Script for backspace button -------------------->

    var backspace = document.getElementById("del");
    
    backspace.onclick = function() {
        var screen_1 = document.getElementById("for-screen1").innerHTML;
        var del = screen_1.substring(0,screen_1.length-1);
        
        screen1.innerHTML = del;
        if (screen_1.length == 1) {
               screen1.innerHTML = "0";
        }     // > Checks if input character length is one and then displays "0"
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
        $("for-calc-body").style.background = "black";
    }     // > Backspaces by one and changes display to default
    
    
    
//Script for square root button -------------------->

    var root = document.getElementById("root");
    
    root.onclick = function() {
      try {     // Checks to see if input is evaluable
        var screen_1 = Math.sqrt(eval(screen1.innerHTML));
        var screen_2 = Math.sqrt(eval(screen2.innerHTML));
          
          if (isNaN(eval(screen1.innerHTML)) == false) {
              if (screen1.innerHTML != "=" && screen2.innerHTML == "") {
                  screen2.innerHTML = screen_1;
              } else {
                  if (isNaN(screen2.innerHTML) == false) {
                  screen1.innerHTML = screen_2;
                  screen2.innerHTML = screen_2
                  }
              } 
          }
      } catch(e) {     // Returns error message if input is not evaluable 
              screen2.innerHTML = "Syntax Error!";
              screen2.style.color = "red";
              $("table").style.color = "red";
              $("for-screens").style.border = "1px solid red";
              $("marquee").style.color = "red";
              $("for-calc-body").style.background = "black";
              $("for-screens").style.background = "-webkit-radial-gradient(black, black, black, black, black, red)";
      }
        while (screen2.innerHTML.length > 15 && screen1.innerHTML.length > 15) {
              screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
              screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
          }     // > Backspaces and deletes last character if output of BOTH displays are > 15
          while (screen2.innerHTML.length > 15) {
          screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
          }     // > Backspaces and deletes last character if length of output of ONLY SECOND display is > 15
          screen1.style.color = "grey";
             
        //  if (/\./.test(screen2.innerHTML))
           //    screen2.innerHTML = Number(screen2.innerHTML).toFixed(12);
    }


//Script for square button -------------------->

    var power = document.getElementById("power2");
    
    power.onclick = function() {
      try {     // Checks if...evaluable 
        var screen_1 = Math.pow(eval(screen1.innerHTML), 2);
        var screen_2 = Math.pow(eval(screen2.innerHTML), 2);
        
        if (isNaN(eval(screen1.innerHTML)) == false) {
            if (screen1.innerHTML != "=" && screen2.innerHTML == "") {
                screen2.innerHTML = screen_1;
            } else {
                if (isNaN(screen2.innerHTML) == false) {
                    screen1.innerHTML = screen_2;
                    screen2.innerHTML = screen_2
                }
            } 
        }
      } catch (e) {     // Returns error...if not evaluable 
          screen2.innerHTML = "Syntax Error!";
          screen2.style.color = "red";
          $("table").style.color = "red";
          $("for-screens").style.border = "1px solid red";
          $("marquee").style.color = "red";
          $("for-calc-body").style.background = "black";
          $("for-screens").style.background = "-webkit-radial-gradient(black, black, black, black, black, red)";
      }
        while (screen2.innerHTML.length > 23 && screen1.innerHTML.length > 23) {
            screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces by one if BOTH displays lengths are > 15
        while (screen2.innerHTML.length > 23) {
        screen2.innerHTML = screen2.innerHTML.substring(0,screen2.innerHTML.length-1);
        }     // > Backspaces by one if ONLY SECOND display's length > 15
        screen1.style.color = "grey";
        
     //   if (/\./.test(screen2.innerHTML))
           //    screen2.innerHTML = Number(screen2.innerHTML).toFixed(12);
    }


//Script for other buttons -------------------->
    
    var $ = document.getElementById.bind(document);     //The Identifier! Hahahaha! :P No jQuery ;) As declared earlier at the top. No need for it here just a reminder
    
    
    //Key 1 ---------->
    
    $("1").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "1" only if first display is == "0"
               screen1.innerHTML = "1";
        } else {
            screen1.insertAdjacentHTML('beforeend', "1");     //Appends "1" if first display != 0
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "1";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "1" to first display and deletes output of second display
    
    
    //Key 2 ---------->
    
    $("2").onclick = function() {     //Displays "2" if... == "0"
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "2";
        } else {
            screen1.insertAdjacentHTML('beforeend', "2");     //Appends "2" if... !== "0"
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "2";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "2" to first display and deletes output of second display
    
    
    //Key 3 ---------->
    
    $("3").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "3" if... == "0"
               screen1.innerHTML = "3";
        } else {
            screen1.insertAdjacentHTML('beforeend', "3");     //Appends "3" if... != 0
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "3";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "3" to first display and deletes output of second display
    
    
    //Key 4 ---------->
    
    $("4").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "4" if... == "0"
               screen1.innerHTML = "4";
        } else {
            screen1.insertAdjacentHTML('beforeend', "4");     //Appends "4" if... != 0
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "4";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "4" to first display and deletes output of second display
    
    
    //Key 5 ---------->
    
    $("5").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "5" if... == "0"
            screen1.innerHTML = "5";
        } else {
            screen1.insertAdjacentHTML('beforeend', "5"); //Appends "5" if... != "0"
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "5";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "5" to first display and deletes output of second display
    
    
    //Key 6 ---------->
    
    $("6").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "6" if...
            screen1.innerHTML = "6";
        } else {
            screen1.insertAdjacentHTML('beforeend', "6"); //Appends "6" if...
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "6";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "6" to first display and deletes output of second display
    
    
    //Key 7 ---------->
    
    $("7").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "7" if...
            screen1.innerHTML = "7";
        } else {
            screen1.insertAdjacentHTML('beforeend', "7"); //Appends "7" if...
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "7";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "7" to first display and deletes output of second display
    
    
    //Key 8 ---------->
    
    $("8").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "8" if...
            screen1.innerHTML = "8";
        } else {
            screen1.insertAdjacentHTML('beforeend', "8"); //Appends "8" if...
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "8";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "8" to first display and deletes output of second display
    
    
    //Key 9 ---------->
    
    $("9").onclick = function() {
        if (screen1.innerHTML == "0") { //Displays "9" if...
            screen1.innerHTML = "9";
        } else {
            screen1.insertAdjacentHTML('beforeend', "9");     //Appends 9 if...
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "9";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "9" to first display and deletes output of second display
    
    
    //Key 0 ---------->
    
    $("0").onclick = function() {
        if (screen1.innerHTML == "0") {     //Displays "0" if...
            screen1.innerHTML = "0";
        } else {
            screen1.insertAdjacentHTML('beforeend', "0"); //Appends "0" if...
        }
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "0";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Displays or appends "0" to first display and deletes output of second display
    
    
    //Plus button ---------->
    
    $("plus").onclick = function() {
        
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {//Special case; does extract...
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output "+" if extract == "("
        } else {
            screen1.insertAdjacentHTML('beforeend', "+"); //Replaces with "+" if extract == to any of the operators in "while's" condition
        }
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
            screen1.innerHTML = Ans + "+";
        }     // > Appends operator to the result in second display
        screen1.style.color = "white";
        screen2.innerHTML = "";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends or replaces with "+" and deletes output of second display and also changes display to default 
    
    
    //Minus button ---------->
    
    $("minus").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        screen1.insertAdjacentHTML('beforeend', "-"); //Appends "-" if extract != to any of the operators in condition else replaces
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
            screen1.innerHTML = Ans + "-";
        }     // > Appends operator to the result in second display
        screen1.style.color = "white";
        screen2.innerHTML = "";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends "-" if extract != to any of the operators in condition & replaces if extract == to any of the operators in condition 
    
    
    //Multiplication button ---------->
    
    $("times").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "0"; //To not output "*" if first display == "0"
        } else if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output "*" if first display == "("
        } else {
            screen1.insertAdjacentHTML('beforeend', "*"); //Appends "*" if first display != "0" && != "("
        }
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
            screen1.innerHTML = Ans + "*";
        }     // > Appends operator to the result in second display
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends "*" if extract != to any of the operators in "while's" condition & replaces if extract == to any of the operators in "while's" condition
    
    
    //Division button ---------->
    
    $("divide").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "0"; //To not output "/" if first display == "0"
        } else if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output "/" if first display == "("
        } else {
            screen1.insertAdjacentHTML('beforeend', "/"); //Appends "/" if first display != "0" && != "("
        }
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
            screen1.innerHTML = Ans + "/";
        }     // > Appends operator to the result in second display
        screen2.innerHTML = ""; 
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends "/" if extract != to any of the operators in condition & replaces if extract == to any of the operators in condition
    
    
    //Modulo button ---------->
    
    $("modulo").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "0"; //To not output "%" if first display == "0"
        } else if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output "%" if first display == "("
        } else {
            screen1.insertAdjacentHTML('beforeend', "%"); //Appends "%" if first display != "0" && != "("
        }
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
        screen1.innerHTML = Ans + "%";
        }     // > Appends operator to the result in second display
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends "%" if extract != to any of the operators in "while's" condition & replaces if extract == to any of the operators in "while's" condition
    
    
    //Brace Open button ---------->
    
    $("braceopen").onclick = function() {
        while (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to operator in condition
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "("; //To output "(" if first display == "0"
               screen2.innerHTML = "";
        } else if (
            screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "+" || 
            screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "-" || 
            screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "/" || 
            screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "*" || 
            screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "%" ) {
                //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.insertAdjacentHTML('beforeend', "("); //Appends "(" if extract == to any of the operators in condition 
        } else {
            screen1.insertAdjacentHTML('beforeend', "*("); //Appends "*(" if first display != "0" && != "(" && != to any of the operators in condition
        }
        while (screen1.innerHTML == "*(") {
            screen1.innerHTML = "(";
            screen2.innerHTML = "";
            break;
        }     // > To not output an extra "(" if first display == "("
        if (screen2.innerHTML != "") {
            screen1.innerHTML = "(";
        }
        screen2.innerHTML = "";
        screen1.style.color = "white";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }
    
    
    //Brace Close button ---------->
    
    $("braceclose").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            ")" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML == "0") {
               screen1.innerHTML = "0"; //To not output ")" if first display == "0"
        } else if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output ")" if first display == "("
        } else {
            screen1.insertAdjacentHTML('beforeend', ")"); //Appends ")" if first display != "0" && != "("
        }
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
        screen1.innerHTML = Ans + ")";
        }     // > Appends operator to the result in second display
        screen2.innerHTML = "";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }     // > Appends ")" if extract != to any of the operators in "while's" condition & replaces if extract == to any of the operators in "while's" condition
 
 
    //Point button ---------->
    
    $("point").onclick = function() {
        while    (  screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "+" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "-" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "/" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "*" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "(" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            ")" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) == 
            "%" || screen1.innerHTML.slice(-1, screen1.innerHTML.length) ==
            "." ) {     //Extracts last character of input and checks if it is equal to any of the operators in condition
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
        }     // > Backspaces if extracted character is equal to any of the operators in the condition
        if (screen1.innerHTML.slice(-1, screen1.innerHTML.length) == "(") {
            screen1.innerHTML = screen1.innerHTML.substring(0,screen1.innerHTML.length-1);
            screen1.insertAdjacentHTML('beforeend', "("); //To not output "." if first display == "("
        }
        screen1.insertAdjacentHTML('beforeend', "."); //Appends "." if first display != "(" && != to any of the operators in "while's" condition
        var Ans = screen2.innerHTML;
        if (screen1.innerHTML != "" && screen2.innerHTML != "" && screen2.innerHTML != "Syntax Error!") {
        screen1.innerHTML = Ans + ".";
        }     // > Appends operator to the result in second display
        screen1.style.color = "white";
        screen2.innerHTML = "";
        screen2.style.color = "skyblue";
        $("table").style.color = "white";
        $("for-screens").style.border = "1px solid dimgrey";
        $("for-screens").style.background = "black";
        $("marquee").style.color = "skyblue";
    }         // > Appends "." if extract != to any of the operators in "while's" condition & replaces if extract == to any of the operators in "while's" condition
    


    
}



























