var fullOperation = [];
var operationSegment = "";
var opp = "";
var memory = "";

//number clicked
function queu(id){
  var num = $("#" + id).text();
  operationSegment += num;
  $("#currentNumber").html(operationSegment);
  $("#operation").append(num);
}

//operator clicked
function op(id){
  opp = $("#" + id).text();
  $("#currentNumber").html(opp);
  fullOperation.push(operationSegment);
  fullOperation.push(opp);
  $("#operation").append(" " + opp + " ");
  operationSegment = "";
}
// Math functions
function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

//button cliucks

 $(document).ready(function(){
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
    fullOperation.splice(-1);
    $("").html(fullOperation[-1]);
  })

  $("#ac").click(function(){
    operationSegment = "";
    fullOperation = "";
    $("#currentNumber").html("0");
  })

  // solve
  $("#enter").click(function(){
    fullOperation.push(operationSegment);
    console.log(fullOperation);

    while (fullOperation.length >= 3){
      //convert to int
      fullOperation[0] = parseInt(fullOperation[0]);
      fullOperation[2] = parseInt(fullOperation[2]);
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
    $("#currentNumber").html(fullOperation);
  })
});
