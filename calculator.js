var fullOperation = "";
var operationSegment = "";
var opp = "";
var memory = "";
function queu(id){
  var num = $("#" + id).text();
  fullOperation += num;
  operationSegment += num;
  $("#screen").html(operationSegment);
}
function op(id){
  opp = $("#" + id).text();
  $("#screen").html(opp);
  fullOperation += opp;
  memory = operationSegment;
  operationSegment = "";
}
// Math functions
function add(a,b){
  console.log("a: " +a);
  console.log("b: "+b);
  console.log(a+b);
  return a+b;
}
function subtract(a,b){
  return a-b;
}
function multiply(a,b){
  return a*b;
}
function divide(a,b){
  return a/b;
}
 $(document).ready(function(){
  $(".num").click(function(){
    queu(this.id);
  });

  $(".op").click(function(){
    op(this.id)
  });

  $("#ce").click(function(){

  })

  $("#ac").click(function(){
    operationSegment = "";
    fullOperation = "";
    $("#screen").html("0");
  })

  $("#enter").click(function(){
    console.log(fullOperation);
    var arr = fullOperation.split(" ");

    while (arr.length >= 3){
      //convert to int
      arr[0] = parseInt(arr[0]);
      arr[2] = parseInt(arr[2]);
      //choose function based on operation
      if (arr[1] === "+"){
        var num = add(arr[0], arr[2])
      }
      else if(arr[1] === "-"){
        var num = subtract(arr[0], arr[2])
      }
      else if(arr[1] === "x"){
        var num = multiply(arr[0], arr[2])
      }
      else if (arr[1] === "÷"){
        var num = divide(arr[0], arr[2])
      }
      arr.splice(0,3, num);
      console.log("after operation: " + arr);
    }
    $("#screen").html(arr);
  })
});
