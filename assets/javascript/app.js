var correctans = 0;
var incorrectans = 0;
var timer = 30;
var intervalId;
var totalQ = 4;
var unanswered = 0;

game = {
    q1 : 1,
    ans1 : "Brazil",
    q2 : 2,
    ans2 : "Belgium",
    q3 : 3,
    ans3 : "Harry KANE",
    q4 : 4,
    ans4 : "Kylian Mbappe",

}

$("#start").on("click", function(){
    document.getElementById("start").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("submit").style.display = "block";
    run();
})







function run() {
    intervalId = setInterval(time, 1000);       
      
  }

function time() {

    timer= timer-1;

    document.getElementById("count").textContent = timer;

    if(timer === 0){
        alert("Time Up!");
        clearInterval(intervalId);
        ans();
        final();
        document.getElementById("main").style.display = "none";
        document.getElementById("submit").style.display = "none";

    }
  }


  function ans(){

            var a=  document.getElementsByClassName(game.q1);
            var b=  document.getElementsByClassName(game.q2);
            var c=  document.getElementsByClassName(game.q3);
            var d=  document.getElementsByClassName(game.q4);

            for (var i = 0; i<4; i++){
                // console.log(a[i].checked);
                // console.log(b[i].checked);
                // console.log(c[i].checked);
                // console.log(d[i].checked);
                // console.log(b[i].value);
                // console.log(game.ans2);
                if(a[i].checked==true && a[i].value == game.ans1){
                    //console.log(a[i].value);
                    correctans++;
                    
                }
                if(a[i].checked==true && a[i].value != game.ans1){
                   // console.log(a[i].value)
                    incorrectans++;
                }

                if(b[i].checked==true && (b[i].value == game.ans2)){
                    //console.log(b[i].value);
                    correctans++;
                   // console.log(correctans);
                    
                }
                if(b[i].checked==true && b[i].value != game.ans2){
                   // console.log(b[i].value)
                    incorrectans++;
                }

                if(c[i].checked==true && c[i].value == game.ans3){
                   // console.log(c[i].value);
                    correctans++;
                    
                }
                if(c[i].checked==true && c[i].value != game.ans3){
                   // console.log(c[i].value)
                    incorrectans++;
                }

                if(d[i].checked==true && d[i].value == game.ans4){
                  //  console.log(d[i].value);
                    correctans++;
                    
                }
                if(d[i].checked==true && d[i].value != game.ans4){
                  //  console.log(d[i].value)
                    incorrectans++;
                }


        }
    };

var a=  document.getElementsByClassName(game.q1);
//console.log(a);

  $("#done").on("click", function(){
    ans();
    final();
    document.getElementById("main").style.display = "none";
    document.getElementById("submit").style.display = "none";
    clearInterval(intervalId);
    //console.log(correctans);
    //console.log(incorrectans);

  });

  function final(){

    unanswered = totalQ - correctans - incorrectans;
    document.getElementById("final").style.display = "block";
    document.getElementById("win").textContent = correctans;
    document.getElementById("loss").textContent = incorrectans;
    document.getElementById("na").textContent = unanswered;

  }




// Below is the code for another approach I was trying





// var correctans = 0;
// var incorrectans = 0;
// var timer = 60;
// var main = document.getElementById("main");
// var h2 = document.createElement("H2");
// var intervalId;
// var a = 0;
// var c = "1";

// var game = [

//         q1 = {
//             question : "Which team has won the most Soccer World Cups",
//             option1 : "Brazil",
//             option2 : "Germany",
//             option3 : "Argentina",
//             option4 : "France",
//             answer : "Brazil",
//             option : ['Brazil', 'Germany', 'Argentina', 'France'],

//         },

//         q2 = {
//             question : "Which team has won the most Soccer World Cups",
//             option1 : "Brazil",
//             option2 : "Germany",
//             option3 : "Argentina",
//             option4 : "France",
//             answer : "Brazil",
//             option : ['Brazil', 'Germany', 'Argentina', 'France'],

//         },

//         q3 = {
//             question : "Which team has won the most Soccer World Cups",
//             option1 : "Brazil",
//             option2 : "Germany",
//             option3 : "Argentina",
//             option4 : "France",
//             answer : "Brazil",
//             option : ['England', 'Germany', 'Argentina', 'France'],

//         }

// ];


// createq(); 

// function createq(){

//     //run();

//     var questionHtml = '';
//     //game.forEach(function(j) 
//     for(j=0; j<game.length; j++){
//     var section = document.createElement("section");
//     section.setAttribute("id", a); 
//     // console.log(game.length);
//     //     console.log(section);
//     //     console.log(j);
//     questionHtml = '<p>'+  game[j].question + '</p>';
//     for(var i=0; i<game[j].option.length; i++) {
//     console.log(game[j].option.length) ;   
//     questionHtml += '<input type="radio" name="answer" class='+j
//     questionHtml += ' value="' + game[j].option[i] + '">'
//     questionHtml += game[j].option[i]
//   }
//   $("#main").append(section);
//   console.log(questionHtml);
//   document.getElementById(a).innerHTML = questionHtml;
  
//   a = a+1;
// }
// //document.getElementById('buttons').innerHTML = questionHtml;
// }


// function run() {
//     intervalId = setInterval(time, 1000);       
      
//   }

// function time() {

//     timer= timer-1;

//     document.getElementById("count").textContent = timer;

//     if(timer === 0){
//         alert("Time Up!");
//     }
//   }


//   function ans(){

//         for (var i = 0; i<4; i++){

//             var d=  document.getElementsByClassName(i);
//             console.log(i);
//             console.log(d);
//             if(d[i].Checked && d[i].value == game[i].answer){
//                 correctans++;
                
//             }else{
//                 incorrectans++;
//             }


//         }

//   };


//   $("#done").on("click", function(){
//     ans();
//     console.log(correctans);
//     console.log(incorrectans);

//   });




  
//   //ans();




//     // for(i=0; i<game.length; i++){
//     //     var page = $("#main");
//     //     var para = document.createElement("p");
//     //     para.setAttribute("id", i);
//     //     var node = document.createTextNode(game[i].question);
//     //     para.appendChild(node);
//     //     console.log(i);
//     //     page.append(para);
//     //     var x = document.createElement("FORM");
//     //     x.setAttribute("id", i+c);
//     //     para.appendChild(x);
//     //    // console.log(x);
//     //     //page.innerHTML += "<p id ="+i+ ">"+game[i].question+"</p>"; 
//     //     for(j=11; j<=14; j++){
//     //         document.getElementById(i).innerHTML = '<input type="radio" value="'+game[i].option[a]+'">'+ game[i].option[a]+'<br>';
//     //         var btn = document.createElement("INPUT");
//     //         var lbl = document.createElement("p");
//     //         btn.setAttribute("type", "radio");
//     //         btn.setAttribute("id", j);
//     //         btn.setAttribute("value", game[i].option[a]);
//     //        // lbl.setAttribute("f", game[i].option[a]);
//     //         lbl.textContent = game[i].option[a];
//     //         console.log(lbl);
//     //         x.appendChild(btn);
//     //         btn += game[i].option[a];
            
//     //         console.log(btn);
//     //         a = a+1;
//     //         //console.log(a);


//     //     }


// //     }




// // };


  
 