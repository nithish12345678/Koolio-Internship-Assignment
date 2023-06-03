var upButton1 =false , upButton2 =false, downButton1 =false, downButton2 =false;




document
.getElementById("upButton2")
.addEventListener("click", function () {
    // storing button clicked or not
    upButton2=!upButton2;
    //changing button color
    console.log("downButton2 pressed");
    if(upButton2){
      document.querySelector("#upButton2 img").setAttribute("src","images/upArrow-green.png")  ;
    }
    else{
      document.querySelector("#upButton2 img").setAttribute("src","images/upArrow.png")  ;
    }
    // document.getElementById("elevator").style.bottom="1200px";

    moveElevator(1);
  // moveElevator(2);
  
});

document
.getElementById("downButton1")
.addEventListener("click", function () {

  
  // moveElevator(0);
  downButton1 =!downButton1;
  console.log("downButton1 pressed");
  // console.log(downButton2);
  if(downButton1){
    document.querySelector("#downButton1 img").setAttribute("src","images/upArrow-green.png")  ;
  }
  else{
    document.querySelector("#downButton1 img").setAttribute("src","images/upArrow.png")  ;
  }
  // document.getElementById("elevator").style.bottom="400px";
  moveElevator(0);
});

document
.getElementById("downButton2")
.addEventListener("click", function () {
  downButton2 =!downButton2;
  console.log("downButton2 pressed");
  // console.log(downButton2);
  if(downButton2){
    document.querySelector("#downButton2 img").setAttribute("src","images/upArrow-green.png")  ;
  }
  else{
    document.querySelector("#downButton2 img").setAttribute("src","images/upArrow.png")  ;
  }
  // document.getElementById("elevator").style.bottom="800px";
  moveElevator(0);

 
});

document
.getElementById("upButton1")
.addEventListener("click", function () {
  // moveElevator(1);
  // storing whether button clicked or not
  upButton1=!upButton1;
   //changing button color
   console.log("upButton1 pressed");
   if(upButton1){
     document.querySelector("#upButton1 img").setAttribute("src","images/upArrow-green.png")  ;
   }
   else{
     document.querySelector("#upButton1 img").setAttribute("src","images/upArrow.png")  ;
   }

   var elevatorDiv = document.getElementById('elevator');

var styles = window.getComputedStyle(elevatorDiv);

var bottomValue = styles.getPropertyValue('bottom');
   console.log("bottom :",bottomValue);
   console.log("mall type: ",typeof(bottomValue) );
  //  document.getElementById("elevator").style.bottom="800px";
  
   moveElevator(1);
});



var interval = setInterval(function() { },
  1000);



  function moveElevator(destination) {
    var elevatorDiv = document.getElementById('elevator');
    var styles = window.getComputedStyle(elevatorDiv);
    var bottomValue = styles.getPropertyValue('bottom');
    var pos = bottomValue;
  
    console.log("Inside moveElevator:", pos);
  
    switch (pos) {
      case "400px":
        if (upButton1 && destination == 1) {
          setTimeout(() => {
            document.getElementById("elevator").style.bottom = "800px";
            moveElevator(1); // Recursive call with destination 1
          }, 5000);
        }
        break;
  
      case "800px":
        if (destination == 1) {
          if (!upButton2 && upButton1  || !upButton1 && upButton2 ) {
            setTimeout(() => {
              document.getElementById("elevator").style.bottom = "1200px";
              // moveElevator(1); // Recursive call with destination 1
            }, 5000);
          }

        } else if (destination == 0) {
          if (!downButton1) {
            setTimeout(() => {
              document.getElementById("elevator").style.bottom = "400px";
              // moveElevator(0); // Recursive call with destination 0
            }, 5000);
          }
        } else if (downButton1 && destination == 0) {
          setTimeout(() => {
            document.getElementById("elevator").style.bottom = "400px";
            // moveElevator(0); // Recursive call with destination 0
          }, 5000);
        }
        break;
  
      case "1200px":
        if (downButton2 && destination == 0) {
          setTimeout(() => {
            document.getElementById("elevator").style.bottom = "800px";
            moveElevator(0); // Recursive call with destination 0
          }, 5000);
        }
        break;
  
      default:
        console.log("default");
        break;
    }
  
    console.log("Current position:", pos);
  }
  







