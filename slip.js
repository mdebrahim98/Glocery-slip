

var prc2, prc2_value = 0;
var prc1, prc1_value = 0;

let isselected1 = true;
let isselected2 = true;

function cal() {
      var sum;
      sum = prc1_value + prc2_value;
      document.getElementById("demo").innerHTML = "Total RS." + sum;




}

function price1() {



      if (isselected1) {

            document.getElementById("card1").style.border = "5px solid green";
            prc1_value = 1000;
            isselected1 = false;

      }
      else {

            document.getElementById("card1").style.border = "gray";
            prc1_value = 0;
            isselected1 = true;
      }


      console.log(prc1_value);



}

function price2() {



      if (isselected2) {

            document.getElementById("card2").style.border = "5px solid green";
            prc2_value = 500;
            isselected2 = false;

      }
      else {

            document.getElementById("card2").style.border = "gray";
            prc2_value = 0;
            isselected2 = true;
      }


      console.log(prc2_value);



}

