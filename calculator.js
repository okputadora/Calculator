var fullOperation = [];
var operationSegment = "";
var opp = "";
var memory = "";
varLastId = "op";
var operationComplete = false;
var clearClicked = false;

//number clicked
function queu(id){

  console.log(operationComplete)
  if (operationComplete === true){
    // start over;
    fullOperation = [];
    $("#operation").html("");
    $("#currentNumber").css("color", "whitesmoke");
    operationComplete = false;
    operationSegment = "";
  }
  var num = $("#" + id).text();
  operationSegment += num;
  $("#currentNumber").html(operationSegment);
  $("#operation").append(num);
  lastId = "num";

}

//operator clicked
function op(id){
  $("#currentNumber").css("color", "whitesmoke");
  console.log(lastId);
  if (lastId === "op"){
    return;
  }
  else{
    opp = $("#" + id).text();
    $("#currentNumber").html(opp);
    if (operationComplete === false){
      fullOperation.push(operationSegment);
    }

    fullOperation.push(opp);
    console.log(fullOperation);
    $("#operation").append(" " + opp + " ");
    operationSegment = "";
    lastId = "op";
    operationComplete = false;
  }
}
// Math functions
function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

//button cliucks

 $(window).on("load", function(){
   $('.clear').each(function(index, element){

     setTimeout(function(){
       element.classList.remove('loading');
     }, index * 200);

   });
  $('.op').each(function(index, element){

    setTimeout(function(){
      element.classList.remove('loading');
    }, index * 200);

  });
  $('.num').each(function(index, element){

    setTimeout(function(){
      element.classList.remove('loading');
    }, index * 200);

  });

  $(".num").click(function(){
    queu(this.id);
  });

  $(".op").click(function(){
    clearClicked = false;
    op(this.id)
  });

  $("#ce").click(function(){
    operationSegment = "";
    console.log(lastId);
    if (lastId === "num" && clearClicked === false){
      fullOperation.push(operationSegment);
      lastId = "op";
    }
    else if(lastId === "op"){
      lastId = "num";
    }
    console.log(fullOperation);
    fullOperation.splice(-1);
    console.log(lastId);
    console.log(fullOperation);

    // loop to create formatting with spaces
    $("#operation").html("");
    for (var i in fullOperation){
      $("#operation").append(fullOperation[i]);
      $("#operation").append(" ");
    }

    $("#currentNumber").html(fullOperation[fullOperation.length - 1]);
    if (fullOperation.length === 0){
      $("#currentNumber").html("0");
    }
    clearClicked = true;
    // operationSegment = "";
  });

  $("#ac").click(function(){
    clearClicked = false;
    operationSegment = "";
    fullOperation = [];
    $("#operation").html("");
    $("#currentNumber").html("0");
  })

  // solve
  $("#enter").click(function(){
    clearClicked = false;
    fullOperation.push(operationSegment);
    console.log(fullOperation);

    while (fullOperation.length >= 3){
      //convert to int
      fullOperation[0] = parseFloat(fullOperation[0]);
      fullOperation[2] = parseFloat(fullOperation[2]);
      //choose function based on operation
      if (fullOperation[1] === "+"){
        var num = add(fullOperation[0], fullOperation[2])
      }
      else if(fullOperation[1] === "-"){
        var num = subtract(fullOperation[0], fullOperation[2])
      }
      else if(fullOperation[1] === "x"){
        var num = multiply(fullOperation[0], fullOperation[2])
      }
      else if (fullOperation[1] === "÷"){
        var num = divide(fullOperation[0], fullOperation[2])
      }
      fullOperation.splice(0,3, num);
      console.log("after operation: " + fullOperation);
    }
    fullOperation[0] = fullOperation[0].toString();
    $("#currentNumber").html(fullOperation);
    $("#currentNumber").css("color", "darksalmon");
    lastId = "num";
    operationComplete = true;
    console.log(fullOperation)
  })
});
