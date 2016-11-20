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
  }
  var num = $("#" + id).text();
  operationSegment += num;
  $("#currentNumber").html(operationSegment);
  $("#operation").append(num);
  lastId = "num";
  clearClicked = false;

}

//operator clicked
function op(id){
  console.log("lastOP: " + lastId);
  $("#currentNumber").css("color", "whitesmoke");
  if (lastId === "op"){
    return;
  }
  else{
    console.log("in here");
    opp = $("#" + id).text();
    $("#currentNumber").html(opp);
    if (operationComplete === false && clearClicked === false){
      fullOperation.push(operationSegment);
      clearClicked = false;
    }

    fullOperation.push(opp);
    console.log(fullOperation);
    $("#operation").append(" " + opp + " ");
    operationSegment = "";
    lastId = "op";
    operationComplete = false;
    clearClicked = false;
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
    op(this.id)
  });

  $("#ce").click(function(){
    console.log(lastId);
    // if we left the last number hangin' push it so
    // that's the one we get rid of.
    if (lastId === "num" && clearClicked === false){
      fullOperation.push(operationSegment);
      lastId = "op";
    }
    else if (lastId === "op"){
      lastId = "num";
    }
    fullOperation.pop();
    console.log(fullOperation);
    clearClicked = true;
    // display results
    $("#operation").html("");
    for (var i in fullOperation){
      $("#operation").append(fullOperation[i] + " ");
    }
    $("#currentNumber").html(fullOperation[fullOperation.length -1]);
    if (fullOperation.length === 0){
      $("#currentNumber").html("0");
    }
    operationSegment = "";
    clearClicked = true;
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
    if (fullOperation === "NaN"){
      $("#currentNumber").html("E R R O R");
      return;
    }
    fullOperation[0] = fullOperation[0].toString();
    if (fullOperation[0] === "NaN"){
      $("#currentNumber").html("E R R O R");
      //This is just the clear all function (abstract this out)
      fullOperation = [];
      $("#operation").html("");
      return;
    }
    $("#currentNumber").html(fullOperation);
    $("#currentNumber").css("color", "darksalmon");
    lastId = "num";
    operationComplete = true;
      operationSegment = "";
    console.log("whats left after solving " +fullOperation)
  })
});
