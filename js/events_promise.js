
 function displayDate() {
    document.getElementById("time").innerHTML = Date();
  }
  
  function hideDisplayDate() {
    document.getElementById("time").innerHTML = "";
  }

  //events
  function changeUpperCase() {
    const x = document.getElementById("number_plate");
    x.value = x.value.toUpperCase();
  }

  function keyPress() {
    alert("onkeypress performed")
    }

    function doubleClick() {
        alert("doubleClick performed")
        }

    function scroll() {
    alert("scroll performed")
    }

    function checkCookies() {
        if (navigator.cookieEnabled == true) {
          alert('Cokkies is enabled');
        } else {
        alert('cookies not enabled');
        }
      }

   // Create a new custom event
   var event = new CustomEvent('madeActive');
    var element = document.getElementById('my-button');
    element.classList.add('active')
    element.addEventListener('click',function(){
        element.dispatchEvent(event);
        alert('Custom event working');
    })

  

//   dynamic typing
var x=4;
console.log(x);

x="chai moto chai moto";

console.log(x); //results is the string "chai moto chai moto"


//JS Promise
var power = function(x, y) {
    return new Promise((resolve,reject) => {
      var power = x ** y;
      if (power) {
        resolve(power);
      }
      else {
        reject(Error("Could not find the power of the two numbers!"));
      }
    });
  };
  
  var subtract = function(x, y) {
    return new Promise((resolve, reject) => {
      var sub = x - y;
      if (sub) {
        resolve(sub);
      }
      else {
        reject(Error("Could not subtract the two values!"));
      }
    });
  };
  
 
  // Starting promise chain
  power(2,3)
    .then((power) => {
      return subtract(power, 3);
    })
    .then((subtracted) => {
      return power(subtracted, 2);
    })
    .then((power) => {
      return power * 2;    
    })
    .then((result) => {
      console.log(" RESULT", result);
    })
    .catch((err) => {
      // If any part of the chain is rejected, print the error message.
      console.log(err);
    });


