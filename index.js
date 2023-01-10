
function ShowTotal(){
//    alert("hello")
    var SubOne = parseInt(document.getElementById("input-1").value);
    var SubTwo = parseInt(document.getElementById("input-2").value);
    var SubThree = parseInt(document.getElementById("input-3").value);
    var SubFour = parseInt(document.getElementById("input-4").value);
    var SubFive = parseInt(document.getElementById("input-5").value);

    if(SubOne>100 || SubTwo>100 || SubThree>100 || SubFour>100 || SubFive>100){
        alert("Please Enter Equal and Less Than 100 Marks")
    }
    else{
        var total = SubOne + SubTwo + SubThree + SubFour + SubFive;
        document.getElementById("text-1").innerHTML = "Your Total Marks = " + total;
    }
}

function ShowAverage(){
     
     var SubOne = parseInt(document.getElementById("input-1").value);
     var SubTwo = parseInt(document.getElementById("input-2").value);
     var SubThree = parseInt(document.getElementById("input-3").value);
     var SubFour = parseInt(document.getElementById("input-4").value);
     var SubFive = parseInt(document.getElementById("input-5").value);

     if(SubOne>100 || SubTwo>100 || SubThree>100 || SubFour>100 || SubFive>100){
         alert("Please Enter Equal and Less Than 100 Marks")
     }
     else{
         var total = SubOne + SubTwo + SubThree + SubFour + SubFive;
         var Avg = total/5
         document.getElementById("text-2").innerHTML = "Your Total Marks = " + Avg;

     }   
}

function ShowGrade(){
    var SubOne = parseInt(document.getElementById("input-1").value);
    var SubTwo = parseInt(document.getElementById("input-2").value);
    var SubThree = parseInt(document.getElementById("input-3").value);
    var SubFour = parseInt(document.getElementById("input-4").value);
    var SubFive = parseInt(document.getElementById("input-5").value);

    if(SubOne>100 || SubTwo>100 || SubThree>100 || SubFour>100 || SubFive>100){
        alert("Please Enter Equal and Less Than 100 Marks")
    }
    else{
        var total = SubOne + SubTwo + SubThree + SubFour + SubFive;
        var Avg = total/5

        if(Avg>= 80 || Avg<=100){
        document.getElementById("text-3").innerHTML = "Your Grade is A ";
      }
        else if(Avg>= 75 || Avg<= 80){
       document.getElementById("text-3").innerHTML = "Your Grade is B+ ";
      }
       else if(Avg>= 70 || Avg<= 75){
       document.getElementById("text-3").innerHTML = "Your Grade is B ";
      }
       else if(Avg>= 65 || Avg<= 70){
       document.getElementById("text-3").innerHTML = "Your Grade is C+ ";
      }
       else if(Avg>= 60 || Avg<= 65){
       document.getElementById("text-3").innerHTML = "Your Grade is C ";
      }
       else if(Avg>= 55 || Avg<= 60){
       document.getElementById("text-3").innerHTML = "Your Grade is D+ ";
      }
       else if(Avg>= 50 || Avg<= 55){
       document.getElementById("text-3").innerHTML = "Your Grade is D ";
      }
       else if(Avg<50){
       document.getElementById("text-3").innerHTML = "Your Grade is F ";
      }
       else{
         document.getElementById("text-3").innerHTML = "Your are Fail ";
      }
  }
}   